
function integerToString(int) {
  if (int === 0) return '0';
  
  let validDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let stringContainer = '';
  
  while (int > 0) {
    let lastDigit = int % 10;
    int = Math.floor(int / 10);

    stringContainer = validDigits[lastDigit] + stringContainer;
  }

  return stringContainer;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"