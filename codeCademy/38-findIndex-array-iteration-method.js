// Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
// If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(element => element === 'elephant');
console.log(foundAnimal); // 7 is index position of the first matching condition element

const startsWithS = animals.findIndex(element => element[0] === 's');
console.log(startsWithS); // 3 ('seal')