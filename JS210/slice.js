
function slice(array, start, end) {
  if (start > end) [start, end] = [0, 0];
  if (end > array.length) end = array.length

  let arrayContainer = [];
  for (let i = start; i < end; i += 1) {
    arrayContainer.push(array[i]);
  }

  return arrayContainer;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]