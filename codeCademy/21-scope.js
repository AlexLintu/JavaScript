// Global scope variable, which can be accessed by any code in the program:
const city = 'New York City';
const logCitySkyline = () => {
  // Block scope local variable, which is only accessible to the lines of code within the block {}:
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());