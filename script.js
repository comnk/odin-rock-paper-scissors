function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
    
    while (rounds < 5) {
        let input = prompt("Choose between rock, paper, or scissors");
        console.log(playRound(input, getComputerChoice(), playerScore, computerScore));
        rounds += 1;
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore += 1
            return "You Lose! Paper beats Rock\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
        }

        else if (computerSelection == "scissors") {
            playerScore += 1
            return "You Win! Rock beats Scissors\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
        }

        else {
            return "Tied!"
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "Tied!";
        }

        else if (computerSelection == "scissors") {
            computerScore += 1;
            return "You Lose! Scissors beats Paper\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
        }

        else {
            playerScore += 1;
            return "You Win! Paper beats Rock!\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
        }
    }

    else {
        if (computerSelection == "paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
        }

        else if (computerSelection == "scissors") {
            return "Tied";
        }

        else {
            computerScore += 1;
            return "You Lose! Rock beats Scissors\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
        }
    }
}

game();