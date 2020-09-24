
function integerToString(int) {
  let validDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let stringContainer = '';
  
  do {
    let lastDigit = int % 10;
    int = Math.floor(int / 10);

    stringContainer = validDigits[lastDigit] + stringContainer;
  } while (int > 0)

  return stringContainer;
}

function signedIntegerToString(int) {
  if (int > 0) {
    return '+' + integerToString(int);
  } else if (int < 0) {
    return '-' + integerToString(-int);
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"