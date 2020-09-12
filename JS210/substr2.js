/* 
problem
want a substring from a string, based on the starting and ending indices

examples
given

data
strings, loops, index-access

algo
create an empty string container
determine starting index
  if greater than string length, set to 0
  if less than 0 or Nan, set to 0
determine ending index
  if greater than string length, set to string.length
  if not given (undefined) set to string.length
  if less than 0 or NaN, set to 0
loop through the string from startIndex to endIndex (exclusive)
  at each loop, access the character at that index and add it to the string container
return the string container
guard clause: if start equals end, return an empty string
guard clause: if start > end, swap their values
*/

function substring(string, start, end) {
  if (start < 0 || Number.isNaN(start) || !Number.isInteger(start)) {
    start = 0;
  }

  if (start > string.length) {
    start = string.length;
  }
  
  if (end > string.length || end === undefined) {
    end = string.length;
  } else if (end < 0 || Number.isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  let stringContainer = '';
  for (let i = start; i < end; i += 1) {
    stringContainer += string[i];
  }

  return stringContainer;
}

let string = 'hello world';
console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"