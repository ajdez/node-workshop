//Code to have access to toRadians
Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
//------------------------------------------


var cityLat;
var cityLng;
var issLat;
var issLng;




var prompt = require('prompt');
var request= require('request');

prompt.start();


var url = "http://api.open-notify.org/iss-now.json";
var request = require('request');

request(url, function(err, result){
    if(err){
        console.log("awwww.... something went wrong");
    }
    else{
        var searchResults = JSON.parse(result.body);
        
        issLat = parseFloat(searchResults.iss_position.latitude);
        issLng = parseFloat(searchResults.iss_position.longitude);
        console.log("ISS station", issLat, issLng);
        
        prompt.get('city', function(err, result){
            if(err){
                console.log("Something went wrong");
            }
            else{
                var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.city;
        
            request(url, function(err, cityInfo){
                if(err){
                    console.log("something went wrong while looking for city");
                }
                else{
                    var searchRes = JSON.parse(cityInfo.body)
                    cityLat = parseFloat(searchRes.results[0].geometry.location.lat);
                    cityLng = parseFloat(searchRes.results[0].geometry.location.lng);
                    console.log("City", cityLat, cityLng)
                    console.log(cityLat);
                    console.log(cityLng);
                    
                    /////////////////////////
                    // Calculate distance
                    ///////////////////
                    var R = 6371e3; // metres
                    var φ1 = issLat.toRadians();
                    var φ2 = cityLat.toRadians();
                    var Δφ = (cityLat-issLat).toRadians();
                    var Δλ = (cityLng-issLng).toRadians();

                    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                        Math.cos(φ1) * Math.cos(φ2) *
                        Math.sin(Δλ/2) * Math.sin(Δλ/2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

                    var d = R * c;
                    
                    console.log("your distance from the International Space Station is " + d +"!!!!!!!");
                    
                    
                }
            })
        }
    });
     }
});




