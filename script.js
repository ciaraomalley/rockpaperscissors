const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
var userChoice 
var computerChoice
var result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

// GET COMPUTER CHOICE USING MATH RANDOM
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  else if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  else if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}
hide()
// GET RESULT
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  // IF COMPUTER CHOICE = ROCK
  if (computerChoice == 'rock' && userChoice == "paper") {
    result = 'you win!'
  }
  else if (computerChoice == 'rock' && userChoice == "scissors") {
    result = 'you lost!'
  }

  // IF COMPUTER CHOICE = PAPER
  if (computerChoice == 'paper' && userChoice == "scissors") {
    result = 'you win!'
  }
  else if (computerChoice == 'paper' && userChoice == "rock") {
    result = 'you lose!'
  }

  // IF COMPUTER CHOICE = SCISSORS
  if (computerChoice == 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  else if (computerChoice == 'scissors' && userChoice == "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}

function hide(){
    document.getElementById('button').style.visibility = 'hidden';
}