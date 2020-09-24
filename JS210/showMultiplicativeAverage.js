function showMultiplicativeAverage(arrayOfInt) {
  let sum = 1;
  for (let i = 0; i < arrayOfInt.length; i += 1) {
    sum *= arrayOfInt[i];
  }

  return (sum / arrayOfInt.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"