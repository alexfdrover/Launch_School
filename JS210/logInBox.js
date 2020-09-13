/*
5 lines are being printed, with 3 of them unique
top and bottom lines are "+-" + "-"*string.length + "-+"
inner and outer lines are "| " + " "*string.length + " |"
center line is "| " + string + " |"
*/

function linePadder(length, character) {
  let stringContainer = '';
  for (let i = 0; i < length; i += 1) {
    stringContainer += character;
  }
  return stringContainer;
}

function logInBox(string) {
  console.log("+" + linePadder(string.length + 2, '-') + "+");
  console.log("|" + linePadder(string.length + 2, ' ') + "|");
  console.log("| " + string + " |");
  console.log("|" + linePadder(string.length + 2, ' ') + "|");
  console.log("+" + linePadder(string.length + 2, '-') + "+");
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
