let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth'
};

const greenEnergy = (obj) => {
  obj['Fuel Type'] = 'avocado oil';
}

const remotelyDisable = (obj) => {
  obj.disabled = true;
}

greenEnergy(spaceship);
console.log(spaceship); // { 'Fuel Type': 'avocado oil', homePlanet: 'Earth' }

remotelyDisable(spaceship);
console.log(spaceship); // { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }