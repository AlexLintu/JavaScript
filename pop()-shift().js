function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

// test
console.log(popShift(['challenge', 'is', 'not', 'complete']));
