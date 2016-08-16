
$(document).ready(function (){
    var userInput="";
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

            "analytical": response.document_tone.tone_categories[1].tones[0].score,
            "confident": response.document_tone.tone_categories[1].tones[1].score,
            "tenative": response.document_tone.tone_categories[1].tones[2].score,

            "openness": response.document_tone.tone_categories[2].tones[0].score,
            "conscientiousness": response.document_tone.tone_categories[2].tones[1].score,
            "extraversion": response.document_tone.tone_categories[2].tones[2].score,
            "agreeableness": response.document_tone.tone_categories[2].tones[3].score,
            "emotionalRange": response.document_tone.tone_categories[2].tones[4].score,
        };
        //sets up usable variables for each tone element already formated to percentages
        var anger = Math.round(tones.anger * 100);
        var disgust = Math.round(tones.disgust * 100);
        var fear = Math.round(tones.fear * 100);
        var joy = Math.round(tones.joy * 100);
        var sadness = Math.round(tones.fear * 100);

        var analytical = Math.round(tones.analytical * 100);
        var confident = Math.round(tones.confident * 100);
        var tenative = Math.round(tones.tenative * 100);

        var openness = Math.round(tones.openness * 100);
        var conscientiousness = Math.round(tones.conscientiousness * 100);
        var extraversion = Math.round(tones.extraversion * 100);
        var agreeableness = Math.round(tones.agreeableness * 100);
        var emotionalRange = Math.round(tones.emotionalRange * 100);
    /*----------------------------------------------------------------------------------End Watson Ajax call---------------------*/


        $(".scores").hide(".scores");
        var name = "";
        prompts = ["Anger", "Disgust", "Fear", "Joy", "Sadness"];

window.onload=function(){ 

//Rocky music on startup
  audioElement = document.createElement('audio');
   
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

    console.log("Analytical Score: " + analytical + "%");
    console.log("Confidence Score: " + confident + "%");
    console.log("Tenative Score: " + tenative + "%");

    console.log("Openness Score: " + openness + "%");
    console.log("Conscientiousness Score: " + conscientiousness + "%");
    console.log("Extraversion Score: " + extraversion + "%");
    console.log("Agreeableness Score: " + agreeableness + "%");
    console.log("Emotional Range Score: " + emotionalRange + "%");

});/*---------------------------------END OF USERINPUT SUBMIT BUTTON ON CLICK FUNC------------------------*/


}) /*--------------------------------------------END OF SECOND BUTTON ON CLICK ------------------------------*/

}); /*------------------------------------END OF DOC READY FUNCTION---------------------------------*/

