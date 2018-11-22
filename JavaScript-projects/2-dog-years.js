// Human age:
let humanAge = 27;

// First 2 years in doggo years:
let earlyYears = 2;
earlyYears *= 10.5;

// Doggo years starting from the year 3 and on:
let laterYears = humanAge - 2;
laterYears *= 4;

console.log(earlyYears, laterYears); // Returns: 21 100

// Calculating human age in doggo years:
let humanAgeInDogYears = earlyYears + laterYears;

// Lowercasing the sting:
let myName = 'Alex'.toLowerCase();
console.log(myName); // Returns: alex

// Outputting the result as a string:
console.log(`My name is ${myName}. I am ${humanAge} years old in human years which is ${humanAgeInDogYears} years old in dog years.`); // Returns: My name is alex. I am 27 years old in human years which is 121 years old in dog years.