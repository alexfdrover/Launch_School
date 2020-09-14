
function concat(array1, array2) {
  let newArray = [];

  let totalLength = array1.length + array2.length;
  for (let i = 0; i < totalLength; i += 1) {
    if (i < array1.length) {
      newArray.push(array1[i]);
    } else {
      newArray.push(array2[i - array1.length]);
    }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
