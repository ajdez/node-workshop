var request = require('request-promise');

var urlPromise = request("http://api.open-notify.org/iss-now.json");

urlPromise.then(function(result){
    var issData = JSON.parse(result);                      //issData is holding the JSON object
    var issLat = issData.iss_position.latitude;         
    var issLng = issData.iss_position.longitude;
    
    console.log("ISS latitude is : " + issLat + " and longitue : " + issLng);
    
})