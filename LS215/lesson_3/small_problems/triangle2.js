/**
 * all sides must be greater than 0 or invalid
 * sum of all sides must be exactly equal 180 or invalid
 * all sides are int
 * right: one angle is exactly 90 deg
 * acute: all angles are less than 90 deg
 * obtuse: one angle is greater than 90 deg
 * 
 */

function triangle2(side1, side2, side3) {
  let sides = [side1, side2, side3];
  if (sides.some(side => side === 0)) return "invalid";
  if (sides.reduce((side, sum) => sum += side) !== 180) return "invalid";

  if (sides.some(side => side > 90)) {
    return "obtuse";
  } else if (sides.every(side => side < 90)) {
    return "acute";
  } else {
    return "right";
  }
}

console.log(triangle2(60, 70, 50));       // "acute"
console.log(triangle2(30, 90, 60));       // "right"
console.log(triangle2(120, 50, 10));      // "obtuse"
console.log(triangle2(0, 90, 90));        // "invalid"
console.log(triangle2(50, 50, 50));       // "invalid"