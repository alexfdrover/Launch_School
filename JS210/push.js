
function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

console.log(push([1,2,3], 4));