//Versteckt einen Abschnitt, aufgrund der ID!
function HideByID(obj) {
            var element = document.getElementById(obj);
            element.style.display = 'none';
};
//------------------------------------------------------------------------------------
//Zeigt einen Versteckten Abschnitt wieder an, aufgrund der ID!
function UnHideByID(obj) {
            var element = document.getElementById(obj);
            element.style.display = 'block';
};
//------------------------------------------------------------------------------------
//Verlässt die App, oder den Browser
function ExitApp() {
    navigator.app.exitApp();
};
//------------------------------------------------------------------------------------
//Versteckt alle Container im HTML Dokument
function HideAllContainer() {
    var containers = document.getElementsByTagName("container");
    for(var i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none';
    }
};
//------------------------------------------------------------------------------------