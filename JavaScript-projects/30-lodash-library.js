const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  }
}

console.log(_.clamp(3, 2, 4)); // 3
console.log(_.clamp(1, 2, 4)); // 2
console.log(_.clamp(5, 2, 4)); // 4
// Do not write or modify code below this line.
module.exports = _;