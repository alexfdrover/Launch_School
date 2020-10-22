function wordToDigit(str) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  numbers.forEach(number => {
    let regex = new RegExp(number, 'g');
    str = str.replace(regex, numbers.indexOf(number));
  });

  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."