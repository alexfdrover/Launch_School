function Circle(radius) {
  this.radius = radius;
  this.area = function() {
    return this.radius**2 * Math.PI;
  };
}

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function() {
//   this.swung = !this.swung;
//   return this;
// };

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));
// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true