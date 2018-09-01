function confirmEnding(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  }
  return false;
}

// test
confirmEnding("Bastian", "n");

// String.prototype.substr() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
