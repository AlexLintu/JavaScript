// 102

// Version 1
class Vector {
  // The actual constructor function that will be bound to the name Vector
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // All methods below are packaged into Vector.prototype (constructor's prototype)
  // Only method properties are currently allowed to be added to the prototype
  plus(anotherVector) {
    return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
  }

  minus(anotherVector) {
    return new Vector(this.x - anotherVector.x, this.y - anotherVector.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Version 2
// function Vector(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Vector.prototype.plus = function (other) {
//   return new Vector(this.x + other.x, this.y + other.y);
// };

// Vector.prototype.minus = function (other) {
//   return new Vector(this.x - other.x, this.y - other.y);
// };

// Object.defineProperty(Vector.prototype, "length", {
//   get: function () {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// });

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5