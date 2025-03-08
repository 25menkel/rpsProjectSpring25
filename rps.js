/*  sutio code
1 create a function for coputer choice
2 create a fucnction to get user choice
3  create a function to determine a winner of a single round
4 create a loop to play untill a player gets 5 wins, say if won or loss
*/

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getUserChoice() {
    let choice = prompt ("Enter rock, paper, or scissors:").toLowerCase();
    while (choice !== "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt ("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }
return choice;
}


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie Both players chose" + playerChoice + ".";
    }
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
         return "You Win! Rock beats scissors.";
        } else {
          return "You Lose, Paper beats rock"; 
         }
    }

if (playerChoice === "paper") {
    if (computerChoice === "rock") {
     return "You win! Paper beats rock."; 
    } else {
      return "You lose, Scissors beats Paper."; 
    }
}

if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
     return "You win! Scissors beats Paper"; 
    } else {
     return "You lose, Rock beats scissors";
    }
  }
} 

function playgame() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        
        If (result.indexOf("win") !== -1 && result.indexOf("lose") == -1) {
            playerScore = playerScore + 1;
        } else if (result.indexOf("lose") !== -1) {
            computerScore = computerScore + 1;
        }
        console.log("Score: You" + playerScore + "-Computer" +computerScore);
    }
    if (playerScore === 5) {
        console.log("You have won the game!");
    } else {
        console.log("You have lost the game. :(")
    }
}

playGame();