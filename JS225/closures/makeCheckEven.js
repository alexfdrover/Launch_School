let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  let results = function(ele) {
    return ele % 2 === 0;
  }

  return results;
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]

