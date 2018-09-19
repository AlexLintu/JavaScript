function uniteUnique(arr) {
  let args = [].concat(...arguments);
  return [...new Set(args)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // Returns [1, 3, 2, 5, 4]

/* Spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Arguments obj: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments 
   Set obj: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set */
