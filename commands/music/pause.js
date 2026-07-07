const { SlashCommandBuilder } = require('discord.js');
const musicPlayer = require('../../utils/MusicPlayer');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('暫停目前播放的音樂'),
    async execute(interaction) {
        const success = musicPlayer.pause(interaction.guildId);
        if (success) {
            await interaction.reply('音樂已暫停。');
        } else {
            await interaction.reply('目前沒有播放音樂，或是機器人不在語音頻道中。');
        }
    },
};
