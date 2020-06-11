/* 
  1. Algorithm conditions:
  function range(start, end) => returns an array of all numbers
  function sum(arrayOfNumbers) => returns the sum of all numbers in the array
  bonus: range(start, end, step) => returns an array of numbers depending on a step value

  2. Inputs and outputs data types:
  @param {number} start
  @param {number} end
  @returns {array} - Array of numbers

  3. Pseudo code algorithm:
  Store results in the `result` array
  Loop over the numbers starting from `start` and ending with `end`

  4. Code:
*/
// function range(start, end) {
//   let arrayOfNumbers = [];

//   for (let num = start; num <= end; num++) {
//     arrayOfNumbers.push(num);
//   }
//   return arrayOfNumbers;
// }

function range(start, end, step) {
  let arrayOfNumbers = [];

  if (step === undefined) {
    step = 1;
    for (let num = start; num <= end; num += step) {
      arrayOfNumbers.push(num);
    }
  } else {
    for (let num = start; num >= end; num += step) {
      arrayOfNumbers.push(num);
    }
  }
  return arrayOfNumbers;
}

function sum(arrayOfNumbers) {
  let sumOfNumbers = 0;

  for (let num of arrayOfNumbers) {
    sumOfNumbers += num;
  }
  return sumOfNumbers;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55