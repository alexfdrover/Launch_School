
function asciiValue(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    sum += string[i].charCodeAt(0);
  }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0