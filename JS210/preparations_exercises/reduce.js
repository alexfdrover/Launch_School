
let strings = ['a', 'b', 'c', 'd'];
let val = strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase();
}, '');
console.log(val);

console.log(Array.isArray(strings));