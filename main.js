

function computerPlay(){
  let plays = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return plays[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection == computerSelection) {
    gameResult.textContent = ("tie!");
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      gameResult.textContent = ( "You lose, paper beats rock");
      currentCompScore += 1;
    } else if (computerSelection == "scissors") {
      gameResult.textContent = ( "You win, rock beats scissors");
      currentPlayerScore += 1;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      gameResult.textContent = ( "You win, scissors beats paper");
      currentPlayerScore += 1;
    } else if (computerSelection == "rock") {
      gameResult.textContent = ( "You lose, rock beats scissors");
      currentCompScore += 1;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      gameResult.textContent = ( "You win, paper beats rock");
      currentPlayerScore += 1;
    } else if (computerSelection == "scissors") {
      gameResult.textContent = ( "You lose, scissors beats paper");
      currentCompScore += 1;
    }
  }
  compScore.textContent = currentCompScore;
  playerScore.textContent = currentPlayerScore;
  checkGameEnd();
}

function checkGameEnd(){
  if (currentPlayerScore == 5) {
    currentPlayerScore = 0;
    currentCompScore = 0;
    lastGame.textContent = "Player Wins!"
  } else if (currentCompScore == 5) {
    currentPlayerScore = 0;
    currentCompScore = 0;
    lastGame.textContent = "Computer Wins!"
  }

}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const gameResult = document.querySelector('#gameresult');
const lastGame = document.querySelector('#lastgame');
let compScore = document.querySelector('#compscore');
let playerScore = document.querySelector('#playerscore');

let currentCompScore = 0;
let currentPlayerScore = 0;
compScore.textContent = currentCompScore;
playerScore.textContent = currentPlayerScore;


rockButton.addEventListener('click', function(e){
  playRound('rock', computerPlay());
});

scissorsButton.addEventListener('click', function(e){
  playRound('scissors', computerPlay());
});

paperButton.addEventListener('click', function(e){
  playRound('paper', computerPlay());
});
