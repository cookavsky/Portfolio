const headerText = ["Hi, my name is Marcin Panda Kukawski.", "Junior Front-end Developer.", "Welcome to my professional life.", "Enjoy! This journey!"];

let index = 0;
let counter = 0;
let position = 0;
let Text = document.getElementById("Text");
const consoleText = document.querySelectorAll(".console-text");
const headerContainer = document.querySelectorAll(".header-container");
const headerSocial = document.querySelectorAll(".header-social");

const Terminal = () => {
    if (position === 0) {
        window.setTimeout(() => {
            counter++;
            Text.innerHTML = headerText[index].slice(0, counter);
        },300);
        if (counter === headerText[index].length) {
            position = 1;
        }
    } else if (position === 1) {
        counter--;
        Text.innerHTML = headerText[index].slice(0, counter);
        if (counter === 0) {
            position = 0;
            index++;
            if (index === 4) {
                index = 0;
                headerContainer[0].classList.add("mini");
                consoleText[0].classList.add("off");
                headerSocial[0].classList.remove("off");
            }
        }
    }
};

const SkipBtn = document.getElementById("Skip");

const Skip = () => {
    SkipBtn.addEventListener("click", () => {
        headerContainer[0].classList.add("mini");
        consoleText[0].classList.add("off");
        headerSocial[0].classList.remove("off");
        SkipBtn.classList.add("off");
    });
};

let loop = setInterval(Terminal, 100);
Skip();