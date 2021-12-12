const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id 
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }
    if (randomNumber === 2){
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = 'Draw!'
    }
    if (computerChoice === 'Rock' && userChoice === "Paper" ){
        result = 'Win!'
    }
    if (computerChoice === 'Rock' && userChoice === "Scissors"){
        result = 'Lost!'
    }
    if (computerChoice === 'Paper' && userChoice === "Scissors") {
        result = 'Win!'
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'Lost!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
        result = 'Lost!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
        result = 'Win!'
    }
    resultDisplay.innerHTML = result
}