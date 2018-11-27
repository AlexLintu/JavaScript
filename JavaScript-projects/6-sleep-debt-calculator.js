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
  }
}
console.log(getSleepHours('monday'));

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}
console.log('Actual hours of sleep: ' + getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}
console.log('Ideal hours of sleep: ' + getIdealSleepHours());

