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


Function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie, play again" + playerChoice + ".";
    }
    If (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You Win! Rock beats scissors.";
        } else {
            return "You Lose, paper beats rock";
        }
    }
}