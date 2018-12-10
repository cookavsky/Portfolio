const button = document.getElementsByClassName('Intro');


window.onload = function() {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            button[i].classList.add("Back");
            button[i].childNodes[1].classList.remove("Hide")
            button[i].classList.add("Back");
            button[i].childNodes[3].classList.remove("Hide")
        })
}}
