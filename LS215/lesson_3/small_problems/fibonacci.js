
function fibonacci(n) {
  if (n === 1 || n === 2) return 1;

  let sequence = [1, 1];
  for (let i = 2; i < n; i += 1) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[sequence.length - 1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
