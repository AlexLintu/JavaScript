const countChar = (str, char) => {
  let charCounter = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === char) {
      charCounter += 1;
    }
  }
  return charCounter;
}

const countBs = str => {
  return countChar(str, 'B');
}

console.log(countBs("BBCBBCB"));
// → 2
console.log(countChar("kakkerklak", "k"));
// → 4
console.log(countChar("kakkerklak", "z"));
// → 0