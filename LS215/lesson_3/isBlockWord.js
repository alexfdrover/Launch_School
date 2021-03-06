/*
input:
  string - word
output:
  boolean
rules:
  can only use each block once
  can only use one letter from each block
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M
examples:
  given
data:
  array of subarrays
algo:
  /if word length > 13, return false
  /break word into stringLetters
  /for each letter, check for duplicate stringLetters in word
    /if duplicate stringLetters, return false
  /for each block, check if the letter array contains both sides
    /if so, return false
  /return true
*/

function isBlockWord(str) {
  if (str.length > 13) return false;

  const blocks = {
    1: ['B', 'O'],
    2: ['G', 'T'],
    3: ['V', 'I'],
    4: ['X', 'K'],
    5: ['R', 'E'],
    6: ['L', 'Y'],
    7: ['D', 'Q'],
    8: ['F', 'S'],
    9: ['Z', 'M'],
    10: ['C', 'P'],
    11: ['J', 'W'],
    12: ['N', 'A'],
    13: ['H', 'U'],
  };

  let stringLetters = str.toUpperCase().split('');
  for (let i = 0; i < str.length; i += 1) {
    let letterCount = stringLetters.reduce((tally, char) => {
      return stringLetters[i] === char ? tally + 1 : tally;
    }, 0);
    if (letterCount > 1) return false;
  }

  let blockKeys = Object.keys(blocks);
  for (let i = 0; i < blockKeys.length; i += 1) {
    let blockSide1 = blocks[blockKeys[i]][0];
    let blockSide2 = blocks[blockKeys[i]][1];
    if (stringLetters.includes(blockSide1) && stringLetters.includes(blockSide2)) return false;
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false