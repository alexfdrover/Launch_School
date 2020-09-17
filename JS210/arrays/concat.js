
function concat(array1, ...args) {
  let newArray = [];
  let length1 = array1.length;

  for (let i = 0; i < length1; i += 1) {
    newArray.push(array1[i]);
  }

  for (let k = 0; k < args.length; k += 1) {
    if (!Array.isArray(args[k])) {
      newArray.push(args[k]);
    } else {
      for (let j = 0; j < args[k].length; j += 1) {
        newArray.push(args[k][j]);
      }
    }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]