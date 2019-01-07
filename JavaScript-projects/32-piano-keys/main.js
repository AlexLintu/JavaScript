// The keys and notes variables store the piano keys:
// keys variable stores an array of ids that match the keys:
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
// notes variable stores an array of elements that match the keys:
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
})
// About target property: https://www.w3schools.com/jsref/event_target.asp and https://developer.mozilla.org/en-US/docs/Web/API/Event/target
// Functions that change color of the key elements:
const keyPlay = (event) => {
  event.target.style.backgroundColor = 'blue';
}

const keyReturn = (event) => {
  event.target.style.backgroundColor = '';
}
// Function that assigns events to the keys:
const assignEvents = (note) => {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}
// Write a loop that runs the array elements through the function
notes.forEach(note => {
  assignEvents(note);
})

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}