function ValidateLoginForm() {
    var NameInput = document.forms["LoginForm"]["nameUser"].value;
    console.log(NameInput);
    if(NameInput == "") {
        alert("Name must be Filled in!");
        return false;
    }
};