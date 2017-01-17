var prompt = require('prompt');

prompt.start();

function guessingGame(){
    var count = 0;
    while(count < 4)
    prompt.get("number", function(err, result){
        var randomNumber = Math.floor(Math.random()*101);
        if(result.number === randomNumber){
            console.log("Wow you got it!");
            return;
        }
        else if (result.number < randomNumber){
            console.log("Try guessing a higher number");
            count++;
        }
        else if (result.number > randomNumber){
            console.log("Try guessing a lower number.");
            count++;
        }
    })
}
