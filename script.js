let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function game() {
    
    while (rounds < 5) {
        let input = prompt("Choose between rock, paper, or scissors");
        console.log(playRound(input, getComputerChoice(), playerScore, computerScore));
    }

    if (computerScore > playerScore) {
        return "Computer Wins (" + playerScore + " - " + computerScore + ")";
    }

    else {
        return "Player Wins (" + playerScore + " - " + computerScore + ")";
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
            computerScore += 1;
            rounds += 1;
        }

        else if (computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors");
            playerScore += 1;
            rounds += 1;
        }

        else {
            console.log("Tied!");
        }

        return "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            console.log("Tied!");
        }

        else if (computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            computerScore += 1;
            rounds += 1;
        }

        else {
            console.log("You Win! Paper beats Rock!");
            playerScore += 1;
            rounds += 1;
        }

        return "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    }

    else {
        if (computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper");
            playerScore += 1;
            rounds += 1;
        }

        else if (computerSelection == "scissors") {
            console.log("Tied");
        }

        else {
            console.log("You Lose! Rock beats Scissors");
            computerScore += 1;
            rounds += 1;
        }

        return "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    }
}

console.log(game());