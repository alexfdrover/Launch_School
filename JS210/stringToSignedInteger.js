
function stringToInteger(string) {
  let validCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let parsedNum = 0;

  for (let i = 0; i < string.length; i += 1) {
    let foundIndex = validCharacters.indexOf(string[i])
    
    if (foundIndex !== -1) {
      parsedNum = parsedNum * 10 + foundIndex;
    } else {
      if (parsedNum === 0 && string[0] !== '0') return '';
      return parsedNum;
    }
  }

  return parsedNum;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
