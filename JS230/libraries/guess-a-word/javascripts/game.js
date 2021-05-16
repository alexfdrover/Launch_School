document.addEventListener('DOMContentLoaded', event => {
  const message = document.querySelector('#message');
  const letters = document.querySelector('#spaces');
  const guesses = document.querySelector('#guesses');
  const apples = document.querySelector('#apples');
  const replay = document.querySelector('#replay');


  let randomWord = (function () {
    let words = ['apple', 'orange', 'pear', 'banana'];
  
    return function() {
      let randIdx = Math.floor(Math.random() * words.length);
      if (words.length === 0) return undefined;
      return words.splice(randIdx, 1)[0];
    };
  })();

  function Game() {
    this.incorrect = 0;
    this.letters_guessed = [];
    this.correct_spaces = 0;
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }
    this.word = this.word.split("");
    this.init();
  }

  Game.prototype = {
    createBlanks: function() {
      let spaces = (new Array(this.word.length + 1)).join("<span></span>");

      let spans = letters.querySelectorAll("span");
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll("#spaces span");
    },
    init() {
      this.createBlanks();
    },
    displayMessage(text) {
      message.text = text;
    }
  };

  new Game();
});