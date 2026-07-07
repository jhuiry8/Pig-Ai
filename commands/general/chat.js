const { SlashCommandBuilder } = require('discord.js');
const { GoogleGenAI } = require('@google/genai');

// 初始化 Gemini API (需要環境變數 GEMINI_API_KEY)
// Fallback handled gracefully if key is missing
let ai;
try {
    if (process.env.GEMINI_API_KEY) {
        ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
} catch(e) {
    console.error("Gemini init error", e);
}

const systemPrompt = `你是一個名為「豬腦」的 Discord 機器人。
你的說話風格有點屁孩、喜歡吐槽，但還是會回答問題。
你會用繁體中文回應。
如果遇到不懂的問題，你可以隨便敷衍過去。`;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chat')
        .setDescription('和豬腦 AI 聊天')
        .addStringOption(option => 
            option.setName('message')
                .setDescription('你想對豬腦說什麼？')
                .setRequired(true)),
    async execute(interaction) {
        const userMessage = interaction.options.getString('message');
        
        if (!ai) {
            return interaction.reply('目前尚未設定 Gemini API Key，所以豬腦還沒變聰明。請主人先去設定 `.env`。');
        }

        await interaction.deferReply();

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt }] },
                    { role: 'model', parts: [{ text: '了解，我現在是「豬腦」了。有屁快放！' }] },
                    { role: 'user', parts: [{ text: userMessage }] }
                ]
            });

            await interaction.editReply(response.text);
        } catch (error) {
            console.error('Gemini API Error:', error);
            await interaction.editReply('豬腦當機了，等下再吵我。');
        }
    },
};
