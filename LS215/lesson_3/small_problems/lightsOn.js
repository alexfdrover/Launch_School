/*
Problem
n switches
switches labelled 1 to n
each switch has one light
each light starts 'off'
first pass hit each switch
second pass hit each second switch
third pass hit each third switch
etc
function takes one argument, n, returns an array of the n lights that are on after n passes

Examples
given below

Data
input: integer - n
output: array of integers - the lights that are on

algo
iterate through each light from 1 to n
for the current light i, iterate from 1 to i (call it j)
  for each iteration of j, check if i is cleanly divible from j
    if so, add 1 to your counter
  if the counter for i is odd, the light is on
  if the counter for i is even, the light is off
*/


function lightsOn(switches) {
  let onContainer = [];

  for (let i = 1; i <= switches; i += 1) {
    let counter = 0;

    for (let j = 1; j <= i; j += 1) {
      if (i % j === 0) counter += 1;
    }

    if (counter % 2 !== 0) onContainer.push(i);
  }

  return onContainer;
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]