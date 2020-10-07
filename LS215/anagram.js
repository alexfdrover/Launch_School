function anagram(word, list) {
  let sortedWord = word.split('').sort().join('');
  
  return list.filter(element => {
    return element.split('').sort().join('') === sortedWord;
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]