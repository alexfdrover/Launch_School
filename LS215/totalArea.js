function totalArea(arr) {
  return arr.map(element => element[0] * element[1])
            .reduce((total, currentValue) => total += currentValue);
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121