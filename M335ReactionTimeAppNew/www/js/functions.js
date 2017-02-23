
// VARIABELN FÜR SCORE
//------------------------------------------------------------
var StartScore = 0; //Score am Anfang des spiels
var PunkteProStage = 1;   //1Punkt Pro Runde
var TimingIntervall = 10; //10ms
var GameMode = ""; //Spielmodus (Classic oder Music)
var Difficulty = ""; //Schwierigkeit (1:Eifach,2:Moderat,3:Schwierig)
var User = ""; //Die ID des Users
var StartTimer = 0; //StartTimer wird aufgrund der Difficulty gesetzt
//------------------------------------------------------------



//Versteckt einen Abschnitt, aufgrund der ID!
function HideByID(obj) {
            var element = document.getElementById(obj);
            element.style.display = 'none';
};
//------------------------------------------------------------------------------------
//Zeigt einen Versteckten Abschnitt wieder an, aufgrund der ID!
function UnHideByID(obj) {
            var element = document.getElementById(obj);
            element.style.display = 'block';n
};
//------------------------------------------------------------------------------------
//Verlässt die App, oder den Browser
function ExitApp() {
    navigator.app.exitApp();
};
//------------------------------------------------------------------------------------
//Erhöht die Punktzahl um 1 Punkt
function StagePassed(aktuellePunktezahl) {
    var aktuellePunktezahl = aktuellePunktezahl + PunkteProStage;
    return Punktezahl;
};
//------------------------------------------------------------------------------------
//Verringert das MaxTiming um 10ms
function NewMaxTiming(aktuellesMaxTiming) {
    var MaxTiming = aktuellesMaxTiming - TimingIntervall;
    return MaxTiming;
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
        StartTimer = 1500;          //setzt Werte aufgrund der Difficulty
    } else if(Value == 2) {
        Difficulty = "Moderat";
        StartTimer = 1000; 
    } else if(Value == 3) {
        Difficulty = "Schwierig";
        StartTimer = 500;
    } else {
        //ERROR noch abfangen                                                                   TODO
    }
};
//------------------------------------------------------------------------------------
//Zeigt wieder die Hauptmenü Seite, und Resetet alle Werte
function BackToMainMenu() {
//Hide alle nicht Menue ID Elemente                                                             TODO
};
//------------------------------------------------------------------------------------
//Geht nach Auswahl der Schwierigkeit zum Spiel
function GoToGame() {
    SetGameSessionValues();

    //Hide alle nicht ClassicGameMode ID Elemente                                               TODO
    //Und Zeige alle ClassicGameMode ID Elemente                                                TODO
};
//------------------------------------------------------------------------------------
//Setzt alle Werte fürs Spiel
function SetGameSessionValues() {
    GameMode = GameMode;        //Temporär zur Übersicht
    Difficulty = Difficulty;    //Temporär zur Übersicht
    User = GetUser();       //Holt User aus DB (Firebase)
    StartScore = StartScore;    //Temporär zur Übersicht
    StartTimer = StartTimer;    //Temporär zur Übersicht
};
//------------------------------------------------------------------------------------
//Resetet alle Werte nach dem Spiel
function ResetValues() {
    StartScore = 0;
    PunkteProStage = 1;
    TimingIntervall = 10;
    GameMode = "";
    Difficulty = "";
    User = "";
    StartTimer = 0;
};
//------------------------------------------------------------------------------------
