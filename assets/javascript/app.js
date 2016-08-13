


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

    var tones ={
        "anger": response.document_tone.tone_categories[0].tones[0].score,
        "discust":response.document_tone.tone_categories[0].tones[1].score,
        "fear":response.document_tone.tone_categories[0].tones[2].score,
        "joy":response.document_tone.tone_categories[0].tones[3].score,
        "sadness":response.document_tone.tone_categories[0].tones[4].score,

        "analytical":response.document_tone.tone_categories[1].tones[0].score,
        "confident":response.document_tone.tone_categories[1].tones[1].score,
        "tenative":response.document_tone.tone_categories[1].tones[2].score,

        "openness":response.document_tone.tone_categories[2].tones[0].score,
        "conscientiousness":response.document_tone.tone_categories[2].tones[1].score,
        "extraversion":response.document_tone.tone_categories[2].tones[2].score,
        "agreeableness":response.document_tone.tone_categories[2].tones[3].score,
        "emotionalRange":response.document_tone.tone_categories[2].tones[4].score,
    }
    var anger= Math.round(tones.anger*100);
    var discust= Math.round(tones.discust*100);
    var fear= Math.round(tones.fear*100);
    var joy=Math.round(tones.joy*100);
    var sadness=Math.round(tones.fear*100);

    var analytical=Math.round(tones.analytical*100);
    var confident=Math.round(tones.confident*100);
    var tenative=Math.round(tones.tenative*100);

    var openness=Math.round(tones.openness*100);
    var conscientiousness=Math.round(tones.conscientiousness*100);
    var extraversion=Math.round(tones.extraversion*100);
    var agreeableness=Math.round(tones.agreeableness*100);
    var emotionalRange=Math.round(tones.emotionalRange*100);


    console.log("Anger Score: "+anger+"%");
    console.log("Discust Score: "+discust+"%");
    console.log("Fear Score: "+fear+"%");
    console.log("Joy Score: "+joy+"%");
    console.log("Sadness Score: "+sadness +"%");

    console.log("Analytical Score: "+analytical+"%");
    console.log("Confidence Score: "+confident+"%");
    console.log("Tenative Score: "+tenative+"%");

    console.log("Openness Score: "+openness+"%");
    console.log("Conscientiousness Score: "+conscientiousness+"%");
    console.log("Extraversion Score: "+extraversion+"%");
    console.log("Agreeableness Score: "+agreeableness+"%");
    console.log("Emotional Range Score: "+emotionalRange+"%");




});