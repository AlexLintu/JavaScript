var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {  
  let copy = arr.slice(0);
  copy.push(bookName);
  return copy;
};

function remove (arr, bookName) {
  let copy = arr.slice(0);
  if (copy.indexOf(bookName) >= 0) {    
    copy.splice(copy.indexOf(bookName), 1);
    return copy;
    }
};

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// tests
console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);

// Alternatively arr bookList can be copied as:
// let copy = [...arr]; instead of let copy = arr.slice(0);
