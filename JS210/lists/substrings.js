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

console.log(substrings('abcde'));

/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/