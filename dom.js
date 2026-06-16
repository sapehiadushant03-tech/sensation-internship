// document.getElementById("heading")
// document.getElementsByClassName("heading")
// document.getElementsByTagName("h1")


// document.querySelector("h1")
// document.querySelector("#heading")
// document.querySelector(".heading")

// document.querySelectorAll("h1")

function changeText(){
let heading = document.querySelector("#heading");
heading.innerText = "Welcome ";
heading.style.color ="White";
document.body.bgColor = "Black";
}
function changebtn() {
    let change = document.querySelector("#Intro");
    change.innerText = "The change is successfully implemented on the desktop";
    change.style.color = "Violet";
    document.body.bgColor = "White";
}