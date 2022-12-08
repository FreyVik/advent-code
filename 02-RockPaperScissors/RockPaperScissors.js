const fs = require('fs');

const Options = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3
}

const Results = {
    WIN: 6,
    DRAW: 3,
    LOSE: 0
}

const OpponentOptions = {
    "A": Options.ROCK,
    "B": Options.PAPER,
    "C": Options.SCISSORS
}

const ResponseOptions = {
    "X": Options.ROCK,
    "Y": Options.PAPER,
    "Z": Options.SCISSORS
}

const SecondResponseOptions = {
    "X": Options.LOSE,
    "Y": Options.DRAW,
    "Z": Options.WIN
}

function getTestResult(game) {
    let play = game.split(" ");

    let opponentPlay = play[0];
    let yourPlay = play[1];

    let resultPoint = getResultWithFirstStrategy(opponentPlay, yourPlay);

    return resultPoint
}

function getRealPoints() {
    let realInput = fs.readFileSync('./02-RockPaperScissors/realInput.txt', 'utf8');

    let games = realInput.split("\n");
    let totalPoints = 0;
    
    games.forEach((stringPlay, index) => {
        let play = stringPlay.split(" ");
        totalPoints += getResultWithFirstStrategy(play[0], play[1]);
    })

    return totalPoints;
}

function getTestResultSecondStrategy(game) {
    let play = game.split(" ");

    let opponentPlay = play[0];
    let yourPlay = play[1];

    let resultPoint = getResultWithSecondStrategy(opponentPlay, yourPlay);

    return resultPoint
}

function getRealPointsSecondStrategy() {
    let realInput = fs.readFileSync('./02-RockPaperScissors/realInput.txt', 'utf8');

    let games = realInput.split("\n");
    let totalPoints = 0;
    
    games.forEach((stringPlay, index) => {
        let play = stringPlay.split(" ");
        totalPoints += getResultWithSecondStrategy(play[0], play[1]);
    })

    return totalPoints;
}

function getResultWithFirstStrategy(opponentPlay, yourPlay) {
    switch(opponentPlay) {
        case 'A':
            switch(yourPlay) {
                case 'X':
                    return Results.DRAW + Options.ROCK;
                break;
                case 'Y':
                    return Results.WIN + Options.PAPER;
                break;
                case 'Z':
                    return Results.LOSE + Options.SCISSORS;
                break;
            }
        break;
        case 'B':
            switch(yourPlay) {
                case 'Y':
                    return Results.DRAW + Options.PAPER;
                break;
                case 'Z':
                    return Results.WIN + Options.SCISSORS;
                break;
                case 'X':
                    return Results.LOSE + Options.ROCK;
                break;
            }
        break;
        case 'C':
            switch(yourPlay) {
                case 'Z':
                    return Results.DRAW + Options.SCISSORS;
                break;
                case 'X':
                    return Results.WIN + Options.ROCK;
                break;
                case 'Y':
                    return Results.LOSE + Options.PAPER;
                break;
            }
        break;
    }
}

function getResultWithSecondStrategy(opponentPlay, yourPlay) {
    switch(opponentPlay) {
        case 'A':
            switch(yourPlay) {
                case 'X':
                    return Results.LOSE + Options.SCISSORS;
                break;
                case 'Y':
                    return Results.DRAW + Options.ROCK;
                break;
                case 'Z':
                    return Results.WIN + Options.PAPER;
                break;
            }
        break;
        case 'B':
            switch(yourPlay) {
                case 'Y':
                    return Results.DRAW + Options.PAPER;
                break;
                case 'Z':
                    return Results.WIN + Options.SCISSORS;
                break;
                case 'X':
                    return Results.LOSE + Options.ROCK;
                break;
            }
        break;
        case 'C':
            switch(yourPlay) {
                case 'Z':
                    return Results.WIN + Options.ROCK;
                break;
                case 'X':
                    return Results.LOSE + Options.PAPER;
                break;
                case 'Y':
                    return Results.DRAW + Options.SCISSORS;
                break;
            }
        break;
    }
}

module.exports = {
    getTestResult,
    getRealPoints,
    getTestResultSecondStrategy,
    getRealPointsSecondStrategy
};