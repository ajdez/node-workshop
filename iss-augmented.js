var cityLat;
var cityLng;
var issLat;
var issLng;


var prompt = require('prompt');
var request= require('request');


var url = "http://api.open-notify.org/iss-now.json";
var request = require('request');

request(url, function(err, result){
    if(err){
        console.log("awwww.... something went wrong");
    }
    else{
        var searchResults = JSON.parse(result.body);
        
        issLat = "Latitude : " + parseFloat(searchResults.iss_position.latitude).toFixed(2);
        issLng = "Longitude : " + parseFloat(searchResults.iss_position.longitude).toFixed(2);
       
     }
});



prompt.start();

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
            }
        })
    }
});


// How to figure out distances
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


