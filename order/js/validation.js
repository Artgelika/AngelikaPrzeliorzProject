var username = document.forms['form']['username'];
var email = document.forms['form']['email'];
var message = document.forms['form']['message'];

var email_error = document.getElementById('email_error');
var username_error = document.getElementById('username_error')
var message_error = document.getElementById('message_error');

email.addEventListener('textInput', email_Verify);
username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', message_Verify);


function validated() {
    if (username.value.length < 3 || !valid_Name(username.value)) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
    }
    if (email.value.length < 9 || !valid_Email(email.value)) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
    }
    if (message.value.length < 6) {
        message.style.border = "1px solid red";
        message_error.style.display = "block";
        message.focus();
    }
}

function username_Verify() {
    if (username.value.length >= 3 && username.value.length <=20) {
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}

function email_Verify() {
    if (email.value.length >= 8 ) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function message_Verify() {
    if (message.value.length >= 5) {
        message.style.border = "1px solid silver";
        message_error.style.display = "none";
        return true;
    }
}

function valid_Name(username){
    const regexUsernamePattern = new RegExp('(^[A-Z][a-z]{,19})$');
    return username.match(regexUsernamePattern);
}

function valid_Email(email){
    const regexEmailPattern = new RegExp('([A-Z])\w+.+@+([a-z])+.+([a-z]{2,3})');
    return email.match(regexEmailPattern);
}