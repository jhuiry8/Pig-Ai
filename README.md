<div align="center">
  <h1>🐷 Pig-Ai (豬腦 Discord 機器人)</h1>
  <p>一個現代化、聰明且具備完整音樂播放系統的 Discord 機器人</p>
  
  [![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue.svg?logo=discord&logoColor=white)](https://discord.js.org)
  [![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.14.0-brightgreen.svg?logo=node.js)](https://nodejs.org/)
  [![Gemini API](https://img.shields.io/badge/AI-Google_Gemini-orange.svg?logo=google)](https://aistudio.google.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

<br />

這是一個基於 `discord.js` v14 打造的現代化 Discord 機器人。不僅具備高音質的 YouTube 音樂播放系統，更完美整合了 **Google Gemini AI**，賦予機器人專屬的「豬腦」靈魂，告別死板的關鍵字回覆！

## ✨ 核心特色 (Features)

*   🎵 **無縫音樂體驗**：支援高音質 YouTube 播放、無延遲切換、歌單管理與操作。
*   🤖 **真實 AI 靈魂**：串接 Gemini 2.5 Flash API，具備「屁孩、愛吐槽」的專屬人設，對答如流。
*   ⚡ **現代化架構**：全面採用 Discord 最新的 `/` 斜線指令 (Slash Commands)，互動更直覺。
*   📦 **模組化設計**：指令與事件徹底分離，極易維護與擴充新功能。

---

## 🚀 快速開始 (Getting Started)

### 1. 環境需求 (Prerequisites)
*   **Node.js**: `v16.14.0` 或以上版本 (強烈建議使用 `v18+` 以獲得最佳效能)
*   **Discord Bot Token**: 至 [Discord Developer Portal](https://discord.com/developers/applications) 申請
*   **Gemini API Key**: 至 [Google AI Studio](https://aistudio.google.com/) 免費申請

### 2. 安裝與設定 (Installation)

1. **安裝依賴套件**
   ```bash
   npm install
   ```

2. **設定環境變數**
   在專案根目錄建立一個 `.env` 檔案，並填入以下內容：
   ```env
   DISCORD_TOKEN=你的_DISCORD_BOT_TOKEN
   CLIENT_ID=你的_DISCORD_CLIENT_ID
   GEMINI_API_KEY=你的_GEMINI_API_KEY
   ```

3. **部署指令 (Deploy Commands)**
   每次新增或修改斜線指令後，請執行此腳本來同步到 Discord 伺服器：
   ```bash
   node deploy-commands.js
   ```

4. **啟動機器人 (Start)**
   ```bash
   node index.js
   ```
   > 成功啟動後，終端機會顯示 `Logged in as ...`，這時你就可以在 Discord 中開始使用了！

---

## 🎮 指令指南 (Commands)

### 🎶 音樂功能
| 指令 | 說明 |
| :--- | :--- |
| `/play <url>` | 播放指定的 YouTube 音樂 (自動加入歌單) |
| `/pause` | 暫停目前正在播放的音樂 |
| `/resume` | 恢復播放被暫停的音樂 |
| `/skip` | 跳過目前的歌曲，播放下一首 |
| `/queue` | 查看目前完整的待播歌單 |
| `/leave` | 中斷連線、離開語音頻道並清空歌單 |

### 💬 一般功能
| 指令 | 說明 |
| :--- | :--- |
| `/chat <訊息>` | 呼叫 AI 進行對話 |
| `@機器人 <訊息>` | (頻道內直接標記) 呼叫 AI 進行對話 |

---

## 📂 專案架構 (Project Structure)

```text
Pig-Ai/
├── commands/            # 所有 Slash 指令存放區
│   ├── general/         # 一般/聊天相關指令 (chat.js)
│   └── music/           # 音樂播放相關指令 (play.js, queue.js...)
├── utils/               # 工具模組
│   └── MusicPlayer.js   # 封裝了 @discordjs/voice 的核心播放器邏輯
├── index.js             # 機器人主程式入口與事件監聽
├── deploy-commands.js   # 註冊 Slash Commands 的腳本
├── package.json         # 專案依賴管理
├── .env                 # (需自行建立) 環境變數設定檔
└── .gitignore           # Git 忽略清單
```

---

## 📜 授權條款 (License)

本專案採用 [MIT License](LICENSE) 授權。您可以自由使用、修改與散佈此專案程式碼，詳細條款請參閱 `LICENSE` 檔案。
