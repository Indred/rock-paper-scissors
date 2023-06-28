function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "It's a tie";
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors' || playerChoice === 'Paper' && computerChoice === 'Rock' || playerChoice === 'Scissors' && computerChoice === 'Paper') {
        return 'Player';
    } else {
        return 'Computer'; 
    }
}

function updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore) {
    // update score
    let playerScoreDisplay = document.getElementById('user_score');
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    let computerScoreDisplay = document.getElementById('computer_score');
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;

    // update result
    let resultDisplay = document.getElementById('game_result');
    if (!(roundResult == "It's a tie")) {
        roundResult += " wins";
    }
    resultDisplay.textContent = "Result: " + roundResult + "!";
    

    // update choices
    let playerChoiceDisplay = document.getElementById('user_choice');
    playerChoiceDisplay.textContent = "Player Choice: " + playerChoice;
    let computerChoiceDisplay = document.getElementById('computer_choice');
    computerChoiceDisplay.textContent = "Computer Choice: " + computerChoice;
}



// get computer choice
function getComputerChoice() {
    const GAME_MOVES = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = GAME_MOVES[Math.floor(Math.random() * GAME_MOVES.length)];
    return computerChoice;
}


// find buttons
let rockButton = document.getElementById('Rock');
let paperButton = document.getElementById('Paper');
let scissorsButton = document.getElementById('Scissors');

// initialize variables
let playerScore = 0;
let computerScore = 0;

// get player choice
rockButton.addEventListener('click', () => {
    const playerChoice = 'Rock';
    const computerChoice = getComputerChoice();
    let roundResult = playRound(computerChoice, playerChoice);
    console.log(roundResult);
    if (roundResult === 'Player') {
        playerScore++;
    } else if (roundResult === 'Computer') {
        computerScore++;
    }
    updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore);
});

paperButton.addEventListener('click', () => {
    const playerChoice = 'Paper';
    const computerChoice = getComputerChoice();
    let roundResult = playRound(computerChoice, playerChoice);
    console.log(roundResult);
    if (roundResult === 'Player') {
        playerScore++;
    } else if (roundResult === 'Computer') {
        computerScore++;
    }
    updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore);
});

scissorsButton.addEventListener('click', () => {
    const playerChoice = 'Scissors';
    const computerChoice = getComputerChoice();
    let roundResult = playRound(computerChoice, playerChoice);
    console.log(roundResult);
    if (roundResult === 'Player') {
        playerScore++;
    } else if (roundResult === 'Computer') {
        computerScore++;
    }
    updateDisplay(roundResult, computerChoice, playerChoice, computerScore, playerScore);
});


