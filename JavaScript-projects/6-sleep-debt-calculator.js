// Calculating actual hours of sleep per day:
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 7;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 7;
    case 'friday':
      return 8;
    case 'saturday':
      return 9;
    case 'sunday':
      return 9;
  }
}
console.log(getSleepHours('monday'));

// Calculating actual hours of sleep per week:
const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}
console.log('Actual hours of sleep: ' + getActualSleepHours());

// Calculating ideal hours of sleep per week:
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}
console.log('Ideal hours of sleep: ' + getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`You've got perfect amount of sleep: ${actualSleepHours} hours!`);
  } else if (actualSleepHours > idealSleepHours) {
    const hoursOver = actualSleepHours - idealSleepHours;
    console.log(`You've got more sleep than needed! You are ${hoursOver} hours over this week!`);
  } else {
    const hoursUnder = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest! You are ${hoursUnder} hours short of sleep this week!`);
  }
}

calculateSleepDebt();