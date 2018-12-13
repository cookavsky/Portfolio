const Door = document.getElementsByClassName('Intro');
const button = document.querySelector("Span");
const More = document.getElementsByClassName("More");
const VisualArt = document.querySelectorAll(".Portfolio");

let OpenDoor = function() {
    for (let i = 0; i < Door.length; i++) {
        Door[i].addEventListener('click', function () {
            Door[i].classList.add("Back");
            Door[i].childNodes[1].classList.remove("Hide");
            Door[i].childNodes[3].classList.remove("Hide");
        })
    for(let y = 0; y < More.length; y++) {
        More[y].addEventListener("click", function() {
            if(button.className === "Hide") {
                button.classList.remove("Hide");
                More[y].innerHTML = "Hide";
            } else {
                button.classList.add("Hide");
                More[y].innerHTML = "More";
            }
        })
    }
}};

const SizeArt = function() {
    for(let i = 0; i < VisualArt.length; i++) {
        VisualArt[i].addEventListener("click", function() {
            if(VisualArt[i].className === "Portfolio Size") {
                    VisualArt[i].classList.remove("Size");
                    VisualArt[0].classList.remove("Hide");
                    VisualArt[1].classList.remove("Hide");
                    VisualArt[2].classList.remove("Hide");
                    VisualArt[3].classList.remove("Hide");
                    VisualArt[4].classList.remove("Hide");
                    VisualArt[5].classList.remove("Hide");
                    VisualArt[6].classList.remove("Hide");
                    VisualArt[7].classList.remove("Hide");
                    VisualArt[8].classList.remove("Hide");
                    VisualArt[9].classList.remove("Hide");
                    console.log("2click");
            } else {
                switch (VisualArt[i]) {
                    case VisualArt[0]:
                        VisualArt[0].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[1]:
                        VisualArt[1].classList.add("Size");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[2]:
                        VisualArt[2].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[3]:
                        VisualArt[3].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[4]:
                        VisualArt[4].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[5]:
                        VisualArt[5].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[6]:
                        VisualArt[6].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[7]:
                        VisualArt[7].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[8]:
                        VisualArt[8].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        VisualArt[9].classList.add("Hide");
                        break;
                    case VisualArt[9]:
                        VisualArt[9].classList.add("Size");
                        VisualArt[1].classList.add("Hide");
                        VisualArt[2].classList.add("Hide");
                        VisualArt[3].classList.add("Hide");
                        VisualArt[4].classList.add("Hide");
                        VisualArt[5].classList.add("Hide");
                        VisualArt[6].classList.add("Hide");
                        VisualArt[7].classList.add("Hide");
                        VisualArt[8].classList.add("Hide");
                        VisualArt[0].classList.add("Hide");
                        console.log("1click")
                        break;
                    default:
                        break;
                }
            }
        })
    }
}

OpenDoor();
SizeArt();