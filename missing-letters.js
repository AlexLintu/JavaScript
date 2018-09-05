function fearNotLetter(str) {
  for (let i=0; i<str.length; i++) {
    let code = str.charCodeAt(i);
    
    if  (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code-1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce")); // Returns "d"

// Method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
