const loop = (value, testFunction, updateFunction, bodyFunction) => {
  for (let currentValue = value; testFunction(currentValue); currentValue = updateFunction(currentValue)) {
    bodyFunction(currentValue);
  }
}

loop(5, num => num > 0, num => num - 1, console.log);