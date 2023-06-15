function highlightHandler(e) {
  var selection = document.getSelection();
  // let selectedText = selection.toString();
  if (selection !== '') {
    selectionHelper(selection);
  }
}

function selectionHelper(selection) {
  console.log("Selection: ", selection);
  console.log("Selection tostring: ", selection.toString());
  let activeElement = document.activeElement;
  var start = selection.anchorOffset;
  var end = selection.focusOffset;
  if (start >= 0 && end >= 0 && selection.baseNode) {
    let base_node = selection.baseNode;
    let base_node_data = selection.baseNode.data;
    // console.log(start, end);
    // console.log("mystr: ", base_node_data);
    // console.log("activeEl: ", activeElement);
    // console.log("offset: ", base_node_data.substring(start, end));
    // console.log("url: ", base_node.baseURI);
    if(chrome.runtime.id == undefined) return;

    if (chrome.runtime?.id) {
      chrome.runtime.sendMessage({
        content: selection.toString(),
        url: base_node.baseURI
      })
    }

  }
}

document.onmouseup = highlightHandler;

console.log("from content");