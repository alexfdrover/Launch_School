function sum(int) {
  return String(int)
      .split('')
      .reduce((sum, ele) => sum += Number(ele), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45