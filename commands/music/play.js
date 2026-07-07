const { SlashCommandBuilder } = require('discord.js');
const musicPlayer = require('../../utils/MusicPlayer');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('播放 YouTube 音樂')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('YouTube 影片網址')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        const url = interaction.options.getString('url');
        
        const result = await musicPlayer.play(interaction, url);
        await interaction.editReply(result.message);
    },
};
