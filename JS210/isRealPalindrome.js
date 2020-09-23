function removeNonString(sentence) {
  let stringContainer = '';
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i].match(/[a-z0-9]/i)) stringContainer += sentence[i];
  }

  return stringContainer;
}

function isRealPalindrome(sentence) {
  sentence = removeNonString(sentence).toLowerCase();

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

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false