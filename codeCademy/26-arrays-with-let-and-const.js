// let
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo'; // Replaced 'Ketchup' with 'Mayo'
console.log(condiments); // [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo']; // Reassigned `condiments` variable to a new array
console.log(condiments); // [ 'Mayo' ]

// const
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(utensils); // [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
utensils = ['Spoon']; // TypeError: Assignment to constant variable.