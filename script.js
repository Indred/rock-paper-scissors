function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "It's a tie this round!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors')||
                (playerChoice === 'paper' && computerChoice === 'rock')||
                (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'Player';
    } else {
        return 'Computer'; 
    }
}


function resetButtons() {
    let computerRockButton = document.getElementById('computer-rock');
    let computerPaperButton = document.getElementById('computer-paper');
    let computerScissorsButton = document.getElementById('computer-scissors');
    computerRockButton.style = "background-color: white; border-color: white;";
    computerPaperButton.style = "background-color: white; border-color: white;";
    computerScissorsButton.style = "background-color: white; border-color: white;";


    let playerRockButton = document.getElementById('player-rock');
    let playerPaperButton = document.getElementById('player-paper');
    let playerScissorsButton = document.getElementById('player-scissors');
    playerRockButton.style = "background-color: white; border-color: white;";
    playerPaperButton.style = "background-color: white; border-color: white;";
    playerScissorsButton.style = "background-color: white; border-color: white;";
}

function updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore) {
    const emojis = ["0️","1️", "2️"]
    resetButtons();

    // update choices
    let playerChoiceButton = document.getElementById('player-' + playerChoice);
    playerChoiceButton.style = "background-color: lightgreen; border-color: lightgreen;";

    let computerChoiceButton = document.getElementById('computer-' + computerChoice);
    computerChoiceButton.style = "background-color: lightcoral; border-color: lightcoral;";

    // update score
    let playerScoreDisplay = document.getElementById('player-score');
    playerScoreDisplay.textContent = emojis[playerScore];
    
    let computerScoreDisplay = document.getElementById('computer-score');
    computerScoreDisplay.textContent = emojis[computerScore];

    // update result
    let roundResultDisplay = document.getElementById('result');
    if (roundResult === "ITS A TIE THIS ROUND!") {
        roundResultDisplay.textContent = roundResult;
    } else if (roundResult === 'Player') {
        roundResultDisplay.textContent = 'YOU WIN THIS ROUND!';
    } else {
        roundResultDisplay.textContent = 'COMPUTER WINS THIS ROUND!';
    }
}

function checkWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return 'Player';
    } else {    
        return 'Computer';
    }
}

// get computer choice
function getComputerChoice() {
    const GAME_MOVES = ['rock', 'paper', 'scissors'];
    const computerChoice = GAME_MOVES[Math.floor(Math.random() * GAME_MOVES.length)];
    return computerChoice;
}


// find buttons
let rockButton = document.getElementById('player-rock');
let paperButton = document.getElementById('player-paper');
let scissorsButton = document.getElementById('player-scissors');
let resetButton = document.getElementById('reset');

// initialize variables
let playerScore = 0;
let computerScore = 0;

// get player choice
rockButton.addEventListener('click', () => {
    const playerChoice = 'rock';
    const computerChoice = getComputerChoice();
    let roundResult = playRound(computerChoice, playerChoice);
    if (roundResult === 'Player') {
        playerScore++;
    } else if (roundResult === 'Computer') {
        computerScore++;
    }
    updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore);
    if (playerScore + computerScore === 3 || playerScore === 2 || computerScore === 2) {
        roundResult = checkWinner(playerScore, computerScore);
        let roundResultDisplay = document.getElementById('result');
        if (roundResult === 'Player') {
            roundResultDisplay.textContent = 'YOU WIN THE GAME!';
        } else {
            roundResultDisplay.textContent = 'COMPUTER WINS THE GAME!';
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
});

paperButton.addEventListener('click', () => {
    const playerChoice = 'paper';
    const computerChoice = getComputerChoice();
    let roundResult = playRound(computerChoice, playerChoice);
    if (roundResult === 'Player') {
        playerScore++;
    } else if (roundResult === 'Computer') {
        computerScore++;
    }
    updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore);
    if (playerScore + computerScore === 3 || playerScore === 2 || computerScore === 2) {
        roundResult = checkWinner(playerScore, computerScore);
        let roundResultDisplay = document.getElementById('result');
        if (roundResult === 'Player') {
            roundResultDisplay.textContent = 'YOU WIN THE GAME!';
        } else {
            roundResultDisplay.textContent = 'COMPUTER WINS THE GAME!';
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
});

scissorsButton.addEventListener('click', () => {
    const playerChoice = 'scissors';
    const computerChoice = getComputerChoice();
    let roundResult = playRound(computerChoice, playerChoice);
    if (roundResult === 'Player') {
        playerScore++;
    } else if (roundResult === 'Computer') {
        computerScore++;
    }
    updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore);
    if (playerScore + computerScore === 3 || playerScore === 2 || computerScore === 2) {
        roundResult = checkWinner(playerScore, computerScore);
        let roundResultDisplay = document.getElementById('result');
        if (roundResult === 'Player') {
            roundResultDisplay.textContent = 'YOU WIN THE GAME!';
        } else {
            roundResultDisplay.textContent = 'COMPUTER WINS THE GAME!';
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
});

resetButton.addEventListener('click', () => {
    location.reload();
});


