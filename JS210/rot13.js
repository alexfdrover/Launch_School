/*
problem
want to create a rot13 cipher
rotate each letter ahead 13 letters in the alphabet
alphabet repeats after 'z'
uppercase and lowercase remain in their respective cases
not alphabetical characters remain unchanged
return the new string

examples
given

data
string, loops, individual characters

algo
//outer loop
make blank string container
for each character, determine the character code
if character code is within 65-77 or 97-109
  this comparison should be able to be done implicitly  
  add 13 to character code, convert back to character, add to container
if character code is within 78-90, 110-122
  this comparison should be able to be done implicitly
  remove 13 from character code, convert back to character, add to container
if character code outside those ranges, add character to container
return container
*/

function rot13(string) {
  let stringContainer = '';
  for (let i = 0; i < string.length; i += 1) {
    let charCode = string[i].charCodeAt(0);
    if ((string[i] >= 'A' && string[i] <= 'M') || (string[i] >= 'a' && string[i] <= 'm')) {
      charCode += 13;
    } else if ((string[i] > 'M' && string[i] <= 'Z') || (string[i] > 'm' && string[i] <= 'z')) {
      charCode -= 13;
    }

    stringContainer += String.fromCharCode(charCode);
  }

  return stringContainer;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13('The quick brown fox jumped over the lazy dog'));
