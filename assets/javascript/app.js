
var userInput=""
var input= "{\"text\" : \"userInput\"}"


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19",
    "method": "POST",
    "headers": {
        "authorization": "Basic N2UwNDk0OGMtYWU5ZS00MDc5LThkOTktNmIxZjA0Y2FmZDY3OmVIalpXcjV0TlZXZQ==",
        "cache-control": "no-cache",
        "postman-token": "d5b6c723-0fa6-9b28-4433-15eaf24d1969"
    },
    "data": input
}

$.ajax(settings).done(function (response) {
    console.log(response);
});