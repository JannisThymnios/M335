
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

    //SaveScore();
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
function SaveScore(Mode, Difficulty, Score){
    //Erstellt Tabelle Score und fügt die Werte hinzu
    var scoreData = {

        Name: "Muster",
        Mode: "Classic",
        Difficulty: "Einfach",
        Score: "5000"

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

function ReadScore(){
    //Ruft die Werte von Score auf
    var Werte = []
    var Test = [1, 100, 5, 2, 100]
   

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
        
        Werte.sort(function(a, b) {
            return b.Score - a.Score;
        
        });
        var html = "";
        for(var i = 1; i < Werte.length; i++){
            html += '<tr class="bor">';
            html += '<td class="pad">' + i + '.</td>';
            html += '<td class="pad">' +  Werte[i].Name + '</td>';
            html += '<td class="pad">' +  Werte[i].Score + '</td>';

            html += '</tr>'
        }

    document.getElementById("table_body").innerHTML = html;
    });


    
    
    
    
    
    
    
    
}