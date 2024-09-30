let log = console.log;

log("Hello World");


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

