
function repeatedCharacters(string) {
  formattedString = string.toLowerCase();
  let obj = {};
  let filteredObj = {};

  for (let idx in formattedString) {
    if (!obj[formattedString[idx]]) obj[formattedString[idx]] = 0;
    obj[formattedString[idx]] += 1;
  }

  for (let prop in obj) {
    if (obj[prop] > 1) filteredObj[prop] = obj[prop];
  }

  return filteredObj;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }