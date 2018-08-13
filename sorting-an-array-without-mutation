var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
// concat doesn't mutate an array, while sort does
  let newArr = arr.concat([]).sort((a,b) => a-b);
  return newArr;
}

console.log(nonMutatingSort(globalArray)); // Returns [2, 3, 5, 6, 9]
