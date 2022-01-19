"use strict";

// const form = document.querySelector("form");
// const name = form.querySelector("#name");
// const email = form.querySelector("#email");
// const password = form.querySelector("#password");

// form.addEventListener("submit", formHandler);

// function formHandler(e) {
//     e.preventDefault();

// const userInfo = {
//     name : name.value,
//     email : email.value,
//     password : password.value
// }
// console.log(userInfo);

// name.value = "";
// email.value = "";
// password.value = "";


// }



const form = document.querySelector("form");
const firstName = form.querySelector("#firstName");
const lastName = form.querySelector("#lastName");
const email = form.querySelector("#email");
const password = form.querySelector("#password");
const number = form.querySelector("#number");

form.addEventListener("submit", function() {
let userInfo = {
    First_Name : firstName.value,
    Last_Name : lastName.value,
    Email : email.value,
    Password : password.value,
    Number : number.value,
}

console.log(userInfo);

//clear input value after submiting

firstName.value = "";
lastName.value = "";
email.value = "";
password.value = "";
number.value = "";

});
