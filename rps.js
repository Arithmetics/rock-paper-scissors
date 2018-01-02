function computerPlay(){
  let plays = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return plays[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection == computerSelection) {
    console.log("tie!");
    return "tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      console.log( "You lose, paper beats rock");
      return "lose";
    } else if (computerSelection == "scissors") {
      console.log( "You win, rock beats scissors");
      return "win";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      console.log( "You win, scissors beats paper");
      return "win";
    } else if (computerSelection == "rock") {
      console.log( "You lose, rock beats scissors");
      return "lose";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      console.log( "You win, paper beats rock");
      return "win";
    } else if (computerSelection == "scissors") {
      console.log( "You lose, scissors beats paper");
      return "lose";
    }
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  let result = null;
  let choice = null;

  while (playerScore < 5 && computerScore < 5) {
    console.log(`The score is player: ${playerScore} computer: ${computerScore}`);
    console.log("What is your play?");
    choice = prompt();
    result = playRound(choice, computerPlay())
    if (result == "win") {
      playerScore++;
    } else if (result == "lose") {
      computerScore++;
    }
  }
  if (playerScore == 5) {
    console.log("you won!");
  } else {
    console.log("get wrecked!");
  }
}


game();
