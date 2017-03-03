function ValidateLoginForm() {
    var NameInput = document.getElementById("nameUser").value;
    console.log(NameInput);
    if(NameInput == "") {
        alert("Name must be Filled in!");
        return false;
    }
};