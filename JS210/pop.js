
function pop(arr) {
  if (arr.length === 0) return undefined;

  let val = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return val;
}

const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]