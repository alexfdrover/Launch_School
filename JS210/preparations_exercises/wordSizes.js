function sanitizeWord(word) {
  word = word.toLowerCase();
  
  let cleanedWord = '';
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] >= 'a' && word[i] <= 'z') {
      cleanedWord += word[i];
    }
  }

  return cleanedWord;
}

function wordSizes(sentence) {
  let wordObject = {};
  if (sentence === '') return wordObject;

  let wordArray = sentence.split(' ');
  for (let i = 0; i < wordArray.length; i += 1) {
    let newWord = sanitizeWord(wordArray[i]);
    let length = newWord.length;
    wordObject[length] ? wordObject[length] += 1 : wordObject[length] = 1;
  }

  return wordObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}