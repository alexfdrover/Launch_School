function repeater(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    newString += string[i] + string[i];
  }

  return newString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""