const { SlashCommandBuilder } = require('discord.js');
const musicPlayer = require('../../utils/MusicPlayer');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('讓機器人離開語音頻道並清空歌單'),
    async execute(interaction) {
        const success = musicPlayer.leave(interaction.guildId);
        if (success) {
            await interaction.reply('已離開語音頻道並清空歌單。');
        } else {
            await interaction.reply('機器人不在語音頻道中。');
        }
    },
};
