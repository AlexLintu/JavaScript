// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let margo = document.getElementById('margo');

let open = function () {
  margo.style.display = 'block';
  close.style.display = 'block';
};

let hide = function () {
  margo.style.display = 'none';
  close.style.display = 'none';
};

let textChange = function () {
  view.innerHTML = 'Hello World!';
};

const textReturn = () => {
  view.innerHTML = 'View';
}

view.onclick = open;
close.onclick = hide;
view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);