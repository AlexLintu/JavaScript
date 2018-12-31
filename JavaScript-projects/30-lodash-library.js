const _ = {
  // Number methods:
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
  // String methods:
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
  },
  // Object methods:
  has(object, key) {
    let hasValue = object[key] !== undefined;
    return hasValue;
  },
  invert(object) {
    let invertedObj = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObj[originalValue] = key;
    }
    return invertedObj;
  },
  findKey(object, func) {
    for (let key in object) {
      if (func(object[key])) {
        return key;
      }
    }
    return undefined;
  },
  // Array methods:
  drop(array, dropNum) {
    if (!dropNum) {
      dropNum = 1;
    }
    let droppedArr = array.slice(dropNum);
    return droppedArr;
  },
  dropWhile(array, func) { // https://lodash.com/docs/4.17.11#dropWhile
    let dropNumber = array.findIndex((element, index) => !func(element, index, array));
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) { // https://lodash.com/docs/4.17.11#chunk
    if (!size) {
      size = 1;
    }
    let newArr = [];
    for (let i = 0; i < array.length; i += size) {
      newArr.push(array.slice(i, i + size));
    }
    return newArr;
  }
}

// NUMBER METHODS:
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

// STRING METHODS:
// .words() test:
console.log(_.words('Hello there!')); // [ 'Hello', 'there!' ]
// .pad() tests:
console.log(_.pad('Hello', 10));
console.log(_.pad('Hello', 7));
console.log(_.pad('Hello', 2));

// OBJECT METHODS:
// .has() tests:
console.log(_.has({ name: 'Alex', city: 'Vancouver' }, 'name')); // true
console.log(_.has({ name: 'Alex', city: 'Vancouver' }, 'hobby')); // false
// .invert() test:
console.log(_.invert({ 'name': 'Alex', 'city': 'Vancouver' })); // { Alex: 'name', Vancouver: 'city' }
// .findKey() tests:
console.log(_.findKey({ 'name': 'Alex', favNumber: 5 }, num => num >= 5)); // favNumber
console.log(_.findKey({ 'name': 'Alex', favNumber: 5 }, num => num < 5)); // undefined

// ARRAY METHODS
// .drop() method tests:
console.log(_.drop(['a', 'b', 'c', 'd', 'e', 'f'], 3)); // [ 'd', 'e', 'f' ]
console.log(_.drop(['a', 'b', 'c', 'd', 'e', 'f'])); // [ 'b', 'c', 'd', 'e', 'f' ]
// .dropWhile() method test:
console.log(_.dropWhile([2, 4, 6, 7, 8, 10], num => num % 2 === 0)); // [ 7, 8, 10 ]
// .chunk() method tests:
console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)); // [ [ 1, 2, 3, 4, 5, 6 ], [ 7, 8, 9, 10 ] ]
console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ] ]

// Do not write or modify code below this line.
module.exports = _;