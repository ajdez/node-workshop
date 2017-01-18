var request = require('request-promise');

var urlPromise = request("http://api.open-notify.org/iss-now.json");

urlPromise.then(function(result){
    var issData = JSON.parse(result);
    var issLat = issData.iss_position.latitude;
    console.log(issLat);
})