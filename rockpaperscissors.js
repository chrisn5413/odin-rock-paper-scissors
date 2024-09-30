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
    
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        userChoice = prompt('Sorry, invalid choice. Please choose: "rock", "paper", or "scissors"');
    }

    log('userChoice =',userChoice);
    
    return userChoice;

}