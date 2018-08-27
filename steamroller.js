function steamrollArray(arr) {
  let flatArr = [].concat(...arr);
  return flatArr.some(Array.isArray) ? steamrollArray(flatArr) : flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); // Returns [1, 2, 3, 4]
