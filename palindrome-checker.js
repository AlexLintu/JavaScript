function palindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^0-9a-z]/g, "");
  console.log(cleanStr);
  
  let revStr = cleanStr.split("").reverse().join("");
  console.log(revStr);

  if (cleanStr === revStr) {
    return true;
  }
  
  return false;
}

console.log(palindrome("_eye")); // Returns true
