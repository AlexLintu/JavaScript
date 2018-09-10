function rot13(str) { 
  return str.split('').map.call(str, function(letter) {
    let i = letter.charCodeAt(0);
    if (i < 65 || i > 90) {
      return String.fromCharCode(i); // Will return a character which is not an uppercase letter
    } else if (i < 78) {
      return String.fromCharCode(i+13); // Converting letters forward
    }
    return String.fromCharCode(i-13); // Converting letters backward, because if they will be converted forward they will no longer be uppercase letters
  }).join('');
}

console.log(rot13("SERR PBQR PNZC"));

// ASCII Reference: https://www.w3schools.com/charsets/ref_html_ascii.asp
