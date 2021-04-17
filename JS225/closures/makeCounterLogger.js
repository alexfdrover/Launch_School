/*
return a function that
input: an integer
output: none
side effect: logs each number from n to m

check if finalValue > initialValue
  if yes
    iterate from n...m, logging each value
  if no
    iterate from m...n, logging each value

*/

function makeCounterLogger(n) {
  let initialValue = n;

  return function(finalValue) {
    if (finalValue > initialValue) {
      for (let i = initialValue; i <= finalValue; i += 1) {
        console.log(i);
      }
    } else {
      for (let i = initialValue; i >= finalValue; i -= 1) {
        console.log(i);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
// countlog(8);
// 5
// 6
// 7
// 8
// countlog(2);
// 5
// 4
// 3
// 2