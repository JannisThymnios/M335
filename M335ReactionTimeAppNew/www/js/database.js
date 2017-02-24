var newUserKey = "";
function Beclick(){
    var userData = {
        Name: document.getElementById("nameUser").value,
        Foto: "-"
    };


     newUserKey = firebase.database().ref().child('User').push().key;
    


    var newUserKey = firebase.database().ref().child('User').push().key;

    var updates = {};
    updates['/User/' + newUserKey] = userData;
    var UserRef = firebase.database().ref().child('User').child(newUserKey);


    UserRef.on("value", snap => {
        var Username = snap.child("Name").val();

    });

    //console.log(firebase.database().ref().update(updates);)

    return Username
    

    

}


function ScoreSpeichern(){
    
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




function ScoreLesen(){
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