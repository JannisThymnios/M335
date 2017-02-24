function ValidateLoginForm() {
    var NameInput = document.forms["LoginForm"]["nameUser"].value;
    if(NameInput == "") {
        alert("Name must be Filled in!");
        return false;
    }
}