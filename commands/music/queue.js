const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const musicPlayer = require('../../utils/MusicPlayer');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('查看目前的歌單'),
    async execute(interaction) {
        const queue = musicPlayer.getQueueList(interaction.guildId);
        
        if (!queue || queue.length === 0) {
            return interaction.reply('目前沒有播放任何歌曲。');
        }

        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('目前歌單')
            .setDescription(
                queue.map((song, index) => `${index === 0 ? '**[正在播放]**' : `**${index}.**`} ${song.title} (由 ${song.requester} 點播)`).join('\n')
            );

        await interaction.reply({ embeds: [embed] });
    },
};
