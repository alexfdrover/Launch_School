/*
problem
input: message, keyword
output: message with characters shifted by appropriate amount

algo
/extract only the alpha characters from the message
/split extraction into segments that are the same length as the keyword
/for each segment
  /shift each character by an amount equal to the num-representation of the equivalent index character in the keyword
/map shifted characters back onto only the alpha characters
*/

function vigenere(msg, keyword) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  let index = 0;
  return msg.split('')
            .map(char => {
              if ((/[a-z]/i).test(char)) {
                let keywordIndex = alpha.indexOf(keyword[index]);
                let newChar = caesarEncrypt(char, keywordIndex);
                index = index >= 3 ? 0 : index + 1;
                return newChar;
              } else {
                return char;
              }
            })
            .join('');
}

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

console.log(vigenere("Pineapples don't go on pizzas!", "meat"));