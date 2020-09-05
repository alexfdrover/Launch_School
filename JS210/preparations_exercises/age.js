let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));

for (let i = 0; i <= 40; i += 10) {
  console.log(`In ${i} years you will be ${age + i}.`);
}