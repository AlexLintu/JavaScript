const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

/* The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop. */
const robotKeys = Object.keys(robot);
console.log(robotKeys);

/* The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well) . The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array needs to be sorted first like Object.entries(obj).sort((a, b) => a[0] - b[0]);.*/
const robotEntries = Object.entries(robot);
console.log(robotEntries);

/* The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. */
const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);
console.log(newRobot);