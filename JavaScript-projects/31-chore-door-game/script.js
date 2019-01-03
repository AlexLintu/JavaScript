// Getting access to the images in the HTML and specifying images that should be shown on click event:
const doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const doorImage2 = document.getElementById('door2');
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const doorImage3 = document.getElementById('door3');
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

// Randomizing logic of images shown when each door is open:
const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = () => { doorImage1.src = openDoor1 };
doorImage2.onclick = () => { doorImage2.src = openDoor2 };
doorImage3.onclick = () => { doorImage3.src = openDoor3 };

randomChoreDoorGenerator();