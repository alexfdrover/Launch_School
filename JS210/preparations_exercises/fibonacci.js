function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(0));
console.log('-------');
console.log(fibonacci(1));
console.log('-------');
console.log(fibonacci(2));
console.log('-------');
console.log(fibonacci(5));
console.log('-------');
console.log(fibonacci(7));