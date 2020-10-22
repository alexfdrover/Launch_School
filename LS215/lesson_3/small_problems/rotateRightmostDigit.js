/*
inputs: an int, an index int
output: an int

examples: below

rules:
the index int is offset from the string length
  e.g. index int of 1 is last digit (length - 1 as an index position)

algo:
convert the number to a string for manipulation
the digit of interest is located at -(index int)
slice from 0 to DoI
slice from DOI+1
concat(DOI)
return the above 3 items, converted back to a Number
*/

function rotateRightmostDigits(num, index) {
  if (index === 1) {
    return num;
  } else {
    let string = String(num);
    let firstSegment = string.slice(0, -index);
    let lastSegment = string.slice(-index + 1);
    let digitOfInterest = string[string.length - index];
    return Number(firstSegment.concat(lastSegment).concat(digitOfInterest));
  }
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917