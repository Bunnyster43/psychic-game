var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    guessesSoFar.push(userGuess);

    if (userGuess == computerGuess) {
        wins++;
        alert('You Won!');
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }

    else if (guessesLeft == 0){
        losses++;
        alert('You lost.');
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }

    else if (userGuess !== computerGuess){
        guessesLeft--;
    }

    var html = "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Total Wins: " + wins + "</p>" +
    "<p>Total Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guessesSoFar + "</p>"
    ;

    document.querySelector('#game').innerHTML = html;
}