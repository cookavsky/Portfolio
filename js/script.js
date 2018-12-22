const Door = document.getElementsByClassName('Intro');
const button = document.querySelector("Span");
const More = document.getElementsByClassName("More");
const VisualArtA = document.querySelectorAll(".PortfolioA");
const VisualArtB = document.querySelectorAll(".PortfolioB");

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

const SizeArtA = function() {
    for(let i = 0; i < VisualArtA.length; i++) {
        VisualArtA[i].addEventListener("click", function() {
            if(VisualArtA[i].className === "PortfolioA Size") {
                    VisualArtA[i].classList.remove("Size");
                    VisualArtA[0].classList.remove("Hide");
                    VisualArtA[1].classList.remove("Hide");
                    VisualArtA[2].classList.remove("Hide");
                    VisualArtA[3].classList.remove("Hide");
                    VisualArtA[4].classList.remove("Hide");
                    VisualArtA[5].classList.remove("Hide");
                    VisualArtA[6].classList.remove("Hide");
                    VisualArtA[7].classList.remove("Hide");
                    VisualArtA[8].classList.remove("Hide");
                    VisualArtA[9].classList.remove("Hide");
            } else {
                switch (VisualArtA[i]) {
                    case VisualArtA[0]:
                        VisualArtA[0].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[1]:
                        VisualArtA[1].classList.add("Size");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[2]:
                        VisualArtA[2].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[3]:
                        VisualArtA[3].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[4]:
                        VisualArtA[4].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[5]:
                        VisualArtA[5].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[6]:
                        VisualArtA[6].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[7]:
                        VisualArtA[7].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[8]:
                        VisualArtA[8].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        VisualArtA[9].classList.add("Hide");
                        break;
                    case VisualArtA[9]:
                        VisualArtA[9].classList.add("Size");
                        VisualArtA[1].classList.add("Hide");
                        VisualArtA[2].classList.add("Hide");
                        VisualArtA[3].classList.add("Hide");
                        VisualArtA[4].classList.add("Hide");
                        VisualArtA[5].classList.add("Hide");
                        VisualArtA[6].classList.add("Hide");
                        VisualArtA[7].classList.add("Hide");
                        VisualArtA[8].classList.add("Hide");
                        VisualArtA[0].classList.add("Hide");
                        break;
                    default:
                        break;
                }
            }
        })
    }
}

const SizeArtB = function() {
    for(let i = 0; i < VisualArtB.length; i++) {
        VisualArtB[i].addEventListener("click", function() {
            if(VisualArtB[i].className === "PortfolioB Size") {
                    VisualArtB[i].classList.remove("Size");
                    VisualArtB[0].classList.remove("Hide");
                    VisualArtB[1].classList.remove("Hide");
                    VisualArtB[2].classList.remove("Hide");
                    VisualArtB[3].classList.remove("Hide");
                    VisualArtB[4].classList.remove("Hide");
                    VisualArtB[5].classList.remove("Hide");
                    VisualArtB[6].classList.remove("Hide");
                    VisualArtB[7].classList.remove("Hide");
                    VisualArtB[8].classList.remove("Hide");
                    VisualArtB[9].classList.remove("Hide");
            } else {
                switch (VisualArtB[i]) {
                    case VisualArtB[0]:
                        VisualArtB[0].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[1]:
                        VisualArtB[1].classList.add("Size");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[2]:
                        VisualArtB[2].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[3]:
                        VisualArtB[3].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[4]:
                        VisualArtB[4].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[5]:
                        VisualArtB[5].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[6]:
                        VisualArtB[6].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[7]:
                        VisualArtB[7].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[8]:
                        VisualArtB[8].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        VisualArtB[9].classList.add("Hide");
                        break;
                    case VisualArtB[9]:
                        VisualArtB[9].classList.add("Size");
                        VisualArtB[1].classList.add("Hide");
                        VisualArtB[2].classList.add("Hide");
                        VisualArtB[3].classList.add("Hide");
                        VisualArtB[4].classList.add("Hide");
                        VisualArtB[5].classList.add("Hide");
                        VisualArtB[6].classList.add("Hide");
                        VisualArtB[7].classList.add("Hide");
                        VisualArtB[8].classList.add("Hide");
                        VisualArtB[0].classList.add("Hide");
                        break;
                    default:
                        break;
                }
            }
        })
    }
}

OpenDoor();
SizeArtA();
SizeArtB();