const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'papper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error input');
  }

}
console.log(getUserChoice('rock'))
console.log(getUserChoice('1'))

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'papper';
    case 2:
    return 'scissors';
  }
}
console.log(getComputerChoice())

const determinWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'papper') {
      return 'computer won';
    } else {
      return 'user won';
    }
  }
  if (userChoice === 'papper') {
    if (computerChoice === 'scissors') {
      return 'computer won';
    } else {
      return 'user won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won';
    } else {
      return 'user won';
    }
  }
  if (userChoice === 'bomb') {
    return 'user won';
  }
}
console.log(determinWinner('rock', 'rock'))
console.log(determinWinner('rock', 'papper'))
console.log(determinWinner('papper', 'rock'))
console.log(determinWinner('bomb', 'rock'))

const playGame = () => {
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice()
  console.log(userChoice)
  console.log(computerChoice)
  console.log(determinWinner(userChoice, computerChoice))
}
playGame()

/*
  userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ? return userInput : console.log(error input);
  */