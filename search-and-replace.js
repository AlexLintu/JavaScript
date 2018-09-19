function myReplace(str, before, after) {
  let index = str.indexOf(before); // Returns index of the first letter of before argument/word
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  let newStr = str.replace(before, after);
  return newStr;
}

console.log(myReplace("His name is Tom", "Tom", "john")); // Returns "His name is John"

// Method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
