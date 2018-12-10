const concept = ['arrays', 'can', 'be', 'mutated'];

// Function #1
function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept); // [ 'arrays', 'can', 'be', 'MUTATED' ]

// Function #2
function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept); // [ 'arrays', 'can', 'be' ]