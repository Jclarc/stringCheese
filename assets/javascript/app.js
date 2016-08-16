var audioElement = document.createElement('audio');

$(document).ready(function (){

    var userInput="aaaaaa";
    // Watson api information passing userInput to data.
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19",
        "method": "POST",
        "headers": {
            "X-Watson-Authorization-Token": "Basic N2UwNDk0OGMtYWU5ZS00MDc5LThkOTktNmIxZjA0Y2FmZDY3OmVIalpXcjV0TlZXZQ==",
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({"text" :userInput}),
    };
    //----------------------------------------------------------END WATSON API------------------------------------------


    $.ajax(settings).done(function (response) {//---------------------------------------------------Ajax setup for watson api-----------------------------------

        var tones = {//object
            "anger": response.document_tone.tone_categories[0].tones[0].score,
            "disgust": response.document_tone.tone_categories[0].tones[1].score,
            "fear": response.document_tone.tone_categories[0].tones[2].score,
            "joy": response.document_tone.tone_categories[0].tones[3].score,
            "sadness": response.document_tone.tone_categories[0].tones[4].score,

        };
        //sets up usable variables for each tone element already formated to percentages
        var anger = Math.round(tones.anger * 100);
        var disgust = Math.round(tones.disgust * 100);
        var fear = Math.round(tones.fear * 100);
        var joy = Math.round(tones.joy * 100);
        var sadness = Math.round(tones.fear * 100);

    /*----------------------------------------------------------------------------------End Watson Ajax call---------------------*/


        $(".scores").hide(".scores");
        var name = "";
        var prompts = ["Anger", "Disgust", "Fear", "Joy", "Sadness"];



window.onload=function(){
//Rocky music on startup
    audioElement.setAttribute('src', './assets/images/Rocky_Theme_Song.mp3');
    audioElement.play();
    };
    


        $('#submit').on("click", function (e){ /*------------------------------------START OF SUBMIT CLICK FUNCTION ------------------------------------*/
            e.preventDefault();
            name = $('#name-box').val().trim();
             if (name != ""){
               audioElement.pause();
                $(".address-bar").hide('.address-bar');
                $(".player-form").hide('.player-form');
                //make a variable for players name from name input box
                //troubles
                console.log(name);
                //make a game area div for rest of session
                $(".game-area").css("text-align", "center", "width", "500px").html("<form class='arena'><textarea class='form-control'id='userInput' rows='3' maxlength='160' placeholder='Go for the gold Frodo Douchebaggins.'></textarea><input class='btn btn-default' type='submit' value='Submit' id='submit2'</form>");
                 $(".scores").show(".scores");
                  $(".game-area").prepend("Your writing prompt is: " + prompts[0]);

    }
            
            else {
                $(".game-area").html("Type your name, dipshit.");
            }

}); /*----------------------------------------------------------------END OF CLICK FUNCTION ---------------------------------------------------------------------*/



$('#submit2').on('click', function(){ /*---------------------------------START OF USERINPUT SUBMIT BUTTON ON CLICK FUNC------------------------*/

var userInput= JSON.stringify($('#userInput').val());
console.log(userInput);
//console.log(response);
// console.log(response.sentences_tone);
    console.log("Anger Score: " + anger + "%");
    console.log("Disgust Score: " + disgust + "%");
    console.log("Fear Score: " + fear + "%");
    console.log("Joy Score: " + joy + "%");
    console.log("Sadness Score: " + sadness + "%");

});/*---------------------------------END OF USERINPUT SUBMIT BUTTON ON CLICK FUNC------------------------*/


}) /*--------------------------------------------END OF SECOND BUTTON ON CLICK ------------------------------*/

}); /*------------------------------------END OF DOC READY FUNCTION---------------------------------*/

