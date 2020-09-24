
function union(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (!newArray.includes(array1[i])) {
      newArray.push(array1[i]);
    }

    if (!newArray.includes(array2[i])) {
      newArray.push(array2[i]);
    }
  }

  return newArray.sort();
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]