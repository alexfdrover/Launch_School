/*
Procedural Approach
function fibonacci(n) {
  if (n === 1 || n === 2) return 1;

  let sequence = [1, 1];
  for (let i = 2; i < n; i += 1) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[sequence.length - 1];
}
*/

// Recursive approach with memoization
let memos = [0, 1, 1];

function fibonacci(n) {
  if (n === 1 || n === 2) return 1;
  if (memos[n]) {
    return memos[n];
  } else {
    memos.push(fibonacci(n - 1) + fibonacci(n - 2));
    return memos[n];
  }
}
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
