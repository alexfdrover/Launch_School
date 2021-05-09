function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let html = document.childNodes[1]; // skip doctype
let body = html.lastChild;         // skip head and text nodes
let heading = body.childNodes[1];  // skip text node
heading.style.color = 'red';
heading.style.fontSize = '48px';

let first = true;
walk(document, node => {
  if (node.nodeName === "P") {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});
