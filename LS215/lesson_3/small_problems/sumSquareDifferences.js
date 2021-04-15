/**
 * for each integer from 1...int
 *  add to list of digits
 *  square the integer, add it to list of squares
 * sum list of digits - sum list of squares
 */

function sumSquareDifference(int) {
  let sumOfDigits = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= int; i += 1) {
    sumOfDigits += i;
    sumOfSquares += i**2;
  }

  return sumOfDigits**2 - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150