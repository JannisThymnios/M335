
function Beclick(){

    
    var userData = {
        Name: document.getElementById("nameUser").value,
        Foto: "-"
    };

    var newUserKey = firebase.database().ref().child('User').push().key;
    

    var updates = {};
    updates['/User/' + newUserKey] = userData;

    var UserRef = firebase.database().ref().child('User').child(newUserKey);

    UserRef.on("value", snap => console.log(snap.child("Name").val());

    //console.log(firebase.database().ref().update(updates);)

    return firebase.database().ref().update(updates);
    

    
}



/*function NameUser(){
    var UserRef = firebase.database().ref().child('User').key(;

    UserRef.on("value", snap => {
        var Username = snap.child("Name").val();

        window.alert(Username);
    });

    
}*/