const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
    AudioPlayerStatus,
    VoiceConnectionStatus,
    entersState,
    NoSubscriberBehavior
} = require('@discordjs/voice');
const ytdl = require('@distube/ytdl-core');

class MusicPlayer {
    constructor() {
        // guildId -> { connection, player, queue: [{ title, url, requester }] }
        this.queues = new Map();
    }

    getQueue(guildId) {
        if (!this.queues.has(guildId)) {
            this.queues.set(guildId, {
                connection: null,
                player: null,
                songs: []
            });
        }
        return this.queues.get(guildId);
    }

    async join(interaction) {
        const voiceChannel = interaction.member.voice.channel;
        if (!voiceChannel) {
            return false;
        }

        const guildId = interaction.guildId;
        const queue = this.getQueue(guildId);

        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });

        connection.subscribe(player);

        player.on(AudioPlayerStatus.Idle, () => {
            queue.songs.shift();
            if (queue.songs.length > 0) {
                this.playSong(guildId, queue.songs[0]);
            } else {
                // connection.destroy();
                // this.queues.delete(guildId);
            }
        });

        player.on('error', error => {
            console.error('Audio Player Error:', error);
            queue.songs.shift();
            if (queue.songs.length > 0) {
                this.playSong(guildId, queue.songs[0]);
            }
        });

        queue.connection = connection;
        queue.player = player;

        return true;
    }

    async playSong(guildId, song) {
        const queue = this.getQueue(guildId);
        try {
            const stream = ytdl(song.url, { filter: 'audioonly', highWaterMark: 1 << 25 });
            const resource = createAudioResource(stream);
            queue.player.play(resource);
        } catch (error) {
            console.error('Play Song Error:', error);
        }
    }

    async play(interaction, url) {
        const guildId = interaction.guildId;
        const queue = this.getQueue(guildId);

        if (!queue.connection) {
            const joined = await this.join(interaction);
            if (!joined) return { success: false, message: '請先加入語音頻道！' };
        }

        try {
            const info = await ytdl.getInfo(url);
            const song = {
                title: info.videoDetails.title,
                url: info.videoDetails.video_url,
                requester: interaction.user.tag
            };

            queue.songs.push(song);

            if (queue.player.state.status !== AudioPlayerStatus.Playing) {
                this.playSong(guildId, queue.songs[0]);
                return { success: true, message: `開始播放：**${song.title}**` };
            } else {
                return { success: true, message: `已加入歌單：**${song.title}**` };
            }
        } catch (error) {
            console.error(error);
            return { success: false, message: '找不到歌曲或網址無效。' };
        }
    }

    pause(guildId) {
        const queue = this.getQueue(guildId);
        if (queue.player) {
            queue.player.pause();
            return true;
        }
        return false;
    }

    resume(guildId) {
        const queue = this.getQueue(guildId);
        if (queue.player) {
            queue.player.unpause();
            return true;
        }
        return false;
    }

    skip(guildId) {
        const queue = this.getQueue(guildId);
        if (queue.player) {
            queue.player.stop(); // will trigger Idle event and play next
            return true;
        }
        return false;
    }

    getQueueList(guildId) {
        const queue = this.getQueue(guildId);
        return queue.songs;
    }

    leave(guildId) {
        const queue = this.getQueue(guildId);
        if (queue.connection) {
            queue.connection.destroy();
            this.queues.delete(guildId);
            return true;
        }
        return false;
    }
}

module.exports = new MusicPlayer();
