
function wordCount(str) {
  let wordTally = {}

  let wordArray = str.split(' ');
  for (let idx in wordArray) {
    let word = wordArray[idx];
    if (wordTally[word] === undefined) {
      wordTally[word] = 0;
      wordTally[word] += 1;
    } else {
      wordTally[word] += 1;
    }
  }
  console.log(wordTally);
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
