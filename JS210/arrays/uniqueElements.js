
function checkWithin(arr, value) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) return true;
  }

  return false;
}

function uniqueElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!checkWithin(newArr, arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
