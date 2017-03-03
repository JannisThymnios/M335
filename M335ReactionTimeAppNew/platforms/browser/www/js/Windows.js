//Zeigt Login
function GoToLogin() {
    console.log('GoToLogin')
    HideAllContainer();
    UnHideByID("logIn");
};
//------------------------------------------------------------------------------------
//Zeigt Hauptmenü
function GoToMainMenue() {
    HideAllContainer();
    UnHideByID("menue");
};
//------------------------------------------------------------------------------------
//Zeigt Klassischen Spielmodus
function GoToClassicGameMode() {
    HideAllContainer();
    UnHideByID("classicGame");
    game();
};
//------------------------------------------------------------------------------------
//Zeigt Music Spielmodus
function GoToMusicGameMode() {
    HideAllContainer();
    UnHideByID("musicmode");
};
//------------------------------------------------------------------------------------
//Zeigt Scoreboard
function GoToScoreboard() {
    HideAllContainer();
    UnHideByID("tableScore");
    ReadScore();
};
//------------------------------------------------------------------------------------
//Zeigt Hilfe
function GoToHelp() {
    HideAllContainer();
    UnHideByID("help");
    //Wechselt aufgrund des Spielmodus die Help Seite (Musichelp wird nie angezeigt da der Modus deaktiviert ist)
    if(GameMode == "Classic")
    {
        HideByID("MusicHelp");
        UnHideByID("ClassicHelp");
    }
    else
    {
        HideByID("ClassicHelp");
        UnHideByID("MusicHelp");
    }
};
//------------------------------------------------------------------------------------
//Zeigt Schwierigkeit
function GoToDifficulty(Value) {
    SetGameMode(Value);
    HideAllContainer();
    UnHideByID("difficulty");  
};
//------------------------------------------------------------------------------------
//Methode für Verzögern, Wartet Millisekunden aufgrund des Parameters
function wait(ms)
{
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms)
    {
        end = new Date().getTime();
    }
}