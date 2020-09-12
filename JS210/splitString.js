/* 
Problem:
want to take a string, and split it along a given delimiter
it logs each split segment to the console
if no delimiter given, it logs "ERROR: No delimiter"
if delimiter is '', it splits along each character
if delimiter is ';', it returns the full string

Examples:
given below

Data:
strings, characters, loops, index-access
strings are immutable in js, meaning that new strings will have to be formed and logged

Algo:
create an empty string container
create an index and set it to the beginning of the string
check if there is any string left to analyze
  if yes, continue below
  if no, end
check if the current string character is the delimiter
  if no, add it to the string container
  if yes, log the string container to the console and reset container to ''
need a guard clause for no delimiter
need a guard clause for a delimiter of ''
edge case where final character is delimiter

*/


function splitString(string, delimiter = null) {
  if (delimiter === null) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (let i = 0; i < string.length; i += 1) {
      console.log(string[i]);
    }
    return;
  }

  let stringContainer = '';
  for (let i = 0; i < string.length; i += 1) {
    if (i === string.length - 1 && string[i] !== delimiter) {
      stringContainer += string[i];
      console.log(stringContainer);
    } else if (string[i] !== delimiter) {
        stringContainer += string[i];
    } else if (string[i] === delimiter) {
        console.log(stringContainer);
        stringContainer = '';
    }
  }
}


splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world


splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
