
let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age? '));
let retirementAge = Number(rlSync.question('At what age would you like to retire? '));

const today = new Date();
const currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + retirementAge - age}`);
console.log(`You only have ${retirementAge - age} years of work to go!`);
