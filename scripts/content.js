function highlightHandler(e) {
  var text = document.getSelection();
  if(text !== '') {
      doStuff(text);
  }
}

function doStuff(text) {
  console.log("text: ", text.focusNode.data);
}

document.onmouseup = highlightHandler;

console.log("from content")