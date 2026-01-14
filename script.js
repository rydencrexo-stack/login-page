const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

const showSignin = document.getElementById("show-signin");
const showSignup = document.getElementById("show-signup");

showSignin.addEventListener("click", () => {
    signupForm.style.display = "none";
    signinForm.style.display = "block";
});

showSignup.addEventListener("click", () => {
    signinForm.style.display = "none";
    signupForm.style.display = "block";
});
