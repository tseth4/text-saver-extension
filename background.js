console.log("from background")
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    chrome.storage.local.set({
      highlighted: {
        content: request.content,
        url: request.url
      }
    })
  }
);