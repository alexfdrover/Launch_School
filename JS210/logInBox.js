/*
5 lines are being printed, with 3 of them unique
top and bottom lines are "+-" + "-"*string.length + "-+"
inner and outer lines are "| " + " "*string.length + " |"
center line is "| " + string + " |"
*/

function linePadder(string, character) {
  let stringContainer = '';
  for (let i = 0; i < string.length; i += 1) {
    stringContainer += character;
  }
  return stringContainer;
}

function logInBox(string) {
  console.log("+-" + linePadder(string, '-') + "-+");
  console.log("| " + linePadder(string, ' ') + " |");
  console.log("| " + string + " |");
  console.log("| " + linePadder(string, ' ') + " |");
  console.log("+-" + linePadder(string, '-') + "-+");
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
