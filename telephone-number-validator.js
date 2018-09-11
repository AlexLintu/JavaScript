function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4}$)/;
  return regex.test(str);
}

console.log(telephoneCheck("1(555)555-5555")); // Returns true

// Awesome RegEx tester: https://regex101.com/#javascript
// RegEx Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
