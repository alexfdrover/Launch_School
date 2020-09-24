function isPalindrome(sentence) {
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

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true