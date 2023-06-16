let content_element = document.querySelector(".content");
let url_element = document.querySelector(".url");
let save_element = document.querySelector(".save_button");

let content = "";
let url = "";

chrome.storage.local.get("highlighted", (res) => {
  console.log("res: ", res)
  if (res.highlighted.content) {
    content_element.innerHTML = res.highlighted.content;
    url_element.innerHTML = res.highlighted.url;
    content = res.highlighted.content;
    url = res.highlighted.url;
  }
});

save_element.addEventListener("click", async (e) => {
  chrome.tabs.query({ active: true }, (tabs) => {
    chrome.storage.local.get("highlighted", (highlighted_res) => {
      chrome.storage.local.get("saved", (saved_res) => {
        if (highlighted_res.highlighted) {
          if (saved_res.saved) {
            chrome.storage.local.set({ "saved": [...saved_res.saved, { content: content, url: url }] });
          } else {
            chrome.storage.local.set({ "saved": [{ content: content, url: url }] });

          }
        }
      });
    });
  });
  // incrememntIndex
});

document.querySelector("#go-to-options").addEventListener("click", function () {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL("options.html"));
  }
});

