
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(17));
console.log(isPrime(0));
console.log(isPrime(1));