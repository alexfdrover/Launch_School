let randomWord = (function () {
  let words = ['apple', 'orange', 'pear', 'banana'];

  return function() {
    let randIdx = Math.floor(Math.random() * words.length);
    if (words.length === 0) return undefined;
    return words.splice(randIdx, 1);
  };
})();

