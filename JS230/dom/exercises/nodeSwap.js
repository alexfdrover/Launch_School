
/*
input: 2 ids
output: true or undefined

search for DOM element with first id and save to variable - first
  document.getElementById(id1)
  if not found, return undefined
search for DOM element with second id and save to variable - second
  document.getElementById(id2)
  if not found, return undefined

check if first is a child of second
  if yes, return undefined
check if second is a child of first
  if yes, return undefined
this can be accomplished using node.contains(othernode)

swap first and second
deep clone first and second
find parents of first and second
firstParent.replace(secondClone, first)
secondParent.replace(firstClone, second)

*/

function nodeSwap(node1Id, node2Id) {
  const node1 = document.getElementById(node1Id);
  const node2 = document.getElementById(node2Id);

  if (!isInvalidSwap(node1, node2)) {
    const node1Clone = node1.cloneNode(true);
    const node2Clone = node2.cloneNode(true);
    const node1Parent = node1.parentNode;
    const node2Parent = node2.parentNode;

    node1Parent.replaceChild(node2Clone, node1);
    node2Parent.replaceChild(node1Clone, node2);
    return true;
  }
}

function isInvalidSwap(node1, node2) {
  return ((!node1 || !node2) ||
         node1.contains(node2) || node2.contains(node1));
}