
function swap(sentence) {
  let wordArray = sentence.split(' ');
  wordArray = wordArray.map(element => {
    element.split('').reverse().join('');
  });

  return wordArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"