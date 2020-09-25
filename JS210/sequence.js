function sequence(int) {
  let intArray = [];
  for (let i = 1; i <= int; i += 1) {
    intArray.push(i);
  }

  return intArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]