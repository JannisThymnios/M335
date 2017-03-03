
// VARIABELN FÜR User
//------------------------------------------------------------
var newUserKey;
var Username = "";
//------------------------------------------------------------
//------------------------------------------------------------
//Login Funktion
function Login(){
    //Erstellt Tabelle User und fügt die Werte hinzu
    Username = document.getElementById("nameUser").value;
    console.log(Username);
    //Validiert ob ein Name eingegeben wurde
    if(Username == "") {
        alert("Name must be Filled in!");
    }
    else {
        var userData = {
            Name: Username,
            Foto: "-"
        };
        newUserKey = firebase.database().ref().child('User').push().key;
        var updates = {};
        updates['/User/' + newUserKey] = userData;
        GoToMainMenue();
        getUserToPage(Username);

        return firebase.database().ref().update(updates);
    }
}
//------------------------------------------------------------------------------------
//User Auslesen
function ReadUser(){
    //Holt den aktuellen User aus der Datenbank, aufgrund des Keys
    var UserRef = firebase.database().ref().child('User').child(newUserKey);
    UserRef.on("child_added", snap => {
        return snap.child("Name").val();
    });
}
//------------------------------------------------------------------------------------
//Speichert Score
function SaveScore(Mode, Difficulty, Score){
    //Erstellt Tabelle Score und fügt die Werte hinzu
    var scoreData = {
        Name: Username,
        Mode: Mode,
        Difficulty: Difficulty,
        Score: Score
    };
    var newScoreKey = firebase.database().ref().child('Score').push().key;
    var updates2 = {};
    updates2['/Score/' + newScoreKey] = scoreData;

    return firebase.database().ref().update(updates2);
}
//------------------------------------------------------------------------------------
//Erstellt das Scoreboard
function ReadScore(){
    //Liest alle Scores und erstellt so das Scoreboard
    var Werte = []
    var ScoreRef = firebase.database().ref().child('Score');
    ScoreRef.on("child_added", snap => {
        Werte.push(snap.val());
        Werte.sort(function(a, b) {
            return b.Score - a.Score;
        });

        var html = "";
        for(var i = 0; i < Werte.length; i++){
            html += '<tr class="bor">';
            html += '<td class="pad">' + (i+1) + '.</td>';
            html += '<td class="pad">' +  Werte[i].Name + '</td>';
            html += '<td class="pad">' +  Werte[i].Difficulty + '</td>';
            html += '<td class="pad">' +  Werte[i].Score + '</td>';
            html += '</tr>';
        }
    document.getElementById("table_body").innerHTML = html;
    }); 
}
//------------------------------------------------------------------------------------