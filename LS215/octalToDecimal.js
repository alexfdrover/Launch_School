function octalToDecimal(numberString) {
  let powerIndex = numberString.length;

  return numberString.split('')
                     .map(number => {
                       powerIndex -= 1;
                       return Number(number) * (8 ** powerIndex)
                     })
                     .reduce((total, element) => total += element);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9