const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
console.log(words.some(word => {
  return word.length < 6;
})); // true

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const interestingWords = words.filter(word => word.length > 5);

// The every() method tests whether all elements in the array pass the test implemented by the provided function.
console.log(interestingWords.every(word => word.length > 5)); // true