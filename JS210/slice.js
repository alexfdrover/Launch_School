
function slice(array, start, end) {
  let arrayContainer = [];
  for (let i = start; i < end; i += 1) {
    arrayContainer.push(array[i]);
  }

  return arrayContainer;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]