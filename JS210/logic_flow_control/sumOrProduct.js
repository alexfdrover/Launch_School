
rlSync = require('readline-sync');

let integer = rlSync.question('Please enter an integer greater than 0: ');
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

let sum = 0;
if (operation === 's') {
  for (let i = 1; i <= integer; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`)
} else if (operation === 'p') {
  sum = 1;
  for (let i = 1; i <= integer; i += 1) {
    sum *= i;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${sum}.`)
}

