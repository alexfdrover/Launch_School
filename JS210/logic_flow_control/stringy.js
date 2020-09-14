
function stringy(int) {
  let index = 0;
  let stringContainer = '';

  while (index < int) {
    stringContainer += '1';
    index += 1;
    if (index < int) {
      stringContainer += '0';
      index += 1;
    }
  }
  
  return stringContainer;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"