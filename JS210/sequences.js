function sequences(count, startNum) {
  if (count === 0) return [];
  let newArray = [];

  for (let i = 1; i <= count; i += 1) {
    newArray.push(startNum * i);
  }

  return newArray;
}

console.log(sequences(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequences(4, -7));         // [-7, -14, -21, -28]
console.log(sequences(3, 0));          // [0, 0, 0]
console.log(sequences(0, 1000000));    // []