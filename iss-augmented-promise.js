// Radian info ////////////////////////////////////////////////////////////

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
  
function calculateDistance (lat1, lon1, lat2, lon2){
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    
    return d;
}
//////////////////////////////// radian info on top ////////////////////////////////

var request = require('request-promise');
var prompt = require('prompt-promise');

var urlISS = request("http://api.open-notify.org/iss-now.json");

function computeDistancePromise(){
    var issLat, issLng;
    
    return urlISS.then(function(result){
        var issData = JSON.parse(result);
        issLat = +(issData.iss_position.latitude);
        issLng = +(issData.iss_position.longitude);
        
        return prompt("what city are you in? : ")
    })
    .then(function(cityResult){
        var userCity = cityResult;
        var urlCityString = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityResult;
        var urlCityPromise = request(urlCityString);
        return urlCityPromise;
    })
    .then(function(cityURL){
        var cityData = JSON.parse(cityURL);
        var cityLat = +(cityData.results[0].geometry.location.lat);
        var cityLng = +(cityData.results[0].geometry.location.lng);
        
        var distanceToCity = calculateDistance(issLat, issLng, cityLat, cityLng).toFixed(2);
        return distanceToCity;
    })
    .catch(function(err){
        console.log("something went wrong", err);
    })
}


computeDistancePromise().then(function(result){
    console.log(result)
})



