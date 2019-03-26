console.log("This is the first line code in app.js."); // Printed 1st

const usingSTO = () => {
  console.log('Hi there!') // Printed 3rd
}
setTimeout(usingSTO, 3000);

console.log("This is the last line of code in app.js."); // Printed 2nd