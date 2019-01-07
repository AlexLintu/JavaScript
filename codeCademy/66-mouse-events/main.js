// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.hidden = true;
};
resetButton.onclick = reset;

itemOne.onmouseover = () => {
  itemOne.style.width = '500px';
}

itemTwo.onmouseup = () => {
  itemTwo.style.backgroundColor = 'blue';
}

itemThree.onmouseout = () => {
  itemThree.innerHTML = 'The mouse has left the element.';
}

itemFour.onmousedown = () => {
  itemFive.style.display = 'block';
}