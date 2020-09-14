
function splice(array, start, amount) {
  let tempArray = [];
  let spliceArray = [];

  for (let i = 0; i < start; i += 1) {
    tempArray.push(array.shift());
  }

  for (let j = 0; j < amount; j += 1) {
    spliceArray.push(array.shift());
  }

  length = tempArray.length;
  for (let k = 0; k < length; k += 1) {
    array.unshift(tempArray.pop());
  }

  return spliceArray;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]