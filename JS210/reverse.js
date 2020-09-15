
function reverse(input) {
  let container;
  if (typeof input === 'string') {
    container = '';
  } else if (Array.isArray(input)) {
    container = [];
  } else {
    return console.log('Invalid input');
  }

  for (let i = input.length - 1; i >= 0; i -= 1) {
    if (typeof input === 'string') {
      container += input[i];
    } else {
      container.push(input[i]);
    }
  }

  return container;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]