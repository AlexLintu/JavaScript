// Version 1
const every = (arr, callback) => {
  for (let element of arr) {
    if (callback(element) === false) {
      return false;
    }
  }
  return true;
}

const array1 = [1, 30, 5, 29, 7, 13]; // false
const array2 = [11, 30, 15, 29, 17, 13] // true

console.log(every(array1, num => num > 10));
console.log(every(array2, num => num > 10));

// Version 2
const everyV2 = (arr, callback) => {
  return !arr.some(element => !callback(element))
}

const array3 = [1, 30, 5, 29, 7, 13]; // false
const array4 = [11, 30, 15, 29, 17, 13] // true

console.log(everyV2(array3, num => num > 10));
console.log(everyV2(array4, num => num > 10));
