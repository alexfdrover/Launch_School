function myReduce(array, func, initial) {
  let result;
  let index;

  if (initial === undefined) {
    result = array[0];
    index = 1;
  } else {
    result = initial;
    index = 0;
  }
  
  array.slice(index).forEach(element => {
    result = func(result, element);
  })
  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49