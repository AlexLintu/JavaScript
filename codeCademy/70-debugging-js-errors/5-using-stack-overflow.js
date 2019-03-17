function containsCake(string1) {
  return string1.includes('cake');
}

console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.')); // true

console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.')); // false