let log = console.log;

log("Hello World");


let humanScore = 0;
let computerScore = 0;


// returns option for computer player
function getComputerChoice() {
    let random = 0;

    while (random == 0) {
        random = Math.floor(Math.random() * 100);
    }

    if (random < 34)
        return 'rock';
    else if (random < 67)
        return 'paper';
    else if (random < 100)
        return 'scissors';
    else
        throw HowDidYouGetHere('This else should never run');
}

// returns option for human player
function getHumanChoice() {
    let trys = 3;
    let userChoice = prompt('Lets play rock, paper, scissors. What option will you choose?','rock');
    userChoice = userChoice.toLowerCase();

    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        userChoice = prompt('Sorry, invalid choice. Please choose: "rock", "paper", or "scissors"');
        userChoice = userChoice.toLowerCase();
    }

    // log('userChoice =',userChoice);
    
    return userChoice;
}

// plays a round of rock paper scissors
// parameters: humanChoice, computerChoice
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        log('Its a tie. Both players chose', humanChoice);
    }
    else if (humanChoice === 'rock'){
        if (computerChoice === 'scissors'){
            log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }   
    }
    else if (humanChoice === 'paper'){
        if (computerChoice === 'rock'){
            log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;    
        }
        else {
            log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
    else if (humanChoice === 'scissors'){
        if (computerChoice === 'paper'){
            log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } 
    }
    else
        throw HowDidYouGetHere('This else should never run');
}