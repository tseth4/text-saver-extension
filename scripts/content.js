function highlightHandler(e) {
  var selection = document.getSelection();
  if (selection !== '') {
    selectionHelper(selection);
  }
}

function selectionHelper(selection) {
  let activeElement = document.activeElement;
  var start = selection.anchorOffset;
  var end = selection.focusOffset;
  if (start >= 0 && end >= 0 && selection.baseNode) {
    let base_node = selection.baseNode;
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
