
var config = {
    apiKey: "AIzaSyA4h2hleSZ5_-ydKxZ-w-_G22mr4JaE3Is",
    authDomain: "string-cheese.firebaseapp.com",
    databaseURL: "https://string-cheese.firebaseio.com",
    storageBucket: "string-cheese.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database()

var audioElement = document.createElement('audio');

$(".scores").hide(".scores");
$("#win").hide("#win");
$("#lose").hide("#lose");
$("#recentUsers").hide("#recentUsers");

$(document).ready(function () {

    var name = "";
    var score = 0

    window.onload = function () {
        //Rocky music on startup
        audioElement.setAttribute('src', './assets/images/Rocky_Theme_Song.mp3');
        audioElement.play();
    };

    $('#submit').on("click", function (e) { /*------------------------------------START OF SUBMIT CLICK FUNCTION ------------------------------------*/
        e.preventDefault();
        name = $('#name-box').val().trim();
        if (name != "") {

            audioElement.pause();
            $(".address-bar").hide('.address-bar');
            $(".player-form").hide('.player-form');
            $(".game-area").css("text-align",
                "center", "width", "500px").html("<div class = 'italics'>Directions: You have 5 chances to get a collective score above 400 to win this thing. So type something hilariously terrible and hit submit.</div><form class='arena'><textarea class='form-control'id='userInput' rows='3' maxlength='160' placeholder='Go for the gold Frodo Douchebaggins.'></textarea><input class='btn btn-default' type='submit' value='Submit' id='submit2'></form>");

            var round=1;
            $(".scores").show(".scores");
            $(".game-area").prepend("GIVE ME YOUR WORST, DILLHOLE.");
            $('#submit2').on('click', function (e) {
                e.preventDefault();
                var userInput = $('#userInput').val();
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
                    "data": JSON.stringify({"text": userInput}),
                };//Watson API Initialize (settings)

                $.ajax(settings).done(function (response) {//---------------------------------------------------Ajax setup for watson api-----------------------------------

                    var tones = {//object
                        "anger": response.document_tone.tone_categories[0].tones[0].score,

                    };
                    //sets up usable variables for each tone element already formated to percentages
                    var anger = Math.round(tones.anger * 100);

                    if (round == 1) {
                        $('#r1').append(userInput);
                        $('#r1').append("<br>");
                        $('#r1').append("Anger Score: " + anger + "%");

                        score = anger;
                    } else if (round == 2) {
                        //  $(".game-area").prepend("Your writing prompt is: " + prompts[round-1]);
                        $('#r2').append(userInput);
                        $('#r2').append("<br>");
                        $('#r2').append("Anger Score: " + anger + "%");

                        score = score + anger;
                    } else if (round == 3) {
                        // $(".game-area").prepend("Your writing prompt is: " + prompts[round-1]);
                        $('#r3').append(userInput);
                        $('#r3').append("<br>");
                        $('#r3').append("Anger Score: " + anger + "%");

                        score = score + anger;
                    } else if (round == 4) {
                        // $(".game-area").prepend("Your writing prompt is: " + prompts[round-1]);
                        $('#r4').append(userInput);
                        $('#r4').append("<br>");
                        $('#r4').append("Anger Score: " + anger + "%");
                        score = score + anger;
                    } else if (round == 5) {
                        //  $(".game-area").prepend("Your writing prompt is: " + prompts[round-1]);
                        $('#r5').append(userInput);
                        $('#r5').append("<br>");
                        $('#r5').append("Anger Score: " + anger + "%");

                        score = score + anger;

                        $(".game-area").hide(".game-area");
                        $(".scores").empty();
                        $(".scores").html("TOTAL SCORE: " + score);

                        database.ref().push({

                            name: name,
                            score: score,
                            date: firebase.database.ServerValue.TIMESTAMP

                        });

                        if (score > 400) {

                            $("#win").show("#win").append('<input class="btn btn-default reset" type="reset"  value="Reset"><br><Br></input><img src="./assets/images/winning.jpg"</img>')

                        } else
                            $("#lose").show("#lose").append('<input class="btn btn-default reset" type="reset"  value="Reset"><br><Br></input><img src="./assets/images/losing.png"</img>')
                    }

                    $(".reset").on("click", function(){
                        window.location.reload();

                    });
                    round++;
                    drawChart();
                });
            });/*----------------------------------------------------------------------------------End Watson Ajax call---------------------*/

        } else {
            $(".game-area").html("Type your name, dipshit.");
        }
    });

    /*----------------------------------------------------------------END OF CLICK FUNCTION ---------------------------------------------------------------------*/
// gauge code
    google.charts.load('current', {'packages': ['gauge']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Douche-o-meter', score],
        ]);

        var options = {
            min: 0, max: 500,
            width: 400, height: 200,
            redFrom: 400, redTo: 500,
            yellowFrom: 250, yellowTo: 399,
            greenFrom: 0, greenTo:249,
            minorTicks: 10
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);
    }

});

database.ref().orderByChild("score").startAt(0).endAt(500).on("child_added", function(childSnapshot){
    // Store everything into a variable.
    var newName = childSnapshot.val().name;
    var newScore = childSnapshot.val().score;
    var newDate = childSnapshot.val().date;

    var newDatePretty = moment(newDate).format("MM/DD/YY");

    $("#highScores > tbody").prepend("<tr><td>" + newName + "</td><td>" + newScore + "</td><td>" + newDatePretty + "</td><tr>");
});

