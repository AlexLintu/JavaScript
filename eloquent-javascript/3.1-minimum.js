const min = (num1, num2) => {
  if (num1 === num2) {
    return 'Both numbers are equal!';
  } else if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(min(10, 10));
// → Both numbers are equal!
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10