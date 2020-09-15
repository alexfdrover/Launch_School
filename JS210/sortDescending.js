
function sortDescending(arr) {
  let arrCopy = arr.slice();
  
  let swapped = true;
  while (swapped === true) {
    
    swapped = false;
    for (let i = 0; i < arrCopy.length - 1; i += 1) {
      if (arrCopy[i] < arrCopy[i + 1]) {
        [arrCopy[i], arrCopy[i + 1]] = [arrCopy[i + 1], arrCopy[i]];
        swapped = true;
      }
    }
  }
  
  return arrCopy;
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]