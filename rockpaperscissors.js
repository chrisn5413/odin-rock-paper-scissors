let log = console.log;

log("Hello World");


playGame(5);


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
// returns: 1 if player wins, -1 if computer wins, 0 if tie
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        log('Its a tie. Both players chose', humanChoice);
        return 0;
    }
    else if (humanChoice === 'rock'){
        if (computerChoice === 'scissors'){
            log(`You win! ${humanChoice} beats ${computerChoice}`);
            // humanScore++;
            return 1;
        }
        else {
            log(`You lose! ${computerChoice} beats ${humanChoice}`);
            // computerScore++;
            return -1;
        }   
    }
    else if (humanChoice === 'paper'){
        if (computerChoice === 'rock'){
            log(`You win! ${humanChoice} beats ${computerChoice}`);
            // humanScore++;    
            return 1;
        }
        else {
            log(`You lose! ${computerChoice} beats ${humanChoice}`);
            // computerScore++;
            return -1;
        }
    }
    else if (humanChoice === 'scissors'){
        if (computerChoice === 'paper'){
            log(`You win! ${humanChoice} beats ${computerChoice}`);
            // humanScore++;
            return 1;
        }
        else {
            log(`You lose! ${computerChoice} beats ${humanChoice}`);
            // computerScore++;
            return -1;
        } 
    }
    else
        throw HowDidYouGetHere('This else should never run');
}

// plays the game x times
function playGame(times = 1){
    let humanScore = 0;
    let computerScore = 0;


    while (times > 0){
        times--;

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);
        
        // update appropriate score
        if (result == 1)
            humanScore++;
        else if (result == -1)
            computerScore++;
        
        // do nothing if tie
        }

    log(`Games finished. You won ${humanScore} and lost ${computerScore} times.`);
}