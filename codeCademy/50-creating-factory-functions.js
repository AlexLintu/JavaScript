const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    (typeof num === 'number' && num >= 0) ? (this._numOfSensors = num)
      : 'Pass in a number that is greater than or equal to 0';
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

// Factory function:
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep(); // Beep Boop
console.log(tinCan); // { model: 'P-500', mobile: true, beep: [Function: beep] }