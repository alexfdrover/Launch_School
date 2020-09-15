
function missing(array) {
  let newArray = [];
  let min = array[0];
  let max = array[array.length - 1];

  for (let i = min; i <= max; i += 1) {
    if (array.indexOf(i) === -1) newArray.push(i);
  }

  return newArray;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []