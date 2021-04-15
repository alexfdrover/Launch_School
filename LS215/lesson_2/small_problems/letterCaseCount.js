function letterCaseCount(str) {
  let lowercase = str.match(/[a-z]/g);
  let uppercase = str.match(/[A-Z]/g);

  lowercase = lowercase === null ? 0 : lowercase.length;
  uppercase = uppercase === null ? 0 : uppercase.length;
  let neither = str.length - lowercase - uppercase;

  return { lowercase,
           uppercase,
           neither,
          };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }