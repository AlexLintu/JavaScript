const reverseArray = arr => {
  let reversedArr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    reversedArr.push(arr[index]);
  }
  return reversedArr;
}

const arr = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(arr)); // ['This', 'will', 'all', 'make', 'sense.'];