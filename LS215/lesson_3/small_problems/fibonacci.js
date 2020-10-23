/**
 * F(1) = 1
 * F(2) = 2
 * F(n) = F(n-1) + F(n-2) for n > 2
 * input: nth digit of sequence
 * output: the nth value of the fibonacci sequence
 * 
 * 1st value is 1
 * 2nd value is 2
 * 3rd value is F(2) + F(1) = 3
 * 4th value is F(3) + F(2) = 5
 * 
 */

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
