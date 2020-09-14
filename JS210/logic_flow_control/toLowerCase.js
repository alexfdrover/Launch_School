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
  (let currentASCIIVal = char.charCodeAt(0)) within 65-90
  if yes, perform the conversion algo and add to container
    currentASCIIVal += 32
    char = String.fromCharCode(currentASCIIVal)
    stringContainer += char
  if no, add to container

return container
*/

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  const asciiA = 65;
  const asciiZ = 90;
  let stringContainer = '';

  for (let i = 0; i < string.length; i += 1) {
    let currentASCIIVal = string[i].charCodeAt(0);

    if (currentASCIIVal >= asciiA && currentASCIIVal <= asciiZ) {
      currentASCIIVal += CONVERSION_OFFSET;
    }

    stringContainer += String.fromCharCode(currentASCIIVal);
  }

  return stringContainer;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"