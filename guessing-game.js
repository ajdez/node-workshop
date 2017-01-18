var prompt = require('prompt');

prompt.start();

var randomNumber = Math.floor(Math.random()*101);
var count = 0;
function guessingGame(){
    if(count < 12){
        prompt.get("number", function(err, result){
            if(err){
                console.log("Something went wrong buddy");
            }
            else{
                if(result.number === randomNumber){
                    console.log("Wow you got it!");
                    return;
                }
                else if (result.number < randomNumber){
                    console.log("Try guessing a higher number");
                    count++;
                    guessingGame();
                }
                else if (result.number > randomNumber){
                    console.log("Try guessing a lower number.");
                    count++;
                    guessingGame();
                }
            } 
        }) 
    }
    else{
        console.log("Out of try's");
    }
}

guessingGame();
