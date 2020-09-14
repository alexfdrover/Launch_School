
function lastNOf(arr, count) {
  if (count > arr.length) count = arr.length;
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 9));    // returns [16, 23, 42]