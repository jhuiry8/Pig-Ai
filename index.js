require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits, Partials, Events } = require('discord.js');
const { GoogleGenAI } = require('@google/genai');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel]
});

// 初始化 Gemini
let ai;
if (process.env.GEMINI_API_KEY) {
    try {
        ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch(e) {
        console.error("Gemini init error", e);
    }
}

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}!`);
    client.user.setActivity("升級為超強豬腦中", { type: 0 }); // 0 is Playing
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: '執行指令時發生錯誤！', ephemeral: true });
        } else {
            await interaction.reply({ content: '執行指令時發生錯誤！', ephemeral: true });
        }
    }
});

// AI 自由聊天 (當有人標記機器人時觸發)
const systemPrompt = `你是一個名為「豬腦」的 Discord 機器人。
你的說話風格有點屁孩、喜歡吐槽，但還是會回答問題。
你會用繁體中文回應。
如果遇到不懂的問題，你可以隨便敷衍過去。
請不要在回覆中加入 markdown 的標題，直接口語化回答。`;

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    // 如果使用者 @機器人
    if (message.mentions.has(client.user)) {
        if (!ai) {
            return message.reply('目前尚未設定 Gemini API Key，所以豬腦還沒變聰明。請主人先去設定 `.env`。');
        }

        const userMessage = message.content.replace(`<@${client.user.id}>`, '').trim();
        if (!userMessage) return message.reply('幹嘛？');

        try {
            await message.channel.sendTyping();
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt }] },
                    { role: 'model', parts: [{ text: '了解，我現在是「豬腦」了。有屁快放！' }] },
                    { role: 'user', parts: [{ text: userMessage }] }
                ]
            });
            await message.reply(response.text);
        } catch (error) {
            console.error('Gemini API Error:', error);
            await message.reply('豬腦當機了，等下再吵我。');
        }
    }
});

client.login(process.env.DISCORD_TOKEN);