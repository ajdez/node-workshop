var prompt = require('prompt');

prompt.start();


prompt.get("number", function(err, result){
    var randomNumber = Math.floor(Math.random()*101);
    for(var i = 0; i < 3; i++){
        if(result.number === randomNumber){
            return console.log("Wow you got it!");
        }
        else if (result.number < randomNumber){
            console.log("Try guessing a higher number");
        }
        else if (result.number > randomNumber){
            console.log("Try guessing a lower number");
        }
    }
})