
function unshift(arr, val) {
  for (let i = arr.length; i > 0; i -= 1) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}


let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]