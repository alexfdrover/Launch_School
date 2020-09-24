
function wordSizes(sentence) {
  let wordObject = {};
  if (sentence === '') return wordObject;
  
  let wordArray = sentence.split(' ');
  for (let i = 0; i < wordArray.length; i += 1) {
    let length = wordArray[i].length;
    wordObject[length] ? wordObject[length] += 1 : wordObject[length] = 1;
  }

  return wordObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}