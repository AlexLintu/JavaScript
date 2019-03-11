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

displayFuelCapacity(); // Fuel Capacity ofAeroJet:800, Fuel Capacity ofSkyJet:500

// 4. Named Exports ES6 //
import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function (element) {
    console.log('Fuel Capacity of' + element.name + ':' + element.fuelCapacity);
  })
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(element.name + 'meets staff requirements:' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}

displayStaffStatus(); // AeroJetmeets staff requirements:true, SkyJetmeets staff requirements:false

// 5. Export Named Exports ES6 //
import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function (element) {
    console.log('Fuel Capacity of' + element.name + ':' + element.fuelCapacity);
  })
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(element.name + 'meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus(); //AeroJetmeets speed range requirements: true, SkyJetmeets speed range requirements: false
