
function halvsies(array) {
  let center = Math.ceil(array.length / 2);

  let firstHalf = array.slice(0, center);
  let lastHalf = array.slice(center);
  return [firstHalf, lastHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]