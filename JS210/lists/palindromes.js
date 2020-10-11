function leadingSubstrings(str) {
  let newList = [];
  for (let i = 0; i < str.length; i += 1) {
    newList.push(str.slice(0, i + 1));
  }

  return newList;
}

function substrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 1) {
    result = result.concat(leadingSubstrings(str.slice(i)));
  }

  return result;
}

function isAPalindrome(str) {
  if (str.length <= 1) return false;
  
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - (i + 1)]) return false;
  }

  return true;
}

function palindromes(str) {
  return substrings(str).filter(isAPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
/*
returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/

console.log(palindromes('knitting cassettes'));
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]