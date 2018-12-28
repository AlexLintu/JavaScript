// Using for loop:
const convertToBaby = arr => {
  let babyAnimals = [];
  for (let i = 0; i < arr.length; i++) {
    babyAnimals.push('baby ' + arr[i]);
  }
  return babyAnimals;
}

// Using .map() method:
const convertToBaby = arr => arr.map(animal => 'baby ' + animal);

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals));