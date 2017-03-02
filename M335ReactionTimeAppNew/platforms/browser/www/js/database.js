
var newUserKey;
function Login(){
    var Username = document.getElementById("nameUser").value;
    var userData = {
        Name: Username,
        Foto: "-"
    };

    newUserKey = firebase.database().ref().child('User').push().key;
    
    var updates = {};
    updates['/User/' + newUserKey] = userData;
    GoToMainMenue();
    getUserToPage(Username);
    SaveScore();
    ReadScore();
    return firebase.database().ref().update(updates);
}
function ReadUser(){
    var Username;
    var UserRef = firebase.database().ref().child('User').child(newUserKey);
    UserRef.on("value", snap => {
        return snap.child("Name").val();
    });
    
    
}
function SaveScore(){
    
    var scoreData = {
        Name: "Muster",
        Mode: "Classic",
        Difficulty: "Einfach",
        Score: "5000"
    };

    var newScoreKey = firebase.database().ref().child('Score').push().key;

    var updates2 = {};
    updates2['/Score/' + newScoreKey] = scoreData;

    return firebase.database().ref().update(updates2);
}

function ReadScore(){

    var ScoreRef = firebase.database().ref().child('Score');
    ScoreRef.on("child_added", snap => {
        var Username = snap.child("Name").val();
        var Mode = snap.child("Mode").val();
        var Schwieigkeit = snap.child("Difficulty").val();
        var score = snap.child("Score").val();
        //weiterer Code kommt noch sobald die Scoreboardseite existiert.
        $("#table_body").append("<tr class='bor'><td class='pad'>1.</td class='pad'><td class='pad'>" +  Username + "</td class='pad'><td class='pad'>" + score + "</td class='pad'></tr class='bor'>")
    });

    
}