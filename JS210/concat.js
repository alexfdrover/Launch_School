
function concat(array1, item2) {
  let newArray = [];
  let length1 = array1.length;

  for (let i = 0; i < length1; i += 1) {
    newArray.push(array1[i]);
  }

  if (!Array.isArray(item2)) {
    newArray.push(item2);
  } else {
    for (let j = 0; j < item2.length; j += 1) {
      newArray.push(item2[j]);
    }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]
