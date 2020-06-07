const isEven = num => {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(22));
// → true
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-10));
// → true
console.log(isEven(-1));
// → false