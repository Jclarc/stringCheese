var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19",
    "method": "POST",
    "headers": {
        "X-Watson-Authorization-Token": "Basic N2UwNDk0OGMtYWU5ZS00MDc5LThkOTktNmIxZjA0Y2FmZDY3OmVIalpXcjV0TlZXZQ==",
        "Content-Type": "application/json"
    },

    "data": "{\"text\" : \"TEST FOR WATSON ANALYZE\"}",

}

$.ajax(settings).done(function (response) {
    console.log(response.document_tone.tone_categories);
});