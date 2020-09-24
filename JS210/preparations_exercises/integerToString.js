
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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"