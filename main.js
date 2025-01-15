function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice () {
    const humanChoice = prompt('Please choose rock, paper, or scissors.', '');
    if (humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors') {
        return humanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It is a tie!';
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return 'You lose! Paper beats rock.';
        }
        else {
            humanScore++;
            return 'You win! Rock beats scissors.';
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'You lose! Scissors beats paper.';
        }
        else {
            humanScore++;
            return 'You win! Paper beats rock.';
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'You lose! Rock beats scissors.';
        }
        else {
            humanScore++;
            return 'You win! Scissors beats paper.';
        }
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

console.log(playGame());