function doubleConsonants(string) {
  let newString = '';
  let consonantsRegex = /[^aeiou -]/i;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(consonantsRegex)) {
      newString += string[i] + string[i];
    } else {
      newString += string[i];
    }
  }

  return newString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""