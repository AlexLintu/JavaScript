let door = document.getElementById('door');
let unlock = document.getElementById('unlock');
let lock = document.getElementById('lock');
let sign = document.getElementById('sign');
let cafeImage = document.getElementById('image');

cafeImage.hidden = true;

let openDoor = function () {
  door.hidden = true;
  cafeImage.hidden = false;
}

let closeDoor = function () {
  door.hidden = false;
  cafeImage.hidden = true;
}

unlock.onclick = function () {
  sign.innerHTML = 'OPEN';
  unlock.style.backgroundColor = '#6400e4';
  lock.style.backgroundColor = 'lightgray';
}

lock.onclick = function () {
  sign.innerHTML = 'CLOSED';
  lock.style.backgroundColor = '#6400e4';
  unlock.style.backgroundColor = 'lightgray';
}

unlock.addEventListener('click', function () {
  door.addEventListener('click', openDoor);
  image.addEventListener('click', closeDoor);
})

lock.addEventListener('click', function () { door.removeEventListener('click', openDoor) });
