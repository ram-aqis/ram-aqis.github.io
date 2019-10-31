var signInForm = document.getElementById("sign-in-form"),
    signUpForm = document.getElementById("sign-up-form"),
    signUpPage = document.querySelector(".signup-page"),
    signInPage = document.querySelector(".signin-page");
//Show sign in form

document.getElementById("registered").addEventListener("click", function () {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});
//Show sign up form
document.getElementById("not-registered").addEventListener("click", function () {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});
//closes form
document.getElementById("close-signin").addEventListener("click", function () {
    signUpPage.style.display = "none";
});
document.getElementById("close-signup").addEventListener("click", function () {
    signUpPage.style.display = "none";
});
//Open login form
document.querySelector(".loginButton-link").addEventListener("click", function () {
    signUpPage.style.display = "block";

});
//Open signup form

var signUpClass = document.getElementsByClassName("signup");

for (var i = 0; i < signUpClass.length; i++) {
    signUpClass[i].addEventListener('click', function () {
        signUpPage.style.display = "block";
    })
}
window.document.addEventListener('click', function (clickAnyWhere) {
    if (clickAnyWhere.target == "") {
        signUpPage.style.display = "none";
    }
});