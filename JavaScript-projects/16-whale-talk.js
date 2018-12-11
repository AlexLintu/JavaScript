const input = 'Hi, Human';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) { // 'i' is inputIndex
  for (let j = 0; j < vowels.length; j++) { // 'j' is vowelsIndex
    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i].toLowerCase() === 'e' || input[i].toLowerCase() === 'u') {
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase()); // IUUA