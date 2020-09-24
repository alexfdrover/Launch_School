function multiplyList(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    newArray.push(array1[i] * array2[i]);
  }

  return newArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]