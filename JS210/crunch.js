/* 
problem
takes a string, removes any consecutive duplicate characters

examples
given

data
string, characters, loops

algo
create an empty container
for each character in the string, check the most recent addition to the container for a match (.endsWith())
  if there is a match, continue to next iteration
  if no match, add that character to the container
return the container
*/

function crunch(string) {
  let stringContainer = '';
  for (let i = 0; i < string.length; i += 1) {
    if (!stringContainer.endsWith(string[i])) {
      stringContainer += string[i];
    }
  }

  return stringContainer;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""