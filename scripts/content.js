function highlightHandler(e) {
  var selection = document.getSelection();
  let selectedText = selection.toString();
  if (selection !== '') {
    console.log("className: ", selection.anchorNode);
    // let temp_el = document.createElement("div");
    // temp_el.innerHTML = "Hello World!";
    // selection.anchorNode.appendChild(temp_el);
    selectionHelper(selection);
  }
}

function selectionHelper(selection) {
  console.log("selection: ", selection);
  selection.focusNode.parentNode.innerHTML = "HEllo World!";
  let activeElement = document.activeElement;
  var start = selection.anchorOffset;
  var end = selection.focusOffset;
  if (start >= 0 && end >= 0) {
    let basenodedata = selection.baseNode.data;
    console.log(start, end);
    console.log("mystr: ", basenodedata);
    console.log("activeEl: ", activeElement);
    console.log("offset: ", basenodedata.substring(start, end))
  }
}

document.onmouseup = highlightHandler;

console.log("from content");