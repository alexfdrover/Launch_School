
function shift(arr) {
  let val = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return val;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]