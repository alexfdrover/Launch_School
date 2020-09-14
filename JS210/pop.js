
function pop(arr) {
  let val = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return val;
}

let count = [1, 2, 3];
console.log(pop(count));
console.log(count);