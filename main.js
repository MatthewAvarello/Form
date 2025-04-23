let submitbutton = document.querySelector("#sub");
let MainPassword = document.querySelector("#User_Password");
let ConfirmPassword = document.querySelector("#Confirm_Password");
let form = document.querySelector("#formi")
//submitbutton.addEventListener("click", ValidatePassword)
function DoStuff(event){
    if (MainPassword.value !== ConfirmPassword.value){
        event.preventDefault();
        console.log("ELLO");
        alert("Password does not match up with confirmation")
    }
}
form.addEventListener("submit", DoStuff);
