// function staggeredCase(str) {
//   return str
//      .split('')
//      .map((char, index) => {
//        if (index % 2 === 0) {
//          return char.toUpperCase();
//        } else {
//          return char.toLowerCase();
//        }
//      })
//      .join('');
// }

function staggeredCase(str) {
  let state = 1;
  return str
    .split('')
    .map(char => {
      if ((/[^a-z]/gi).test(char)) {
        return char;
      } else if (state > 0) {
        state *= -1;
        return char.toUpperCase();
      } else {
        state *= -1;
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"