// Using for loop:
const greetAliens = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
}

// Using .forEach() method:
const greetAliens = arr => arr.forEach(name => console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`));

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

/* Output:
Oh powerful Blorgous, we humans offer our unconditional surrender!
Oh powerful Glamyx, we humans offer our unconditional surrender!
Oh powerful Wegord, we humans offer our unconditional surrender!
Oh powerful SpaceKing, we humans offer our unconditional surrender!
*/