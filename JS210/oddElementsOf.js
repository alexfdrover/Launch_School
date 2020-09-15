
function oddElementsOf(arr) {
  let arrayContainer = [];

  for (let i = 1; i < arr.length; i += 2) {
    arrayContainer.push(arr[i]);
  }

  return arrayContainer;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]