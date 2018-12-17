// Dot notation examples:
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew; // 5
const planetArray = spaceship.flightPath; // ['Venus', 'Mars', 'Saturn']

// Bracket notation examples: 
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  homePlanet: 'Earth',
  numCrew: 5
};

let propName = 'Active Mission';
console.log(spaceship[propName]); // true

let isActive = spaceship['Active Mission'];
console.log(isActive); // true