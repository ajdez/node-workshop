var prompt = require('prompt-promise');
var count = 5;


var randomNumber = Math.floor(Math.random()*101);

function numberGuessingGame(){
    var numberGuess = prompt("Guess a number");
    if( count > 0){
        return numberGuess.then(function(){
            if(numberGuess === randomNumber){
                console.log("you won!")
                return;
            }
            else if(numberGuess < randomNumber){
                console.log("Try guessing a higher number");
                numberGuessingGame();
            }
            else if (numberGuess > randomNumber){
                console.log("Try guessing a lower number")
                numberGuessingGame();
            }
        })
    }
    
    
}