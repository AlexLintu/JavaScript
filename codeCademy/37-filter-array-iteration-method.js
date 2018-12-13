// The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
// The elements that cause the callback function to return true are added to the new array.

// Example #1
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => num < 250);
console.log(smallNumbers); // [ 200, 3.14, 7, 13 ]

// Example #2
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
console.log(longFavoriteWords); // [ 'nostalgia', 'hyperbole', 'esoteric' ]