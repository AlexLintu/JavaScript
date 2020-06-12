/* PEDAC: https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
1. Problem - Understand the problem, what are the input and output types
2. Example/Test Case - Validate understanding the problem
3. Data Structures - How we represent data that we will work with when converting the input to output
4. Algorithm - Pseudocode the steps for converting input to output
5. Code
*/

/*
1.
reverseArray() -> input: array; output: NEW array with elements in the inverse order
reverseArrayInPlace() -> input: array; output: MODIFIED array

4.

*/
function reverseArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let oldElement = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = oldElement;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]