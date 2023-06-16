console.log("options!!");
let clear_button_element = document.querySelector(".options_clear_button");
clear_button_element.addEventListener("click", clearStorage);

chrome.storage.onChanged.addListener(function (changes, namespace) {
  let contentList = document.querySelector(".options_content");
  if (changes.saved) {
    // console.log("changes: ", changes)
    changes.saved.newValue.forEach((e, i) => {
      let newNode = createContentElement(i, e.content, e.url)
      contentList.appendChild(newNode);
    })
  }
});

chrome.storage.local.get("saved", (res) => {
  // console.log("res: ", res)
  let contentList = document.querySelector(".options_content");
  if (res.saved) {
    res.saved.forEach((e, i) => {
      let newNode = createContentElement(i, e.content, e.url)
      contentList.appendChild(newNode);
    })
  }
})

function createContentElement(id, content, url) {
  let newNode = document.createElement("div");
  let textNode = document.createElement("div");
  let urlNode = document.createElement("div");
  // container
  newNode.dataset.id = id;
  newNode.className = "options_content__item";
  // content text
  textNode.className = "options_content__item_text";
  // container url
  urlNode.className = "options_content__item_url";
  textNode.innerHTML = content;
  urlNode.innerHTML = "Source: " + url;
  newNode.appendChild(textNode)
  newNode.appendChild(urlNode)
  return newNode;
}

function clearStorage() {
  console.log("clearing")
  chrome.storage.local.clear(() => {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }
  });
  window.location.reload();
}