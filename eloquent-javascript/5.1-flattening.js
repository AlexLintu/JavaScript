let arrays = [[1, 2, 3], [4, 5], [6]];

const callback = (accumulator, currentValue) => accumulator.concat(currentValue);
console.log(arrays.reduce(callback, ['A']));
// → ['A', 1, 2, 3, 4, 5, 6]