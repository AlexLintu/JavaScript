const speciesArray = [{ speciesName: 'shark', numTeeth: 50 }, { speciesName: 'dog', numTeeth: 42 }, { speciesName: 'alligator', numTeeth: 80 }, { speciesName: 'human', numTeeth: 32 }];

const sortSpeciesByTeeth = arr => arr.sort((a, b) => a.numTeeth - b.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray));
/* Output:
[ { speciesName: 'human', numTeeth: 32 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]
*/

// .sort() method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort