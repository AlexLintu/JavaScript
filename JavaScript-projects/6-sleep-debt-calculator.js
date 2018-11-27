// Calculating actual hours of sleep per day:
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 9;
      break;
    default:
      return 'Error! Please enter valid day name.';
      break;
  }
}

// Calculating actual hours of sleep per week:
const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}
console.log('Actual hours of sleep: ' + getActualSleepHours());

// Calculating ideal hours of sleep per week:
const getIdealSleepHours = idealHours => idealHours * 7;
console.log('Ideal hours of sleep: ' + getIdealSleepHours(8));

// Calculating sleep debt per week:
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log(`You've got the perfect amount of sleep: ${actualSleepHours} hours!`);
  } else if (actualSleepHours > idealSleepHours) {
    const hoursOver = actualSleepHours - idealSleepHours;
    console.log(`You've got more sleep than needed! You are ${hoursOver} hours over this week!`);
  } else {
    const hoursUnder = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest! You are ${hoursUnder} hours short of sleep this week!`);
  }
}

calculateSleepDebt();