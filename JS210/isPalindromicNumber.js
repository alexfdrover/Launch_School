
function isPalindromicNumber(number) {
  let sentence = String(number);

  let even = sentence.length % 2 === 0;
  let center;
  if (even) {
    center = sentence.length / 2;
  } else {
    center = Math.floor(sentence.length / 2);
  }

  for (let i = 0, j = sentence.length - 1; i < center; i += 1, j -= 1) {
    if (sentence[i] !== sentence[j]) return false;
  }

  return true;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true