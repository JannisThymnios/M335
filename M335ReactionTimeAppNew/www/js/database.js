<<<<<<< HEAD
var newUserKey;
function Login(){
    var Username;
=======
var newUserKey = "";
function Beclick(){
>>>>>>> ac29bad603bbb66761ccfe1a3836e96c6d5f9fb9
    var userData = {
        Name: document.getElementById("nameUser").value,
        Foto: "-"
    };
<<<<<<< HEAD
    newUserKey = firebase.database().ref().child('User').push().key;
    
    var updates = {};
    updates['/User/' + newUserKey] = userData;
    //console.log(firebase.database().ref().update(updates);)
    var UserRef = firebase.database().ref().child('User').child(newUserKey);
=======
     newUserKey = firebase.database().ref().child('User').push().key;

    var updates = {};
    updates['/User/' + newUserKey] = userData;
    var UserRef = firebase.database().ref().child('User').child(newUserKey);


>>>>>>> ac29bad603bbb66761ccfe1a3836e96c6d5f9fb9
    UserRef.on("value", snap => {
        Username = snap.child("Name").val();
        console.log(Username);
    });
    //console.log(firebase.database().ref().update(updates);)
<<<<<<< HEAD
    GoToMainMenue(Username);
=======

    return Username

>>>>>>> ac29bad603bbb66761ccfe1a3836e96c6d5f9fb9
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
<<<<<<< HEAD
function ReadScore(){
=======


function ScoreLesen(){
>>>>>>> ac29bad603bbb66761ccfe1a3836e96c6d5f9fb9
    var ScoreRef = firebase.database().ref().child('Score');
    UserRef.on("child.added", snap => {
        var Username = snap.child("Name").val();
        var Mode = snap.child("Mode").val();
        var Schwieigkeit = snap.child("Difficulty").val();
        var score = snap.child("Score").val();
        //weiterer Code kommt noch sobald die Scoreboardseite existiert.
        window.alert(Username);
    });

    
}