
function firstNOf(arr, count) {
  let arrayContainer = [];
  for (let i = 0; i < count; i += 1) {
    arrayContainer.push(arr[i]);
  }
  
  return arrayContainer;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]