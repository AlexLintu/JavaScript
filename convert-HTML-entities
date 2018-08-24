function convertHTML(str) {
  let arr = str.split(''); // Returns ["D", "o", "l", "c", "e", " ", "&", " ", "G", "a", "b", "b", "a", "n", "a"]
  for (let i=0; i<arr.length; i++) {
    switch (arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "<":
        arr[i] = "&lt;";
        break; 
      case ">":
        arr[i] = "&gt;";
        break;
      case '"':
        arr[i] = "&quot;";
        break;
      case "'":
        arr[i] = "&apos;";
        break;
    }
  }
  str = arr.join('');
  return str;
}

console.log(convertHTML("Dolce & Gabbana")); // Returns "Dolce &amp; Gabbana"
