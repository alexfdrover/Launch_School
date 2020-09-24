function average(intArray) {
  let sum = 0;
  intArray.forEach(element => sum += element);

  return Math.floor(sum / intArray.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40