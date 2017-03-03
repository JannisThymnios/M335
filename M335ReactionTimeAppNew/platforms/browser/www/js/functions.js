// VARIABELN FÜR SCORE
//------------------------------------------------------------
var StartScore = 0; //Score am Anfang des spiels
var PunkteProStage = 1;   //1Punkt Pro Runde
var TimingIntervall = 10; //10ms
var GameMode = ""; //Spielmodus (Classic oder Music)
var Difficulty = ""; //Schwierigkeit (1:Eifach,2:Moderat,3:Schwierig)
var User = ""; //Die ID des Users
var currentMaxTiming = 0;
var currentPunktezahl = 0;
var RandomTime = 0;
var RandomColor = "";
var Startzeitpunkt = "";
var EndZeitpunkt = "";
var IsLoosing = "false";
//------------------------------------------------------------
//------------------------------------------------------------
//Erhöht die Punktzahl um 1 Punkt und setzt den MaxReactionTiming Wert Neu
function StagePassed() {
    if(currentMaxTiming > 10) {
        currentPunktezahl = currentPunktezahl + PunkteProStage;
        currentMaxTiming = currentMaxTiming - TimingIntervall;        
        getScore();
    }
    else {
        SaveScore(GameMode, Difficulty, currentPunktezahl);
        ResetValues();
        GoToScoreboard();
    }
};
//------------------------------------------------------------------------------------
//Setzt den GameMode aufgrund der HTML Selektion
function SetGameMode(Value) {
    if(Value == "Classic") {
        GameMode = "Classic";
    } else if(Value == "Music") {
        GameMode = "Music"
    } else {
        //ERROR noch abfangen                                                                   TODO
    } 
};
//------------------------------------------------------------------------------------
//Setzt die Difficulty aufgrund der HTML Selektion
function SetDifficulty(Value) {
    if(Value == 1) {
        Difficulty = "Einfach";     //setzt Werte aufgrund der Difficulty
        currentMaxTiming = 1500;          //setzt Werte aufgrund der Difficulty
    } else if(Value == 2) {
        Difficulty = "Moderat";
        currentMaxTiming = 1000; 
    } else if(Value == 3) {
        Difficulty = "Schwierig";
        currentMaxTiming = 500;
    } else {
        //ERROR noch abfangen                                                                   TODO
    }
    GoToStage();
};
//------------------------------------------------------------------------------------
//Setzt alle Werte fürs Spiel
function SetGameSessionValues() {
    GameMode = GameMode;        //Temporär zur Übersicht
    Difficulty = Difficulty;    //Temporär zur Übersicht
    User = ReadUser();       //Holt User aus DB (Firebase)
    console.log(Difficulty + User + GameMode);
    StartScore = StartScore;    //Temporär zur Übersicht
};
//------------------------------------------------------------------------------------
//Resetet alle Werte nach dem Spiel
function ResetValues() {
    StartScore = 0; //Score am Anfang des spiels
    PunkteProStage = 1;   //1Punkt Pro Runde
    TimingIntervall = 10; //10ms
    GameMode = ""; //Spielmodus (Classic oder Music)
    Difficulty = ""; //Schwierigkeit (1:Eifach,2:Moderat,3:Schwierig)
    User = ""; //Die ID des Users
    currentMaxTiming = 0;
    currentPunktezahl = 0;
    RandomTime = 0;
    RandomColor = "";
    Startzeitpunkt = "";
    EndZeitpunkt = "";
    IsLoosing = "false";
    document.getElementById("getName").innerHTML = "Punkte: " + "0";
};
//------------------------------------------------------------------------------------
//Geht nach Auswahl der Schwierigkeit zum Spiel. Zudem nach jedem Stage wird hier wieder zum Spiel geführt
function GoToStage() {
    if(currentPunktezahl == 0) { //Dann ist es die erste Runde also müssen Werte gesetzt werden
        SetGameSessionValues();
        GoToClassicGameMode();
    } else {
        GoToClassicGameMode();
    }
};
//------------------------------------------------------------------------------------
//HAUPTFUNKTION DES SPIELS , HIER WIRD DER NÄCHSTE LAUF ENTSCHIEDEN UND BERECHNET
function checkTime() {
    var date = new Date();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ms = date.getMilliseconds();
    EndZeitpunkt = min.toString()+sec.toString()+ms.toString();
    console.log(EndZeitpunkt);
    if(Startzeitpunkt != "")
    {
        if(parseInt(EndZeitpunkt) - parseInt(Startzeitpunkt) <= currentMaxTiming) {
            StagePassed();
        }
        else {
            IsLoosing = "true";
        } 
    }
    else {
        IsLoosing = "true";
    }
    game();
}
//------------------------------------------------------------------------------------
function getUserToPage(UserName) {
    document.getElementById("UserNameOnRightLeftDownZeroPercentTopDownUnderUnderUserNameRightToPicture").innerHTML = UserName;
}
//------------------------------------------------------------------------------------
// Punkte abfragen
function getScore() {
    document.getElementById("getName").innerHTML = "Punkte: "+currentPunktezahl;
}
//------------------------------------------------------------------------------------
// Random Timer
function getRandom()
{
    RandomTime = Math.floor(Math.random() * 10000) + 3000;
}
//------------------------------------------------------------------------------------
//Random Color
function getRandomColor()
{
    var hex = Math.floor(Math.random() * 0xffffff);
    RandomColor = "#" + (hex.toString(16).substr(-6));
    if(RandomColor.length != 7)
    {
        getRandomColor();
    }
}
//------------------------------------------------------------------------------------
//Backgroundcolor ändern
function changeBackground()
{
    document.getElementById("changeColor").style.backgroundColor = RandomColor;
}
//------------------------------------------------------------------------------------
// Das Spiel
function game()
{
    if(IsLoosing == "false")
    {
        getRandomColor();
        getRandom();
        console.log(RandomColor);
        //wait(RandomTime);
        setTimeout(function() {
            changeBackground();  
            //Methode wurde ausgelagert, allerdings wird es dann nicht ausgeführt, darum wird es direkt hier rein geschrieben  
            var date = new Date();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var ms = date.getMilliseconds();
            Startzeitpunkt = min.toString()+sec.toString()+ms.toString();
            console.log(Startzeitpunkt);
        }, RandomTime);
    }
    else
    {
        SaveScore(GameMode, Difficulty, currentPunktezahl);
        ResetValues();
        GoToScoreboard();
    }
}

/*function getTimerStart()
{
    var date = new Date();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ms = date.getMilliseconds();
    Startzeitpunkt = min.toString()+sec.toString()+ms.toString();
    console.log(Startzeitpunkt);
}*/