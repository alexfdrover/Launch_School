
let rlSync = require ('readline-sync');
let promptedNumbers = [];

promptedNumbers.push(rlSync.question('Enter the 1st number: '));
promptedNumbers.push(rlSync.question('Enter the 2nd number: '));
promptedNumbers.push(rlSync.question('Enter the 3rd number: '));
promptedNumbers.push(rlSync.question('Enter the 4th number: '));
promptedNumbers.push(rlSync.question('Enter the 5th number: '));

let final = rlSync.question('Enter the 6th number: ');

if (promptedNumbers.includes(final)) {
  console.log(`The number ${final} appears in ${promptedNumbers}`);
} else {
  console.log(`The number ${final} does not appear in ${promptedNumbers}`);
}
