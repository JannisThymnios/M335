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
