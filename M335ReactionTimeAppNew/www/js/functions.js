
// VARIABELN FÜR SCORE
//------------------------------------------------------------
var PunkteProStage = 1;   //1Punkt Pro Runde
var TimingIntervall = 10; //10ms
var GameMode = ""; //Spielmodus (Classic oder Music)
var Difficulty = ""; //Schwierigkeit (1:Eifach,2:Moderat,3:Schwierig)
//------------------------------------------------------------
//Versteckt einen Abschnitt, aufgrund der ID!
function HideByID(obj) {
            var element = document.getElementById(obj);
            element.style.display = 'none';
};
//Zeigt einen Versteckten Abschnitt wieder an, aufgrund der ID!
function UnHideByID(obj) {
            var element = document.getElementById(obj);
            element.style.display = 'block';
};
//Verlässt die App, oder den Browser
function ExitApp() {
    navigator.app.exitApp();
};
//Erhöht die Punktzahl um 1 Punkt
function StagePassed(aktuellePunktezahl) {
    var aktuellePunktezahl = aktuellePunktezahl + PunkteProStage;
    return Punktezahl;
}
//Verringert das MaxTiming um 10ms
function NewMaxTiming(aktuellesMaxTiming) {
    var MaxTiming = aktuellesMaxTiming - TimingIntervall;
    return MaxTiming;
}
function SetGameMode(Value) {

};
function SetDifficulty(Value) {
    if(Value == 1) {
        Difficulty = "Einfach";
    } else if(Value == 2) {
        Difficulty = "Moderat";
    } else if(Value == 3) {
        Difficulty = "Schwierig";
    }
};