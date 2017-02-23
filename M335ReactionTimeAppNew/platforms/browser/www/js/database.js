
function Beclick(){

    
    var userData = {
        name: document.getElementById("nameUser").value,
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