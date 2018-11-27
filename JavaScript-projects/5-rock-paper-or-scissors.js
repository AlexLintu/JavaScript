const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please enter rock, paper or scissors.')
  }
};

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else if (randomNum === 2) {
    return 'scissors';
  } else {
    return 'error!'
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if (userChoice === 'bomb') {
    return 'You won!!!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('paper');
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();