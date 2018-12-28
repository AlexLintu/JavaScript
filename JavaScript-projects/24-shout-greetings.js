// Shout greetings:
const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
// [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]



// Sort years:
const sortYears = arr => arr.sort((a, b) => b - a);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
