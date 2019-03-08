// 1. ES5 //
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

// 2. ES5 //
const Airplane = require('./1-airplane.js');

console.log(Airplane.displayAirplane()); // CloudJet



// 3. Export Default ES6 //
import Airplane from './1-airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function (element) {
    console.log('Fuel Capacity of' + element.name + ':' + element.fuelCapacity);
  })
}

displayFuelCapacity();

// 4. Named Exports ES6 //