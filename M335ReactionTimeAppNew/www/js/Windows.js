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
};
//------------------------------------------------------------------------------------
//Zeigt Hilfe
function GoToHelp() {
    HideAllContainer();
    UnHideByID("help");
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
//Um den Start zu verzögern
function wait(ms)
{
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms)
    {
        end = new Date().getTime();
    }
}