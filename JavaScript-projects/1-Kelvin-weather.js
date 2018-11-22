// Constant value of today's temperature in Kelvins:
const kelvin = 293;
console.log(`The temperature is ${kelvin} degrees Kelvin.`);

// Today's temperature in Celsius:
const celsius = kelvin - 273;
console.log(celsius);
console.log(`The temperature is ${celsius} degrees Celsius.`);

// Using formula to calculate the temperature in Fahrenheit:
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

// Rounding up decimal numbers:
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting temperature into Newtons:
const newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);