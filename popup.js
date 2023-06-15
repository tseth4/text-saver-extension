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

save_element.addEventListener("click", (e) => {
  chrome.tabs.query({ active: true }, (tabs) => {
    chrome.storage.local.get("highlighted", (res) => {
      console.log("getting: ", res)
      if (res.highlighted.content) {
        if (res.saved) {
          chrome.storage.local.set({ "saved": [...res.saved, { content: content, url: url }] });
        } else {
          chrome.storage.local.set({ "saved": [{ content: content, url: url }] });

        }
      }
    });
  });
});

document.querySelector("#go-to-options").addEventListener("click", function () {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL("options.html"));
  }
});


// console.log("pop up")