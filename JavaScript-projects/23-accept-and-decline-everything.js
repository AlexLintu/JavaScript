const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => arr.forEach(politelyDecline);
declineEverything(veggies);
/* 
No broccoli please. I will have pizza with extra cheese.
No spinach please. I will have pizza with extra cheese.
No cauliflower please. I will have pizza with extra cheese.
No broccoflower please. I will have pizza with extra cheese.
*/

const acceptEverything = arr => arr.forEach(veg => console.log(`Ok, I guess I will eat some ${veg}.`));
acceptEverything(veggies);
/*
Ok, I guess I will eat some broccoli.
Ok, I guess I will eat some spinach.
Ok, I guess I will eat some cauliflower.
Ok, I guess I will eat some broccoflower.
*/