	//Validtion Code For Inputs

    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];
    var username = document.forms['form']['username'];
    
    var email_error = document.getElementById('email_error');
    var username_error = document.getElementById('username_error')
    var pass_error = document.getElementById('pass_error');
    
    email.addEventListener('textInput', email_Verify);
    username.addEventListener('textInput', username_Verify);
    password.addEventListener('textInput', pass_Verify);
    
    function validated(){
        if (username.value.length < 3) {
            username.style.border = "1px solid red";
            username_error.style.display = "block";
            username.focus();
            return false;
        }
        if (email.value.length < 9) {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
        }
        if (password.value.length < 6) {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            return false;
        }
    
    }
    function username_Verify(){
        if (username.value.length >= 3) {
            username.style.border = "1px solid silver";
            username_error.style.display = "none";
            return true;
        }
    }

    function email_Verify(){
        if (email.value.length >= 8) {
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 5) {
            password.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
    }
    
    


// const form = document.getElementById('contact');
// var username = document.forms['contact']['username'].value;
// var email = document.forms['contact']['email'].value;
// var message = document.forms['contact']['message'].value;

// var name_error = document.getElementById('name_error');
// var email_error = document.getElementById('email_error');
// var message_error = document.getElementById('message_error');

// username.addEventListener('textInput', username_Verify);
// email.addEventListener('textInput', email_Verify);
// message.addEventListener('textInput', message_Verify);



// function validated(){
    
//     if ( username.length < 20)
//     {
//         alert("Name must be filled out");
//         return false;
//     }
// 	// if (username.value.length < 9) {
// 	// 	username.order.border = "1px solid red";
// 	// 	username_error.style.display = "block";
// 	// 	username.focus();
// 	// 	return false;
// 	// }

//     // if (email.value.length < 9) {
// 	// 	email.order.border = "1px solid red";
// 	// 	email_error.style.display = "block";
// 	// 	email.focus();
// 	// 	return false;
// 	// }

//     // if (message.value.length < 9) {
// 	// 	message.order.border = "1px solid red";
// 	// 	message_error.style.display = "block";
// 	// 	message.focus();
// 	// 	return false;
// 	// }
// }

// function email_Verify(){
// 	if (email.length >= 5) {

// 		return true;
// 	}
// }


// // const form = document.getElementById("form");
// // const username = document.getElementById("name");
// // const email = document.getElementById("email");
// // const message = document.getElementById("message");

// // form.addEventListener("submit", (e) => {
// //     let messages = []
// //     e.preventDefault();
// //     checkInputs();
// // })

// // function checkInputs() {
// //     const formValue = form.value.trim();
// //     const usernameValue = username.value.trim();
// //     const emailValue = email.value.trim();
// //     const messageValue = message.value.trim();

// //     if (usernameValue === '' || usernameValue == null) {
// //         messages.push("Name is required")
// //     } else {
// //         setSuccessFor(username);

// //     }

// //     if (emailValue === '') {
// //         setErrorFor(emailValue, "Username can't be blank");
// //     } else {
// //         setSuccessFor(emailValue);
// //     }

// // }

// // function setErrorFor(input, message) {
// //     const formControl = input.parentElement;
// //     const small = formControl.querySelector('small');

// //     small.innerText = message;

// //     formControl.className = 'form-control error';
// // }

// // function setSuccessFor(input) {
// //     const formControl = input.parentElement;
// //     formControl.className = 'form-control success';
// // }

// // function isEmail(email) {
// //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// // }
