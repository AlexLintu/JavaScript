const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() { // The `this` keyword references the calling object `robot` which provides access to the calling object's properties. 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo()); // I am 1E78V2 and my current energy level is 100.

// Arrow functions:
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => { // `this` value is equal to the global object, which doesn't have dietType property:
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined