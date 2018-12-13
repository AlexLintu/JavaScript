// .forEach() loops through the array and executes the callback function for each element. 
// During each execution, the current element is passed as an argument to the callback function.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(item => console.log(`I want to eat a ${item}`));

/* Output:
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple
*/