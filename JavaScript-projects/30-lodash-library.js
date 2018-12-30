const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = number > start && number < end;
    return isInRange;
  },
  words(string) {
    let arrOfWords = string.split(' ');
    return arrOfWords;
  },
  pad(string, targetLength) {
    if (targetLength <= string.length) {
      return string;
    }
    let paddingStart = Math.floor((targetLength - string.length) / 2);
    let paddingEnd = targetLength - string.length - paddingStart;
    let paddedString = ' '.repeat(paddingStart) + string + ' '.repeat(paddingEnd);
    return paddedString;
  }
}

// .clamp() tests:
console.log(_.clamp(3, 2, 4)); // 3
console.log(_.clamp(1, 2, 4)); // 2
console.log(_.clamp(5, 2, 4)); // 4
// .inRange() tests:
console.log(_.inRange(3, 2, 4)); //  true
console.log(_.inRange(1, 2, 4)); // false
console.log(_.inRange(5, 2, 4)); // false
console.log(_.inRange(7, 2)); // false
console.log(_.inRange(3, 5, 2)); // true
// .words() tests:
console.log(_.words('Hello there!')); // [ 'Hello', 'there!' ]
// .pad() tests:
console.log(_.pad('Hello', 10));
console.log(_.pad('Hello', 7));
console.log(_.pad('Hello', 2));

// Do not write or modify code below this line.
module.exports = _;