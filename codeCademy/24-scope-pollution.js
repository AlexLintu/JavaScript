const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star'; // This global variable had been reassigned

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); // Night Sky: The Moon, Sirius, The Milky Way
console.log(stars); // Sirius