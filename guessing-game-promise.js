var prompt = require('prompt-promise');
var count = 5;


var randomNumber = Math.floor(Math.random()*101);

function numberGuessingGame(){
    var numGuess = prompt("Guess a number : ");
    if( count > 0){
        return numGuess.then(function(guess){
            var numberGuess = +guess;
            if(numberGuess === randomNumber){
                console.log("you won!")
                prompt.end();
                return;
            }
            else if(numberGuess < randomNumber){
                console.log("Try guessing a higher number");
                count--;
                numberGuessingGame();
            }
            else if (numberGuess > randomNumber){
                console.log("Try guessing a lower number")
                count--;
                numberGuessingGame();
            }
        })// Then
    }
    else{
        console.log("You lose");
        prompt.end();
        return;
    }
}

numberGuessingGame();