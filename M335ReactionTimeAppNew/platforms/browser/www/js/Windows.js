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
};
//------------------------------------------------------------------------------------
//Zeigt Hilfe
function GoToHelp() {
    HideAllContainer();
    UnHideByID("help");
};
//------------------------------------------------------------------------------------
//Zeigt Schwierigkeit
function GoToDifficulty(Value) {
    SetGameMode(Value);
    HideAllContainer();
    UnHideByID("difficulty");  
};
//------------------------------------------------------------------------------------