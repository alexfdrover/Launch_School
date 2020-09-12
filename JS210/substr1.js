
/* 
Problem
want a substring of a string, based on starting position and length of slice

Examples
given

Data
strings, loops, index-access

Algo
initialize a string container
determine starting index
  if start is a positive integer, access at that value
  if start is a negative integer, access the value (start + string.length)
determine how many characters you will slice
  if starting index + passed-in length value does not exceed the string's length, operate normally
  if starting index + passed-in length value exceeds string's length, do not iterate beyond string's length
loop through string, starting at starting index until either passed-in length, or until end of string
  access the string at that index position, add it to string container
return string container
guard clause if length is <= 0
*/

function substr(string, start, length) {
  if (length <= 0) return '';
  if (start < 0) start += string.length;

  let finalIndex = start + length
  if (finalIndex > string.length) {
    finalIndex = string.length;
  }

  let stringContainer = '';
  for (let i = start; i < finalIndex; i += 1) {
    stringContainer += string[i];
  }
  
  return stringContainer;
}
let string = 'hello world';
console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""




