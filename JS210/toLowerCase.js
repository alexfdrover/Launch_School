/*
problem:
want to convert a string to lowercase characters. string may contain all numbers, as well as mixed upper/lowercase letters

examples:
given

data:
strings, numbers, loops

algo:
create blank string container
for each character, check if it is within the range of 65-90 inclusive
  (let asciiNumeric = char.charCodeAt(0)) within 65-90
  if yes, perform the conversion algo and add to container
    asciiNumeric += 32
    char = String.fromCharCode(asciiNumeric)
    stringContainer += char
  if no, add to container

return container
*/

function toLowerCase(string) {
  let stringContainer = '';

  for (let i = 0; i < string.length; i += 1) {
    let asciiNumeric = string[i].charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
      stringContainer += String.fromCharCode(asciiNumeric);
    } else {
      stringContainer += string[i];
    }
  }

  return stringContainer;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"