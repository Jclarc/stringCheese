

$(document).ready(function (){


//when submit button is clicked

$('#submit').click(function reset() {


        $(".address-bar").hide('.address-bar');
        $(".player-form").hide('.player-form');

        //make a variable for players name from name input box

        var name = $('#name-box').val().trim();

        //troubles
        console.log($(name).val());


//make a game area div for rest of session

        $(".game-area").css("text-align", "center",
    "width", "500px").append("<form class='arena'><textarea class='form-control' rows='3' maxlength='160' placeholder='Go for the gold Frodo Douchebaggins.'></textarea><input class='btn btn-default' type='submit' value='Submit' id='submit2'</form>");

    })

})

// var userInput=""
// var input= "{\"text\" : \"userInput\"}"


// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19",
//     "method": "POST",
//     "headers": {
//         "authorization": "Basic N2UwNDk0OGMtYWU5ZS00MDc5LThkOTktNmIxZjA0Y2FmZDY3OmVIalpXcjV0TlZXZQ==",
//         "cache-control": "no-cache",
//         "postman-token": "d5b6c723-0fa6-9b28-4433-15eaf24d1969"
//     },
//     "data": input
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });