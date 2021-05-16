document.addEventListener('DOMContentLoaded', event => {
  const message = document.querySelector('#message');
  const letters = document.querySelector('#spaces');
  const guesses = document.querySelector('#guesses');
  const apples = document.querySelector('#apples');
  const replay = document.querySelector('#replay');
  const LOSE_MESSAGE = 'Game Over! Play again?';
  const WIN_MESSAGE = "You won! Play again?";


  let randomWord = (function () {
    let words = ['apple', 'orange', 'pear', 'banana'];
  
    return function() {
      let randIdx = Math.floor(Math.random() * words.length);
      if (words.length === 0) return undefined;
      return words.splice(randIdx, 1)[0];
    };
  })();

  function keyUpListener(event) {
      let keyPressedCode = event.keyCode;
      if (keyPressedCode >= 65 && keyPressedCode <= 90) {
        game.addLetter(event.key);
      }
  }

  function replayListener(event) {
    event.preventDefault();
    this.gameReset();
  }

  function Game() {
    this.incorrect = 0;
    this.letters_guessed = [];
    this.correct_spaces = 0;
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      this.removeListeners();
      return this;
    }
    this.word = this.word.split("");
    this.MAX_GUESSES = 6;
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
      document.addEventListener('keyup', keyUpListener);
      replay.addEventListener('click', replayListener.bind(this));
    },
    displayMessage(text) {
      message.innerHTML = text;
    },
    addLetter(letter) {
      if (!this.letters_guessed.includes(letter)) {
        this.letters_guessed.push(letter);
        this.makeGuess(letter);
      }
    },
    makeGuess(letter) {
      if (!this.word.includes(letter)) {
        this.wrongGuess();
      } else {
        this.rightGuess(letter);
      }
    },
    wrongGuess() {
      if (this.incorrect < this.MAX_GUESSES) {
        this.incorrect += 1;
        apples.className = `guess_${this.incorrect}`;
        if (this.incorrect === this.MAX_GUESSES) this.triggerLoseState();
      }
    },
    triggerLoseState() {
      message.innerHTML = LOSE_MESSAGE;
      this.removeListeners();
    },
    rightGuess(letter) {
      if (this.correct_spaces < this.word.length) {
        this.correct_spaces += this.word.filter(char => char === letter).length;
        this.updateLetters(letter);
        if (this.correct_spaces === this.word.length) this.triggerWinState();
      }
    },
    updateLetters(letter) {
      let slots = letters.querySelectorAll('span');
      this.word.forEach((char, idx) => {
        if (char === letter) slots[idx].innerHTML = letter.toUpperCase();
      });

    },
    triggerWinState() {
      message.innerHTML = WIN_MESSAGE;
      this.removeListeners();
    },
    removeListeners() {
      document.removeEventListener('keyup', keyUpListener);
      replay.removeEventListener('click', replayListener);
    },
    gameReset() {
      this.removeListeners();
      message.innerHTML = '';
      apples.className = '';
      game = new Game();
    },
  };

  

  let game = new Game();
});