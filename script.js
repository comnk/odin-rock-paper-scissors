let computerScore;
let playerScore;

function check_game() {
    playerScore = document.querySelector("#player_score").innerHTML;
    computerScore = document.querySelector("#computer_score").innerHTML;

    if (playerScore == 5) {
        document.querySelector(".result_text").innerHTML = "You Win! Final Score is (" + playerScore + " - " + computerScore + ")";
        return true;
    }

    else if (computerScore == 5) {
        document.querySelector(".result_text").innerHTML = "You Lose! Final Score is (" + playerScore + " - " + computerScore + ")";
        return true;
    }

    return false;
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

            computerScore = Number(document.querySelector("#computer_score").innerHTML);
            computerScore += 1;

            document.querySelector("#computer_score").innerHTML = computerScore;
            document.querySelector(".result_text").innerHTML = "You Lose! Paper beats Rock";
        }

        else if (computerSelection == "scissors") {

            playerScore = Number(document.querySelector("#player_score").innerHTML);
            playerScore += 1;

            document.querySelector("#player_score").innerHTML = playerScore;
            document.querySelector(".result_text").innerHTML = "You Win! Rock beats Scissors";
        }

        else {
            document.querySelector(".result_text").innerHTML = "Tied!";
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            document.querySelector(".result_text").innerHTML = "Tied!";
        }

        else if (computerSelection == "scissors") {
            computerScore = Number(document.querySelector("#computer_score").innerHTML);
            computerScore += 1;

            document.querySelector("#computer_score").innerHTML = computerScore;
            document.querySelector(".result_text").innerHTML = "You Lose! Scissors beats Paper";
        }

        else {
            playerScore = Number(document.querySelector("#player_score").innerHTML);
            playerScore += 1;

            document.querySelector("#player_score").innerHTML = playerScore;
            document.querySelector(".result_text").innerHTML = "You Win! Paper beats Rock!";
        }
    }

    else {
        if (computerSelection == "paper") {
            playerScore = Number(document.querySelector("#player_score").innerHTML);
            playerScore += 1;

            document.querySelector("#player_score").innerHTML = playerScore;
            document.querySelector(".result_text").innerHTML = "You Win! Scissors beats Paper";
        }

        else if (computerSelection == "scissors") {
            document.querySelector(".result_text").innerHTML = "Tied!";
        }

        else {
            computerScore = Number(document.querySelector("#computer_score").innerHTML);
            computerScore += 1;

            document.querySelector("#computer_score").innerHTML = computerScore;
            document.querySelector(".result_text").innerHTML = "You Lose! Rock beats Scissors";
        }
    }

    if (check_game() == true) {
        const buttons = document.querySelectorAll(".btn");
        console.log(buttons);
        buttons.forEach((btn) => {
            btn.setAttribute("disabled", "disabled");
        });
    }
}