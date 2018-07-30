function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (func(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}

// test
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0)); // undefined
