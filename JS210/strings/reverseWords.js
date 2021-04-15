function reverseWords(words) {
  let newArray = [];
  let wordsArray = words.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i].length >= 5) {
      newArray.push(wordsArray[i].split('').reverse().join(''));
    } else {
      newArray.push(wordsArray[i]);
    }
  }

  return newArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"