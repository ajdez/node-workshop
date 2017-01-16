// iss.js

var url = "http://api.open-notify.org/iss-now.json";

var request = require("request");

request(url, function(err, result){
    if(err){
        console.log("awwww.... something went wrong");
    }
    else{
        var searchResults = JSON.parse(result.body);
        console.log("Latitude : " + searchResults["latitude"]);
        console.log("Longitude : " + searchResults["longitude"]);
    }
})