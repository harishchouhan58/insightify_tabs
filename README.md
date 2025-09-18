# 🧠 Insightify Tabs

Insightify Tabs is a Chrome Extension powered by Chrome’s AI APIs that summarizes all open tabs into a clean digest.

## 🚀 Features
- Summarizes all open tab titles (and contents if Chrome AI is enabled).
- Clean UI with one-click "Summarize Open Tabs".
- Works even in demo mode without AI API.

## 🛠 Built With
- HTML, CSS, JavaScript
- Chrome Extensions API
- (Optional) Chrome Built-in AI Preview APIs

## 📥 Installation
1. Download this repo as ZIP and unzip it.
2. Open Chrome → `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load Unpacked** → select `insightify_tabs/`
5. Click the Insightify Tabs icon and enjoy 🚀

## 🎥 Demo Video
https://youtu.be/eIDsTsPvDsk

## ⚡ Important Setup Note

Make sure your **Google AI API access is enabled** in Chrome.  
- Use the latest version of **Chrome Canary or Chrome Dev**.  
- Go to `chrome://flags` and enable:
  - `#optimization-guide-on-device-model`
  - `#prompt-api-for-gemini-nano` (or Summarizer API if available)  
- Restart your browser.

If the AI API is not available, the extension will gracefully fall back to **demo mode**, showing a list of your open tabs.
















