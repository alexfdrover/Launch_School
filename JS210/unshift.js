
function unshift(arr, ...args) {
  let length = arr.length + args.length - 1;
  for (let i = length; i > 0; i -= 1) {
    arr[i] = arr[i - 1];
  }
  
  for (let j = 0; j < args.length; j += 1) {
    arr[j] = args[j]
  }

  return arr.length;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3
