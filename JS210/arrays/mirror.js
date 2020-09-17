
function mirror(arr) {
  let arrayContainer = arr;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    arrayContainer.push(arr[i]);
  }
  return arrayContainer;
}

console.log(mirror([1, 2, 3]));