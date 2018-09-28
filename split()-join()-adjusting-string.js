function sentensify(str) {
  // breaking our string into an array of elements first and then joining it into a string with spaces
  let joinedStr = str.split(/\W/).join(' ');
  return joinedStr;
}
console.log(sentensify("May-the-force-be-with-you")); // Returns "May the force be with you"
