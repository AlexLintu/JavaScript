const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

// This is a variable called `functionality` that has access to robot.functionality:
const { functionality } = robot;
console.log(functionality); // { beep: [Function: beep], fireLaser: [Function: fireLaser] }
functionality.beep(); // Beep Boop