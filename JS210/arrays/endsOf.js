
function endsOf(beginArr, endArr) {
  let arrayContainer = [];

  arrayContainer[0] = beginArr[0];
  arrayContainer[1] = endArr[endArr.length - 1];
  
  return arrayContainer;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
