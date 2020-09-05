function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let left = getNumber("Please enter the first value: ");
let right = getNumber("Please enter the second value: ");

console.log(`${left} * ${right} = ${multiply(left, right)}`);