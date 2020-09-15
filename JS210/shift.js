
function shift(arr) {
  if (arr.length === 0) return undefined;

  let val = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return val;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
