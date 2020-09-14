/*
problem
take an integer. return the index position of the first fibonacci number that has a length of that integer

examples
given

data
loops, numbers

algo
generate a fibonacci number in the sequence
  note its index
  determine its length
    to determine length size = 10 ** (int - 1)
  check size / fibonacci number
    if < 1, it is of the appropriate length
    if >= 1, repeat loop
return index
*/

function checkIndex(currentNum, length) {
  let size = 10 ** (length - 1);
  return size / currentNum < 1;
}

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;

  for (let i = 3; true ; i += 1) {
    let currentFibonacci = first + second;
    if (checkIndex(currentFibonacci, length)) return i;

    first = second;
    second = currentFibonacci;
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74