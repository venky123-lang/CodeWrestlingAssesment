const signUpOpener = document.getElementById('signup');
const containerInner = document.getElementById('main-container');
signUpOpener.addEventListener('click' , ()=>{
containerInner.classList.toggle('container-inner-show');
});


const logInOpener = document.getElementById('login');
logInOpener.addEventListener('click' , ()=>{
containerInner.classList.toggle('container-inner-show');
});

const loginSignUpBtn = document.getElementById('logsign');
loginSignUpBtn.addEventListener('click' , ()=>{
    containerInner.classList.toggle('container-show');
});

const fullBody = document.getElementById('login-x-mark');
fullBody.addEventListener('click' , ()=>{
    containerInner.classList.remove('container-show');
    console.log('hello');
});

const signX = document.getElementById('sign-x-mark');
signX.addEventListener('click' , ()=>{
    containerInner.classList.remove('container-show');
});


// ----------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const dashbord = document.getElementById('dashbord');
    const loginButton = document.getElementById('logbtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('pass');

    const correctUsername = 'username'; 
    const correctPassword = 'password';

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            window.location.href="dashbord.html";
        //    dashbord.style.display="inline-block";
        //    containerInner.classList.remove('container-show');
        //    loginSignUpBtn.style.display="none";
        } else {
            alert('Incorrect username or password. Please try again.'); 
        }
    });
});