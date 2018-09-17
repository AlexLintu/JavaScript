function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  result.splice(n,0,...arr1);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/* methods:
Array.prototype.slice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Array.prototype.splice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
