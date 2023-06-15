console.log("options!!")

chrome.storage.onChanged.addListener(function (changes, namespace) {
  let contentList = document.querySelector(".options_content");
  changes.saved.newValue.forEach((e) => {
    let newNode = document.createElement("div");
    newNode.innerHTML = e.content + " " + e.url;
    contentList.appendChild(newNode);
  })
  // siteList.innerHTML = "";
  // changes.blockedSites.newValue.forEach((e) => {
  //   let newNode = document.createElement("li");
  //   newNode.innerHTML = e;
  //   siteList.appendChild(newNode);
  // });
});

chrome.storage.local.get("saved", (res) => {
  console.log("res: ", res)
  // let contentList = document.querySelector(".options_content");
  // res.saved.newValue.forEach((e) => {
  //   let newNode = document.createElement("div");
  //   newNode.innerHTML = e.content + " " + e.url;
  //   contentList.appendChild(newNode);
  // })
})