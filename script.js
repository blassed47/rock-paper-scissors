let userScore = 0;
let npcScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}



function round(playerSelection, computerSelection) {
    pChoice = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    cChoice = computerSelection.toLowerCase();

    if (pChoice === cChoice) {
        return "Tie game!"
    }

    switch (pChoice) {
        case "rock":
            if (cChoice === "paper") {
                npcScore++;
                return "You lose! Paper beats Rock";
            } else {
                userScore++;
                return "You win! Rock beats Scissors";
            }
        case "paper":
            if (cChoice === "scissors") {
                npcScore++;
                return "You lose! Scissors beat Paper";
            } else {
                userScore++;
                return "You win! Paper beats Rock";
            }
        case "scissors":
            if (cChoice === "rock") {
                npcScore++;
                return "You lose! Rock beats Scissors";
            } else {
                userScore++;
                return "You win! Scissors beat Paper";
            }
        default:
            return "That's not a correct input.";
    }
}

function game() {

    while (true) {
        
        round(prompt("Enter a choice"));

        if (userScore == 2) {
            console.log("You won!");
            break;
        } else if (npcScore == 2) {
            console.log("You lost.")
            break;
        }

    }

}