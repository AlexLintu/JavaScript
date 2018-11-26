let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = true;
let runnerAge = 20;

if (runnerAge > 18 && regEarly) {
  raceNumber += 1000;
} 

if (runnerAge > 18 && regEarly) {
  console.log(`Thank you for registering early! Your race number is ${raceNumber} and you will race at 9:30am.`);
} else if (runnerAge > 18 && !regEarly) {
  console.log(`You registered late! Your race numbers is ${raceNumber} and you will race at 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 12:30pm.`);
} else {
  console.log('Please see the registration desk!');
}