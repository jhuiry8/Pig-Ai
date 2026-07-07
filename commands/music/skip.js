const { SlashCommandBuilder } = require('discord.js');
const musicPlayer = require('../../utils/MusicPlayer');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('跳過目前的歌曲'),
    async execute(interaction) {
        const success = musicPlayer.skip(interaction.guildId);
        if (success) {
            await interaction.reply('已跳過目前歌曲。');
        } else {
            await interaction.reply('目前沒有播放音樂，或是機器人不在語音頻道中。');
        }
    },
};
