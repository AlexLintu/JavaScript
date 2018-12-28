// Using for loops:
const justCoolStuff = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// Using .filter() method:
const justCoolStuff = (arr1, arr2) => arr1.filter(word => arr2.includes(word));

// Using .filter() method and for loop:
function justCoolStuff(arr1, arr2) {
  function isInSecondArray(word) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === word) {
        return true;
      }
    }
    return false;
  }
  return arr1.filter(isInSecondArray)
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff))
// [ 'fruit-by-the-foot', 'skateboards', 'my room' ]