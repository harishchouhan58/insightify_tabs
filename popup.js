document.getElementById("summarizeBtn").addEventListener("click", async () => {
  chrome.tabs.query({}, async (tabs) => {
    document.getElementById("output").innerHTML = "⏳ Summarizing...";

    try {
      // ✅ If Chrome AI is available
      if (window.ai && ai.summarizer) {
        const contentList = tabs.map(t => t.title + " - " + t.url).join("\n");
        const session = await ai.summarizer.create({ type: "key-points" });
        const summary = await session.summarize(contentList);
        console.log(summary);
        document.getElementById("output").innerHTML = `<b>Summary:</b><br>${summary}`;
      } else {
        // 🚨 Fallback if AI API is not available
        console.log(tabs);
        let listHTML = `<b>Summary (demo):</b><br>Found ${tabs.length} open tabs.<br><br>`;
        listHTML += '<ul>';
        // 🔁 Loop through all open tabs
        for (let i = 0; i < tabs.length; i++) {
          listHTML += `<li>${tabs[i].title} <br></li>`;
        }
        listHTML += '</ul>';

        document.getElementById("output").innerHTML = listHTML;
      }
    } catch (err) {
      document.getElementById("output").innerHTML = "⚠️ Error: " + err.message;
    }
  });
});
