var name = document.getElementById("nameUser");
var Button = document.getElementById("Bestaetigen");


function Beclick(){

    
    var userData = {
        name: name,
        foto: "-"
    };

    var newUserKey = firebase.database().ref().child('User').push().key;
    console.log(newUserKey);

    var updates = {};
    updates['/User/' + newUserKey] = userData;

    return firebase.database().ref().update(updates);
    

    /*var firebaseref = firebase.database().ref();
    firebaseref.child("User").set("PPOP");
    window.alert("PPOP");*/
}