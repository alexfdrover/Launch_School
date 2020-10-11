function multiplyAllPairs(arr1, arr2) {
  function numSort(a, b) {
    if (Number(a) < Number(b)) {
      return -1;
    } else if (Number(a) > Number(b)) {
      return 1;
    } else {
      return 0;
    }
  }

  let result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      result.push(arr1[i] * arr2[j]);
    }
  }

  return result.sort(numSort);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]