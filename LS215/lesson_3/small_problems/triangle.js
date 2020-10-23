/**
 * two shortest lengths must be greater than third else return "invalid"
 * all lengths greater than 0 else return "invalid"
 * sides can be entered in any order
 * 
 */

function triangle(side1, side2, side3) {
  [side1, side2, side3] = [side1, side2, side3].sort((a, b) => a - b);
  if (side1 + side2 < side3) return "Invalid";
  if (!side1 || !side2 || !side3) return "Invalid";

  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 !== side2 && side2 !== side3) {
    return "scalene";
  } else {
    return "isoceles";
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"