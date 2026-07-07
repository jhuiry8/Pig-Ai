const { Client } = require('discord.js');
const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("聊天阿", { type: "PLAYING" });
});

client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('你好 瘋子');
  }
});

client.on('message', msg => {
  if (msg.content === '卐') {
    msg.reply('希特勒萬歲');
  }
});

client.on('message', msg => {
  if (msg.content === '牛逼') {
    msg.reply('對拉 我牛逼');
  }
});

client.on('message', msg => {
  if (msg.content === '屌你老母臭閪') {
    msg.reply('你有病吧');
  }
});

client.on('message', msg => {
  if (msg.content === '痾') {
    msg.reply(':thinking: ');
  }
});

client.on('message', msg => {
  if (msg.content === '...') {
    msg.reply('...');
  }
});

client.on('message', msg => {
  if (msg.content === '我好帥?') {
    msg.reply('明明是我很帥');
  }
});

client.on('message', msg => {
  if (msg.content === '沒問題的') {
    msg.reply('去彬彬家啦!');
  }
});

client.on('message', msg => {
  if (msg.content === '去彬彬家啦!') {
    msg.reply('https://tenor.com/view/%E6%9D%B0%E5%93%A5-gif-21691763');
  }
});

client.on('message', msg => {
  if (msg.content === '罵人的都行') {
    msg.reply('我罵搂 你是基掰');
  }
});

client.on('message', msg => {
  if (msg.content === '你好') {
    msg.reply('你好');
  }
});

client.on('message', msg => {
  if (msg.content === '哈囉') {
    msg.reply('哈囉');
  }
});

client.on('message', msg => {
  if (msg.content === '早安') {
    msg.reply('早安');
  }
});

client.on('message', msg => {
  if (msg.content === '日安') {
    msg.reply('日安');
  }
});

client.on('message', msg => {
  if (msg.content === '喇幹') {
    msg.reply('馬哩 幹');
  }
});

client.on('message', msg => {
  if (msg.content === '你好') {
    msg.reply('你好');
  }
});

client.on('message', msg => {
  if (msg.content === '馬德') {
    msg.reply('馬德勒');
  }
});

client.on('message', msg => {
  if (msg.content === '拔尬NONO') {
    msg.reply('拔尬yeahyeah');
  }
});

client.on('message', msg => {
  if (msg.content === '幹你娘死幡仔') {
    msg.reply('你才幹你娘死幡仔');
  }
});

client.on('message', msg => {
  if (msg.content === '襪草') {
    msg.reply('襪草');
  }
});

client.on('message', msg => {
  if (msg.content === '靠杯') {
    msg.reply('靠杯foryou');
  }
});

client.on('message', msg => {
  if (msg.content === '變態') {
    msg.reply('變態才是你');
  }
});

client.on('message', msg => {
  if (msg.content === '渾蛋') {
    msg.reply('滾蛋');
  }
});

client.on('message', msg => {
  if (msg.content === '變態') {
    msg.reply('變態才是你');
  }
});

client.on('message', msg => {
  if (msg.content === '王八') {
    msg.reply('王八蛋');
  }
});

client.on('message', msg => {
  if (msg.content === '人渣') {
    msg.reply('王力宏');
  }
});

client.on('message', msg => {
  if (msg.content === '王力宏') {
    msg.reply('王力宏不是那個人渣嗎? 外遇的那個阿');
  }
});

client.on('message', msg => {
  if (msg.content === '?!') {
    msg.reply('?!');
  }
});

client.on('message', msg => {
  if (msg.content === '你才...你全家都...') {
    msg.reply('?');
  }
});

client.on('message', msg => {
  if (msg.content === '今天過的好嗎') {
    msg.reply('我很好');
  }
});

client.on('message', msg => {
  if (msg.content === '今天過的好嗎?') {
    msg.reply('我很好');
  }
});

client.on('message', msg => {
  if (msg.content === '你想睡覺嗎') {
    msg.reply('我想');
  }
});

client.on('message', msg => {
  if (msg.content === '你全家死光') {
    msg.reply('死光');
  }
});

client.on('message', msg => {
  if (msg.content === '你誰') {
    msg.reply('林北是豬');
  }
});

client.on('message', msg => {
  if (msg.content === '能傳邀請連結嗎?') {
    msg.reply('不可以 因為你會被警告');
  }
});

client.on('message', msg => {
  if (msg.content === '睡覺') {
    msg.reply('？');
  }
});

client.on('message', msg => {
  if (msg.content === '你好') {
    msg.reply('幹你娘 靠杯');
  }
});

client.on('message', msg => {
  if (msg.content === '妳好') {
    msg.reply('hello');
  }
});

client.on('message', msg => {
  if (msg.content === '工撒小') {
    msg.reply('你才供撒小');
  }
});

client.on('message', msg => {
  if (msg.content === '去死') {
    msg.reply('你才去死');
  }
});

client.on('message', msg => {
  if (msg.content === '你是誰開發的') {
    msg.reply('我是豬開發的');
  }
});

client.on('message', msg => {
  if (msg.content === 'fuck') {
    msg.reply('fuck');
  }
});

client.on('message', msg => {
  if (msg.content === '您好') {
    msg.reply('你好');
  }
});

client.on('message', msg => {
  if (msg.content === '必死無疑') {
    msg.reply('什麼是必死無疑?');
  }
});

client.on('message', msg => {
  if (msg.content === '如果早知道 男生也會被性侵') {
    msg.reply('杰哥不要 https://www.youtube.com/watch?v=vZ9MbIJ3MzY&t=24s');
  }
});

client.on('message', msg => {
  if (msg.content === '幹') {
    msg.reply('幹');
  }
});


client.on('message', msg => {
  if (msg.content === '幹') {
    msg.reply('幹');
  }
});

client.on('message', msg => {
  if (msg.content === '你才瘋子') {
    msg.reply('瘋子');
  }
});

client.on('message', msg => {
  if (msg.content === '你全家死光光') {
    msg.reply('你全家死光 低能ㄦ');
  }
});

client.on('message', msg => {
  if (msg.content === '什麼是ai?') {
    msg.reply('ai就是林北');
  }
});

client.on('message', msg => {
  if (msg.content === '杰哥不要') {
    msg.reply('讓我看看 不要 聽話 不要');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Hello');
  }
});


client.on('message', msg => {
  if (msg.content === 'Fuck') {
    msg.reply('?');
  }
});


client.on('message', msg => {
  if (msg.content === '你是誰') {
    msg.reply('我是豬腦');
  }
});

client.on('message', msg => {
  if (msg.content === '查詢') {
    msg.reply('Hello');
  }
});

client.on('message', msg => {
  if (msg.content === '撒小') {
    msg.reply('？');
  }
});

client.on('message', msg => {
  if (msg.content === '？') {
    msg.reply('？');
  }
});

client.on('message', msg => {
  if (msg.content === 'are you ok?') {
    msg.reply('i ok');
  }
});

client.on('message', msg => {
  if (msg.content === 'hay') {
    msg.reply('i ok');
  }
});

client.on('message', msg => {
  if (msg.content === '你是幹嘛的') {
    msg.reply('我是pig的小幫手');
  }
});

client.on('message', msg => {
  if (msg.content === 'phelp') {
    msg.reply('你要幫忙嗎 去https://discord.gg/sxPn3YdnZn');
  }
});

client.on('message', msg => {
  if (msg.content === '介紹') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('我是豬腦')
      .setURL('https://bot.takepig.tw/')
      .setAuthor('pig ai', 'https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg', 'https://bot.takepig.tw/')
      .setDescription('AI')
      .setThumbnail('https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg')
      .addField('好玩', '好玩的ai')
      .addField('\u200B', '\u200B')
      .addField('好玩', 'ai', true)
      .addField('好玩', '94ai', true)
      .addField('好玩', '我就是ai', true)
      .setImage('https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg')
      .setTimestamp()
      .setFooter('我是豬腦', 'https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg');
msg.channel.send(embed);

    ;
  }
});
;

client.on('message', msg => {
  if (msg.content === 'pighelp') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('幫助')
      .setURL('https://bot.takepig.tw/')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=880867171738214431&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FVEux3EghzA&response_type=code&scope=bot%20identify')
      .setAuthor('pig ai', 'https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg', 'https://bot.takepig.tw/')
      .setDescription('AI')
      .setThumbnail('https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg')
      .addField('聊天', '自己摸索')
      .addField('音樂', '機器')
      .addField('\u200B', '\u200B')
      .addField('【機器人加入語音】', '..join', true)
      .addField('【播放音樂（加入隊列）】', '..play 音樂網址', true)
      .addField('【暫停播放】', '..pause', true)
      .addField('【恢復播放】', '..resume', true)
      .addField('【跳過這首歌曲】', '..skip', true)
      .addField('【查看歌曲隊列】', '..queue', true)
      .addField('【讓機器人離開語音頻道（會清空歌曲隊列）】', '..leave', true)
      .setImage('https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg')
      .setTimestamp()
      .setFooter('我是豬腦', 'https://i.pinimg.com/236x/58/05/bf/5805bfb974c92449a1c9335ebe58f009--minecraft-quilt-minecraft-room.jpg');
msg.channel.send(embed);

    ;
  }
});
;

// 建立一個類別來管理 Property 及 Method
class Music {

    constructor() {
        /**
         * 下面的物件都是以 Discord guild id 當 key，例如：
         * this.isPlaying = {
         *     724145832802385970: false
         * }
         */

        /**
         * 機器人是否正在播放音樂
         * this.isPlaying = {
         *     724145832802385970: false
         * }
         */
        this.isPlaying = {};

        /**
         * 等待播放的音樂隊列，例如：
         * this.queue = {
         *     724145832802385970: [{
         *         name: 'G.E.M.鄧紫棋【好想好想你 Missing You】Official Music Video',
         *         url: 'https://www.youtube.com/watch?v=P6QXo88IG2c&ab_channel=GEM%E9%84%A7%E7%B4%AB%E6%A3%8B'
         *     }]
         * }
         */
        this.queue = {};

        // https://discord.js.org/#/docs/main/stable/class/VoiceConnection
        this.connection = {};

        // https://discord.js.org/#/docs/main/stable/class/StreamDispatcher
        this.dispatcher = {};
    }

    async join(msg) {

        // 如果使用者正在頻道中
        if (msg.member.voice.channel !== null) {
            // Bot 加入語音頻道
            this.connection[msg.guild.id] = await msg.member.voice.channel.join();
        } else {
            msg.channel.send('請先進入語音頻道');
        }

    }

    async play(msg) {

        // 語音群的 ID
        const guildID = msg.guild.id;

        // 如果 Bot 還沒加入該語音群的語音頻道
        if (!this.connection[guildID]) {
            msg.channel.send('請先將機器人 `!!join` 加入頻道');
            return;
        }

        // 如果 Bot leave 後又未加入語音頻道
        if (this.connection[guildID].status === 4) {
            msg.channel.send('請先將機器人 `!!join` 重新加入頻道');
            return;
        }

        // 處理字串，將 !!play 字串拿掉，只留下 YouTube 網址
        const musicURL = msg.content.replace(`..play`, '').trim();

        try {

            // 取得 YouTube 影片資訊
            const res = await ytdl.getInfo(musicURL);
            const info = res.videoDetails;

            // 將歌曲資訊加入隊列
            if (!this.queue[guildID]) {
                this.queue[guildID] = [];
            }

            this.queue[guildID].push({
                name: info.title,
                url: musicURL
            });

            // 如果目前正在播放歌曲就加入隊列，反之則播放歌曲
            if (this.isPlaying[guildID]) {
                msg.channel.send(`歌曲加入隊列：${info.title}`);
            } else {
                this.isPlaying[guildID] = true;
                this.playMusic(msg, guildID, this.queue[guildID][0]);
            }

        } catch(e) {
            console.log(e);
        }

    }

    playMusic(msg, guildID, musicInfo) {

        // 提示播放音樂
        msg.channel.send(`播放音樂：${musicInfo.name}`);

        // 播放音樂
        this.dispatcher[guildID] = this.connection[guildID].play(ytdl(musicInfo.url, { filter: 'audioonly' }));

        // 把音量降 50%，不然第一次容易被機器人的音量嚇到 QQ
        this.dispatcher[guildID].setVolume(0.5);

        // 移除 queue 中目前播放的歌曲
        this.queue[guildID].shift();

        // 歌曲播放結束時的事件
        this.dispatcher[guildID].on('finish', () => {

            // 如果隊列中有歌曲
            if (this.queue[guildID].length > 0) {
                this.playMusic(msg, guildID, this.queue[guildID][0]);
            } else {
                this.isPlaying[guildID] = false;
                msg.channel.send('目前沒有音樂了，請加入音樂 :D');
            }

        });

    }

    resume(msg) {

        if (this.dispatcher[msg.guild.id]) {
            msg.channel.send('恢復播放');

            // 恢復播放
            this.dispatcher[msg.guild.id].resume();
        }

    }

    pause(msg) {

        if (this.dispatcher[msg.guild.id]) {
            msg.channel.send('暫停播放');

            // 暫停播放
            this.dispatcher[msg.guild.id].pause();
        }

    }

    skip(msg) {

        if (this.dispatcher[msg.guild.id]) {
            msg.channel.send('跳過目前歌曲');

            // 跳過歌曲
            this.dispatcher[msg.guild.id].end();
        }

    }

    nowQueue(msg) {

        // 如果隊列中有歌曲就顯示
        if (this.queue[msg.guild.id] && this.queue[msg.guild.id].length > 0) {
            // 字串處理，將 Object 組成字串
            const queueString = this.queue[msg.guild.id].map((item, index) => `[${index+1}] ${item.name}`).join();
            msg.channel.send(queueString);
        } else {
            msg.channel.send('目前隊列中沒有歌曲');
        }

    }

    leave(msg) {

        // 如果機器人在頻道中
        if (this.connection[msg.guild.id] && this.connection[msg.guild.id].status === 0) {

            // 如果機器人有播放過歌曲
            if (this.queue.hasOwnProperty(msg.guild.id)) {

                // 清空播放列表
                delete this.queue[msg.guild.id];

                // 改變 isPlaying 狀態為 false
                this.isPlaying[msg.guild.id] = false;
            }

            // 離開頻道
            this.connection[msg.guild.id].disconnect();
        } else {
            msg.channel.send('機器人未加入任何頻道');
        }

    }
}

const music = new Music();

// 當 Bot 接收到訊息時的事件
client.on('message', async (msg) => {

    // 如果發送訊息的地方不是語音群（可能是私人），就 return
    if (!msg.guild) return;

    // !!join
    if (msg.content === `..join`) {

        // 機器人加入語音頻道
        music.join(msg);
    }

    // 如果使用者輸入的內容中包含 !!play
    if (msg.content.indexOf(`..play`) > -1) {

        // 如果使用者在語音頻道中
        if (msg.member.voice.channel) {

            // 播放音樂
            await music.play(msg);
        } else {

            // 如果使用者不在任何一個語音頻道
            msg.reply('你必須先加入語音頻道');
        }
    }

    // !!resume
    if (msg.content === `..resume`) {

        // 恢復音樂
        music.resume(msg);
    }

    // !!pause
    if (msg.content === `..pause`) {

        // 暫停音樂
        music.pause(msg);
    }

    // !!skip
    if (msg.content === `..skip`) {

        // 跳過音樂
        music.skip(msg);
    }

    // !!queue
    if (msg.content === `..queue`) {

        // 查看隊列
        music.nowQueue(msg);
    }

    // !!leave
    if (msg.content === `..leave`) {

        // 機器人離開頻道
        music.leave(msg);
    }
});


client.login('Your token');