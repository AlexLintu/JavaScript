const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// .shift() Mutating - Removes the first element from an array and returns that element.
groceryList.shift();
console.log(groceryList); // [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

// .unshift() Mutating - Adds one or more elements to the front of an array and returns the new length of the array.
groceryList.unshift('popcorn');
console.log(groceryList); // [ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

// .slice() Non-Mutating - Extracts a section of an array and returns a new array.
const friendsList = groceryList.slice(1, 4);
console.log(friendsList); // [ 'bananas', 'coffee beans', 'brown rice' ]
console.log(groceryList.slice(1, 4)); // [ 'bananas', 'coffee beans', 'brown rice' ]

// .indexOf()
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// .push() Mutating - Add to the end of an array.
groceryList.push('avocados');
console.log(groceryList); // [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains', 'avocados' ]

// .pop() Mutating - Remove form the end of an array.
groceryList.pop();
console.log(groceryList); // [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]