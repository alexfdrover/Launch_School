/*
problem
inputs: string message, int offset
outputs: string shifted message

rules
only shifts a-z/i characters, all others are left as is
shifted letters keep their case
only takes int numbers as input
can wrap around if key exceeds length of alphabet

examples
below

data
arrays of letters ordered by index

algo
/create an array of characters for a-z
/create an array of characters for A-Z
/split message into characters
/for each character in the message,
/  check if its in lowercase
/    if yes, algo uses lowercase
/  check if its in uppercase
/    if yes, algo uses uppercase
/  otherwise push as-is to new string container

algo cont
add the key to the index value
if the new index value is greater than the character array length, subtract 26
find the new character at that index position
push it to the string container
*/

function caesarEncrypt(msg, offset) {
  function adjustOffset(charIndex, offset) {
    result = charIndex + offset
    while (result > 26) {
      result -= 26;
    }

    return result;
  }

  let newString = '';
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercase = lowercase.map(ele => ele.toUpperCase());
  let characters = msg.split('');

  characters.forEach(char => {
    let charIndex;
    if (lowercase.indexOf(char) !== -1) {
      charIndex = lowercase.indexOf(char);
      charIndex = charIndex + offset > 25 ? adjustOffset(charIndex, offset) : charIndex + offset;
      newString = newString.concat('', lowercase[charIndex]);
    } else if (uppercase.indexOf(char) !== -1) {
        charIndex = uppercase.indexOf(char);
        charIndex = charIndex + offset > 25 ? adjustOffset(charIndex, offset) : charIndex + offset;
        newString = newString.concat('', uppercase[charIndex]);
      }
     else {
      newString = newString.concat('', char);
     }
  });

  return newString;
}


// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
/*
*/