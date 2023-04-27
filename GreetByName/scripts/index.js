"use strict"
const userName = document.getElementById("nameField");
const greetingBtn = document.getElementById("submitBtn");

window.onload = init;

function init(){
    greetingBtn.onclick = onSubmitBtnClicked;
}

function onSubmitBtnClicked(){
    console.log("clicked!")
}
