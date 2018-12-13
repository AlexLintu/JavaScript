// .map() will iterate through each element in the array and pass the element into the callback function and return new array.
// Example #1
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(letter => letter[0]);
console.log(secretMessage.join('')); // HelloWorld

// Example #2
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(num => num / 100);
console.log(smallNumbers); // [ 1, 2, 3, 4, 5 ]