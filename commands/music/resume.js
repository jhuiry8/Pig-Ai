const { SlashCommandBuilder } = require('discord.js');
const musicPlayer = require('../../utils/MusicPlayer');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription('恢復播放音樂'),
    async execute(interaction) {
        const success = musicPlayer.resume(interaction.guildId);
        if (success) {
            await interaction.reply('音樂已恢復播放。');
        } else {
            await interaction.reply('目前沒有播放音樂，或是機器人不在語音頻道中。');
        }
    },
};
