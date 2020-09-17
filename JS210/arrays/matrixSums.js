
function matrixSums(arr) {
  let sumArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    let elementSum = 0;
    for (let j = 0; j < arr[i].length; j += 1) {
      elementSum += arr[i][j];
    }
    sumArray.push(elementSum);
  }

  return sumArray;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
