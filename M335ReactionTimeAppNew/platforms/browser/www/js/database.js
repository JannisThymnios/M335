
var newUserKey;
var Username = "";
function Login(){
    //Erstellt Tabelle User und fügt die Werte hinzu
    Username = document.getElementById("nameUser").value;
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
    //Ruft die Werte von der Tabelle User auf
    var Username;
    var UserRef = firebase.database().ref().child('User').child(newUserKey);
    UserRef.on("child_added", snap => {
        return snap.child("Name").val();
    });
    
    
}
function SaveScore(){
    //Erstellt Tabelle Score und fügt die Werte hinzu
    var scoreData = {
        Name: "Muster",
        Mode: "Classic",
        Difficulty: "Einfach",
        Score: 5000
    };

    var newScoreKey = firebase.database().ref().child('Score').push().key;

    var updates2 = {};
    updates2['/Score/' + newScoreKey] = scoreData;

    return firebase.database().ref().update(updates2);
}

function ReadScore(){
    //Ruft die Werte von Score auf
    var Werte = []
   

    var ScoreRef = firebase.database().ref().child('Score');
    ScoreRef.on("child_added", snap => {
        //var Username = snap.child("Name").val();
        Werte.push(snap.val());
        
        /*var Username = snap.child("Name").val();
        var Mode = snap.child("Mode").val();
        var Schwieigkeit = snap.child("Difficulty").val();
        var score = snap.child("Score").val();
        //weiterer Code kommt noch sobald die Scoreboardseite existiert.
        //$("#table_body").append("<tr class='bor'><td class='pad'>1.</td class='pad'><td class='pad'>" +  Username + "</td class='pad'><td class='pad'>" + score + "</td class='pad'></tr class='bor'>")
        document.getElementById("table_body").innerHTML += '\
            <tr class="bor">\
                <td class="pad">1.</td>\
                <td class="pad">' +  Username + '</td>\
                <td class= "pad">' + score + '</td>\
            </tr>'*/
        
    });
    Werte.sort(function(a, b) {
        return parseInt(a.Score) - parseFloat(b.Score);
        
});
    console.log(Werte);

    
    
    
    
}