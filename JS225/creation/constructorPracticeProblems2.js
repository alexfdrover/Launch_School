// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }

// let shape = {
//   getType() {
//     return this.type;
//   },
// };

// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return (this.a + this.b + this.c);
// }
// Triangle.prototype.constructor = Triangle;

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }

// function createObject(obj) {
//   // this is a polyfill for Object.create
//   function F() {};
//   F.prototype = obj;
//   return new F();
// }

// Object.prototype.begetObject = function() {
//   // return Object.setPrototypeOf({}, this);
//   function F() {};
//   F.prototype = this;
//   return new F();
// }

// function neww(constructor, args) {
//   let obj = Object.create(constructor.prototype);
//   let results = constructor.apply(obj, args);
  
//   return typeof results === 'object' ? results : obj;
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };


// OLOO Pattern
// let Point = {             // capitalized name for the prototype as a convention
//   onXAxis() {             // shared methods defined on the prototype
//     return this.y === 0;
//   },

//   onYAxis() {
//     return this.x === 0;
//   },

//   distanceToOrigin() {
//     return Math.sqrt((this.x * this.x) + (this.y * this.y));
//   },

//   init(x, y) {            // optional init method to set states
//     this.x = x;
//     this.y = y;
//     return this;
//   },
// };

// let pointA = Object.create(Point).init(30, 40);
