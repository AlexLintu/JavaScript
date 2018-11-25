let tool = 'marker';

// if `tool` evaluates at `true` `writingUtensil` will be equal to its value `marker`, otherwise `writingUtensil` variable will be equal to 'pen':
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);