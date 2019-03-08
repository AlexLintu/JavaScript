// 1. ES5 //
let Airplane = {};
Airplane.myAirplane = 'StarJet';

module.exports = Airplane;

// 2. ES5 //
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function () {
    return this.myAirplane;
  }
};

// 3. Export Default ES6 (exports one module per file) //
let Airplane = {};

Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500
  }
];

export default Airplane;