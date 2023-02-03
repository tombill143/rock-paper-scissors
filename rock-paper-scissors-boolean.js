//-----------------------------------------------THE EVENT LISTENERS---------------------------------------------------

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

//----------------------------------------------------------------------------------------------------------------------------

rockButton.addEventListener("click", function () {
  // Your logic for rock goes here
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
});

paperButton.addEventListener("click", function () {
  // Your logic for paper goes here
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
});

scissorsButton.addEventListener("click", function () {
  // Your logic for scissors goes here
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
});

/*const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error: Invalid input");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return false;
  }
  if (userChoice === "rock") {
    return computerChoice === "scissors";
  }
  if (userChoice === "paper") {
    return computerChoice === "rock";
  }
  if (userChoice === "scissors") {
    return computerChoice === "paper";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  const winner = determineWinner(userChoice, computerChoice);
  if (winner === false) {
    console.log("The game is a tie!");
  } else if (winner === true) {
    console.log("You won!");
  } else {
    console.log("The computer won!");
  }
};

playGame();

/*
---------------------------------------------AN ALTERNATIVE WAY OF WRITING THE PROGRAMME-------------------------------------------- 

const choices = ['rock', 'paper', 'scissors'];

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (choices.includes(userInput)) {
    return userInput;
  } else {
    console.log('Error: Invalid input');
  }
};

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 1;
  }
  return -1;
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  const winner = determineWinner(userChoice, computerChoice);
  if (winner === 0) {
    console.log('The game is a tie!');
  } else if (winner === 1) {
    console.log('You won!');
  } else {
    console.log('The computer won!');
  }
};

playGame();

*/
