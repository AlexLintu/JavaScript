function capitalizeASingleWord(word) {

  if (word.match(' ')) {
    return null;
  }

  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + restOfWord;
}


console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); // Hey
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho')); // null