///////////HEADER/////////
const headerText = ["Hi, my name is Marcin Panda Kukawski.", "Junior Front-end Developer.", "Welcome to my professional life.", "Enjoy! This journey!"];

let index = 0;
let counter = 0;
let position = 0;
let Text = document.getElementById("Text");
const Console = document.getElementById("Console");
const HeaderContainer = document.getElementById("Header-Container");
const HeaderSocial = document.getElementById("Header-Social");
const MainContainer = document.getElementById("Main-Container");

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
                HeaderContainer.classList.add("mini");
                Console.classList.add("off");
                HeaderSocial.classList.remove("off");
                SkipBtn.classList.add("off");
                MainContainer.classList.remove("off");
            }
        }
    }
};

const SkipBtn = document.getElementById("Skip");

const Skip = () => {
    SkipBtn.addEventListener("click", () => {
        HeaderContainer.classList.add("mini");
        Console.classList.add("off");
        HeaderSocial.classList.remove("off");
        SkipBtn.classList.add("off");
        MainContainer.classList.remove("off");
    });
};
/*--------------MENU--------------*/
const Top = document.getElementById("Top");
const Bottom = document.getElementById("Bottom");
const BackBtn = document.getElementById("Back");
const ArtMain = document.getElementById("ArtMain");
//////Home//////
const Home = document.getElementById("Home");
const HomeNav = document.getElementById("HomeNav");
const HomeContent = document.getElementById("Home-Content");
////////CV///////
const CV = document.getElementById("CV");
const CVNav = document.getElementById("CVNav");
const CVContent = document.getElementById("CV-Content");
///Project////
const Projects = document.getElementById("Projects");
const ProjectsNav = document.getElementById("ProjectsNav");
const ProjectsContent = document.getElementById("Projects-Content");
/////Contacts////
const Contacts = document.getElementById("Contacts");
const ContactsNav = document.getElementById("ContactsNav");
const ContactsContent = document.getElementById("Contacts-Content");

const Menu = () => {
    Top.addEventListener("click", () => {
        if (Contacts.className !== "Contacts Contacts-small off" && ContactsNav.className !== "Menu-list off") {
            Contacts.classList.add("off");
            ContactsNav.classList.add("off");
            Projects.classList.remove("off");
            ProjectsNav.classList.remove("off");
            Bottom.classList.add("Steping");
        } else if (Projects.className !== "Projects Projects-small off" && ProjectsNav.className !== "Menu-list off") {
            Projects.classList.add("off");
            ProjectsNav.classList.add("off");
            CV.classList.remove("off");
            CVNav.classList.remove("off");
        } else if (CV.className !== "CV CV-small off" && CVNav.className !== "Menu-list off") {
            CV.classList.add("off");
            CVNav.classList.add("off");
            Home.classList.remove("off");
            HomeNav.classList.remove("off");
            Top.classList.remove("Steping");
        }
    });
    Bottom.addEventListener("click", () => {
        if (Home.className !== "Home Home-small off" && HomeNav.className !== "Menu-list off") {
            Home.classList.add("off");
            HomeNav.classList.add("off");
            CV.classList.remove("off");
            CVNav.classList.remove("off");
            Top.classList.add("Steping");
        } else if (CV.className !== "CV CV-small off" && CVNav.className !== "Menu-list off") {
            CV.classList.add("off");
            CVNav.classList.add("off");
            Projects.classList.remove("off");
            ProjectsNav.classList.remove("off");
        } else if (Projects.className !== "Projects Projects-small off" && ProjectsNav.className !== "Menu-list off") {
            Projects.classList.add("off");
            ProjectsNav.classList.add("off");
            Contacts.classList.remove("off");
            ContactsNav.classList.remove("off");
            Bottom.classList.remove("Steping");
        }
    });
    BackBtn.addEventListener("click", () => {
        Top.classList.remove("off");
        Bottom.classList.remove("off");
        BackBtn.classList.add("off");
        ArtMain.classList.add("ArtMain");
        if (Home.className === "Home") {
        HomeNav.classList.remove("off");
        Home.classList.add("Home-small");
        HomeContent.classList.add("off");
        } else if (CV.className === "CV") {
        CVNav.classList.remove("off");
        CV.classList.add("CV-small");
        CVContent.classList.add("off");
        } else if (Projects.className === "Projects") {
        ProjectsNav.classList.remove("off");
        Projects.classList.add("Projects-small");
        ProjectsContent.classList.add("off");
        } else if (Contacts.className === "Contacts") {
        ContactsNav.classList.remove("off");
        Contacts.classList.add("Contacts-small");
        ContactsContent.classList.add("off");
        }
    });
    HomeNav.addEventListener("click", () => {
        Top.classList.add("off");
        Bottom.classList.add("off");
        BackBtn.classList.remove("off");
        HomeNav.classList.add("off");
        ArtMain.classList.remove("ArtMain");
        Home.classList.remove("Home-small");
        HomeContent.classList.remove("off");
    });
    CVNav.addEventListener("click", () => {
        Top.classList.add("off");
        Bottom.classList.add("off");
        BackBtn.classList.remove("off");
        CVNav.classList.add("off");
        ArtMain.classList.remove("ArtMain");
        CV.classList.remove("CV-small");
        CVContent.classList.remove("off");
    });
    ProjectsNav.addEventListener("click", () => {
        Top.classList.add("off");
        Bottom.classList.add("off");
        BackBtn.classList.remove("off");
        ProjectsNav.classList.add("off");
        ArtMain.classList.remove("ArtMain");
        Projects.classList.remove("Projects-small");
        ProjectsContent.classList.remove("off");
    });
    ContactsNav.addEventListener("click", () => {
        Top.classList.add("off");
        Bottom.classList.add("off");
        BackBtn.classList.remove("off");
        ContactsNav.classList.add("off");
        ArtMain.classList.remove("ArtMain");
        Contacts.classList.remove("Contacts-small");
        ContactsContent.classList.remove("off");
    });
};
/*--------------GAME HOME----------*/
const Table = document.querySelectorAll(".Table");
const Cards = document.querySelectorAll(".Cards");
const CardsStart = document.querySelectorAll(".CardsStart");
const CardsEnd = document.querySelectorAll(".CardsEnd");
const Play = document.querySelectorAll(".Play");
const TextPlay = document.querySelectorAll(".TextPlay");

const Game = () => {
    for (let x = 0; x < TextPlay.length; x++) {
        TextPlay[0].addEventListener("click", () => {
            Play[0].classList.add("off");
            CardsStart[0].classList.remove("off");
            CardsEnd[0].classList.remove("off");
            Cards[0].classList.remove("off");
            Cards[1].classList.remove("off");
            Cards[2].classList.remove("off");
            Cards[3].classList.remove("off");
            Cards[4].classList.remove("off");
            Cards[5].classList.remove("off");
            Cards[6].classList.remove("off");
            Cards[7].classList.remove("off");
            Cards[8].classList.remove("off");
            Cards[9].classList.remove("off");
            Cards[10].classList.remove("off");
            Cards[11].classList.remove("off");
            Cards[12].classList.remove("off");
            Cards[13].classList.remove("off");
            Cards[14].classList.remove("off");
            Cards[15].classList.remove("off");
            Cards[16].classList.remove("off");
            Cards[17].classList.remove("off");
            Cards[18].classList.remove("off");
            Cards[19].classList.remove("off");
            Cards[20].classList.remove("off");
            Cards[21].classList.remove("off");
            Cards[22].classList.remove("off");
            Cards[23].classList.remove("off");
            Cards[24].classList.remove("off");
            Cards[25].classList.remove("off");
            Cards[26].classList.remove("off");
            Cards[27].classList.remove("off");
        })
        TextPlay[1].addEventListener("click", () => {
            TextPlay[0].classList.remove("off");
            TextPlay[1].classList.add("off");
            Cards[0].classList.remove("grey");
            Cards[1].classList.remove("grey");
            Cards[2].classList.remove("grey");
            Cards[3].classList.remove("grey");
            Cards[4].classList.remove("grey");
            Cards[5].classList.remove("grey");
            Cards[6].classList.remove("grey");
            Cards[7].classList.remove("grey");
            Cards[8].classList.remove("grey");
            Cards[9].classList.remove("grey");
            Cards[10].classList.remove("grey");
            Cards[11].classList.remove("grey");
            Cards[12].classList.remove("grey");
            Cards[13].classList.remove("grey");
            Cards[14].classList.remove("grey");
            Cards[15].classList.remove("grey");
            Cards[16].classList.remove("grey");
            Cards[17].classList.remove("grey");
            Cards[18].classList.remove("grey");
            Cards[19].classList.remove("grey");
            Cards[20].classList.remove("grey");
            Cards[21].classList.remove("grey");
            Cards[22].classList.remove("grey");
            Cards[23].classList.remove("grey");
            Cards[24].classList.remove("grey");
            Cards[25].classList.remove("grey");
            Cards[26].classList.remove("grey");
            Cards[27].classList.remove("grey");
            CardsStart[0].classList.add("Cards1");
            CardsEnd[0].classList.add("Cards3");
            Cards[0].classList.add("Cards1");
            Cards[1].classList.add("Cards1");
            Cards[2].classList.add("Cards2");
            Cards[3].classList.add("Cards2");
            Cards[4].classList.add("Cards1");
            Cards[5].classList.add("Cards1");
            Cards[6].classList.add("Cards2");
            Cards[7].classList.add("Cards2");
            Cards[8].classList.add("Cards2");
            Cards[9].classList.add("Cards1");
            Cards[10].classList.add("Cards2");
            Cards[11].classList.add("Cards2");
            Cards[12].classList.add("Cards2");
            Cards[13].classList.add("Cards3");
            Cards[14].classList.add("Cards2");
            Cards[15].classList.add("Cards2");
            Cards[16].classList.add("Cards2");
            Cards[17].classList.add("Cards3");
            Cards[18].classList.add("Cards3");
            Cards[19].classList.add("Cards2");
            Cards[20].classList.add("Cards2");
            Cards[21].classList.add("Cards3");
            Cards[22].classList.add("Cards3");
            Cards[23].classList.add("Cards3");
            Cards[24].classList.add("Cards2");
            Cards[25].classList.add("Cards3");
            Cards[26].classList.add("Cards3");
            Cards[27].classList.add("Cards3");
        })
    }
    for (let y = 0; y < CardsStart.length; y++) {
        CardsStart[y].addEventListener("click", () => {
            // remove class CardsX and color grey
            CardsStart[0].classList.remove("Cards1");
            CardsEnd[0].classList.remove("Cards3");
            Cards[0].classList.remove("Cards1");
            Cards[1].classList.remove("Cards1");
            Cards[2].classList.remove("Cards2");
            Cards[3].classList.remove("Cards2");
            Cards[4].classList.remove("Cards1");
            Cards[5].classList.remove("Cards1");
            Cards[6].classList.remove("Cards2");
            Cards[7].classList.remove("Cards2");
            Cards[8].classList.remove("Cards2");
            Cards[9].classList.remove("Cards1");
            Cards[10].classList.remove("Cards2");
            Cards[11].classList.remove("Cards2");
            Cards[12].classList.remove("Cards2");
            Cards[13].classList.remove("Cards3");
            Cards[14].classList.remove("Cards2");
            Cards[15].classList.remove("Cards2");
            Cards[16].classList.remove("Cards2");
            Cards[17].classList.remove("Cards3");
            Cards[18].classList.remove("Cards3");
            Cards[19].classList.remove("Cards2");
            Cards[20].classList.remove("Cards2");
            Cards[21].classList.remove("Cards3");
            Cards[22].classList.remove("Cards3");
            Cards[23].classList.remove("Cards3");
            Cards[24].classList.remove("Cards2");
            Cards[25].classList.remove("Cards3");
            Cards[26].classList.remove("Cards3");
            Cards[27].classList.remove("Cards3");
            // add color
            Cards[0].classList.add("green");
            Cards[1].classList.add("red");
            Cards[2].classList.add("blue");
            Cards[3].classList.add("red");
            Cards[4].classList.add("blue");
            Cards[5].classList.add("blue");
            Cards[6].classList.add("red");
            Cards[7].classList.add("green");
            Cards[8].classList.add("green");
            Cards[9].classList.add("green");
            Cards[10].classList.add("red");
            Cards[11].classList.add("blue");
            Cards[12].classList.add("red");
            Cards[13].classList.add("blue");
            Cards[14].classList.add("blue");
            Cards[15].classList.add("blue");
            Cards[16].classList.add("blue");
            Cards[17].classList.add("green");
            Cards[18].classList.add("green");
            Cards[19].classList.add("red");
            Cards[20].classList.add("green");
            Cards[21].classList.add("red");
            Cards[22].classList.add("blue");
            Cards[23].classList.add("red");
            Cards[24].classList.add("green");
            Cards[25].classList.add("blue");
            Cards[26].classList.add("red");
            Cards[27].classList.add("green");
        });
        for (let i = 0; i < Cards.length; i++) {
            Cards[i].addEventListener("click", () => {
                if (Cards[i] === Cards[0] && Cards[0].className === "Cards green") {
                    Cards[0].classList.remove("green");
                    Cards[0].classList.add("grey");
                } else if (Cards[i] === Cards[5] && Cards[0].className === "Cards grey") {
                    Cards[5].classList.remove("blue");
                    Cards[5].classList.add("grey");
                } else if (Cards[i] === Cards[6] && Cards[5].className === "Cards grey" && Cards[10].className === "Cards red") {
                    Cards[6].classList.remove("red");
                    Cards[6].classList.add("grey");
                } else if (Cards[i] === Cards[7] && Cards[6].className === "Cards grey") {
                    Cards[7].classList.remove("green");
                    Cards[7].classList.add("grey");
                } else if (Cards[i] === Cards[2] && Cards[7].className === "Cards grey") {
                    Cards[2].classList.remove("blue");
                    Cards[2].classList.add("grey");
                } else if (Cards[i] === Cards[3] && Cards[2].className === "Cards grey") {
                    Cards[3].classList.remove("red");
                    Cards[3].classList.add("grey");
                } else if (Cards[i] === Cards[8] && Cards[3].className === "Cards grey") {
                    Cards[8].classList.remove("green");
                    Cards[8].classList.add("grey");
                } else if (Cards[i] === Cards[13] && Cards[8].className === "Cards grey") {
                    Cards[13].classList.remove("blue");
                    Cards[13].classList.add("grey");
                } else if (Cards[i] === Cards[12] && Cards[13].className === "Cards grey") {
                    Cards[12].classList.remove("red");
                    Cards[12].classList.add("grey");
                } else if (Cards[i] === Cards[17] && Cards[12].className === "Cards grey") {
                    Cards[17].classList.remove("green");
                    Cards[17].classList.add("grey");
                } else if (Cards[i] === Cards[16] && Cards[17].className === "Cards grey" && Cards[22].className === "Cards blue") {
                    Cards[16].classList.remove("blue");
                    Cards[16].classList.add("grey");
                } else if (Cards[i] === Cards[21] && Cards[16].className === "Cards grey") {
                    Cards[21].classList.remove("red");
                    Cards[21].classList.add("grey");
                } else if (Cards[i] === Cards[20] && (Cards[21].className === "Cards grey" || Cards[19].className === "Cards grey") && Cards[24].className === "Cards green") {
                    Cards[20].classList.remove("green");
                    Cards[20].classList.add("grey");
                } else if (Cards[i] === Cards[15] && Cards[20].className === "Cards grey" && Cards[25].className === "Cards blue" && Cards[19].className === "Cards red") {
                    Cards[15].classList.remove("blue");
                    Cards[15].classList.add("grey");
                } else if (Cards[i] === Cards[10] && (Cards[15].className === "Cards grey" || (Cards[5].className === "Cards grey" && Cards[6].className === "Cards red"))) {
                    Cards[10].classList.remove("red");
                    Cards[10].classList.add("grey");
                } else if (Cards[i] === Cards[9] && Cards[10].className === "Cards grey") {
                    Cards[9].classList.remove("green");
                    Cards[9].classList.add("grey");
                } else if (Cards[i] === Cards[14] && Cards[9].className === "Cards grey") {
                    Cards[14].classList.remove("blue");
                    Cards[14].classList.add("grey");
                } else if (Cards[i] === Cards[19] && Cards[14].className === "Cards grey") {
                    Cards[19].classList.remove("red");
                    Cards[19].classList.add("grey");
                } else if (Cards[i] === Cards[24] && Cards[19].className === "Cards grey" && (Cards[20].className === "Cards green" || (Cards[20].className === "Cards grey" && Cards[6].className === "Cards grey"))) {
                    Cards[24].classList.remove("green");
                    Cards[24].classList.add("grey");
                } else if (Cards[i] === Cards[25] && (Cards[24].className === "Cards grey" || (Cards[20].className === "Cards grey" && Cards[15].className === "Cards blue"))) {
                    Cards[25].classList.remove("blue");
                    Cards[25].classList.add("grey");
                } else if (Cards[i] === Cards[26] && Cards[25].className === "Cards grey") {
                    Cards[26].classList.remove("red");
                    Cards[26].classList.add("grey");
                } else if (Cards[i] === Cards[27] && Cards[26].className === "Cards grey") {
                    Cards[27].classList.remove("green");
                    Cards[27].classList.add("grey");
                } else if (Cards[i] === Cards[22] && (Cards[27].className === "Cards grey" || Cards[17].className === "Cards grey" && Cards[16].className === "Cards blue")) {
                    Cards[22].classList.remove("blue");
                    Cards[22].classList.add("grey");
                } else if (Cards[i] === Cards[23] && Cards[22].className === "Cards grey") {
                    Cards[23].classList.remove("red");
                    Cards[23].classList.add("grey");
                }
            })
        }
        for (let z = 0; z < CardsEnd.length; z++) {
            CardsEnd[z].addEventListener("click", () => {
                if (Cards[23].className === "Cards grey") {
                    CardsStart[0].classList.add("off");
                    CardsEnd[0].classList.add("off");
                    Cards[0].classList.add("off");
                    Cards[1].classList.add("off");
                    Cards[2].classList.add("off");
                    Cards[3].classList.add("off");
                    Cards[4].classList.add("off");
                    Cards[5].classList.add("off");
                    Cards[6].classList.add("off");
                    Cards[7].classList.add("off");
                    Cards[8].classList.add("off");
                    Cards[9].classList.add("off");
                    Cards[10].classList.add("off");
                    Cards[11].classList.add("off");
                    Cards[12].classList.add("off");
                    Cards[13].classList.add("off");
                    Cards[14].classList.add("off");
                    Cards[15].classList.add("off");
                    Cards[16].classList.add("off");
                    Cards[17].classList.add("off");
                    Cards[18].classList.add("off");
                    Cards[19].classList.add("off");
                    Cards[20].classList.add("off");
                    Cards[21].classList.add("off");
                    Cards[22].classList.add("off");
                    Cards[23].classList.add("off");
                    Cards[24].classList.add("off");
                    Cards[25].classList.add("off");
                    Cards[26].classList.add("off");
                    Cards[27].classList.add("off");
                    Play[0].classList.remove("off");
                    TextPlay[0].classList.add("off");
                    TextPlay[1].classList.remove("off");
                }
            })
        }
    }
};
/*------------Carousel Changing------------*/
const Previous = document.querySelectorAll(".Previous");
const Next = document.querySelectorAll(".Next");
const block = document.querySelectorAll(".block");

let blockfinish = 7;
let blockstart = 0;

const rotateCarousel = () => {
    for (let i = 0; i < Previous.length; i++) {
        Previous[i].addEventListener("click", () => {
            blockstart--;
            let angle = blockstart / blockfinish * -360;
            block[0].style.transform = 'rotateY(' + angle + 'deg) translateZ(14em)';
            block[1].style.transform = 'rotateY(' + (angle + 51.42) + 'deg) translateZ(14em)';
            block[2].style.transform = 'rotateY(' + (angle + 102.84) + 'deg) translateZ(14em)';
            block[3].style.transform = 'rotateY(' + (angle + 154.26) + 'deg) translateZ(14em)';
            block[4].style.transform = 'rotateY(' + (angle + 205.68) + 'deg) translateZ(14em)';
            block[5].style.transform = 'rotateY(' + (angle + 257.1) + 'deg) translateZ(14em)';
            block[6].style.transform = 'rotateY(' + (angle + 308.52) + 'deg) translateZ(14em)';
        })
    }
    for (let a = 0; a < Next.length; a++) {
        Next[a].addEventListener("click", () => {
            blockstart++;
            let angle = blockstart / blockfinish * -360;
            block[0].style.transform = 'rotateY(' + angle + 'deg) translateZ(14em)';
            block[1].style.transform = 'rotateY(' + (angle + 51.42) + 'deg) translateZ(14em)';
            block[2].style.transform = 'rotateY(' + (angle + 102.84) + 'deg) translateZ(14em)';
            block[3].style.transform = 'rotateY(' + (angle + 154.26) + 'deg) translateZ(14em)';
            block[4].style.transform = 'rotateY(' + (angle + 205.68) + 'deg) translateZ(14em)';
            block[5].style.transform = 'rotateY(' + (angle + 257.1) + 'deg) translateZ(14em)';
            block[6].style.transform = 'rotateY(' + (angle + 308.52) + 'deg) translateZ(14em)';
        })
    }
};
/*------------ProjectBtn Changing------*/

const Carousel = document.querySelectorAll(".Carousel");
const Shelf = document.querySelectorAll(".Shelf");
const Checkpoint = document.querySelectorAll(".Checkpoint");

const changeProject = () => {
    for (let i = 0; i < Checkpoint.length; i++) {
        Checkpoint[i].addEventListener("click", () => {
            switch (Checkpoint[i]) {
                case Checkpoint[0]:
                    Carousel[0].classList.remove("off");
                    Shelf[0].classList.add("off");
                    Checkpoint[0].classList.add("CheckpointActiv");
                    Checkpoint[1].classList.remove("CheckpointActiv");
                    break;
                case Checkpoint[1]:
                    Carousel[0].classList.add("off");
                    Shelf[0].classList.remove("off");
                    Checkpoint[0].classList.remove("CheckpointActiv");
                    Checkpoint[1].classList.add("CheckpointActiv");
                    break;
                default:
                    break;
            }

        })
    }
};
////////Photo//////
const Photo = () => {
    const CVHome1 = document.getElementById("CV-Home1");
    const CVHome2 = document.getElementById("CV-Home2");
    const CVHome2A = document.getElementById("CV-Home2A");
    const CVSchool1 = document.getElementById("CV-School1");
    const CVSchool2 = document.getElementById("CV-School2");
    const CVSchool2A = document.getElementById("CV-School2A");
    const CVWork1 = document.getElementById("CV-Work1");
    const CVWork2 = document.getElementById("CV-Work2");
    const CVWork2A = document.getElementById("CV-Work2A");
    const CVWork3 = document.getElementById("CV-Work3");
    const CVWork3A = document.getElementById("CV-Work3A");

    CVHome1.addEventListener("click", () => {
        CVHome2.classList.add("off");
        CVHome2A.classList.remove("off");
    });
    CVHome2A.addEventListener("click", () => {
        CVHome2.classList.remove("off");
        CVHome2A.classList.add("off");
    });
    CVSchool1.addEventListener("click", () => {
        CVSchool2.classList.add("off");
        CVSchool2A.classList.remove("off");
    });
    CVSchool2A.addEventListener("click", () => {
        CVSchool2.classList.remove("off");
        CVSchool2A.classList.add("off");
    });
    CVWork1.addEventListener("click", () => {
        CVWork2.classList.add("off");
        CVWork3.classList.add("off");
        CVWork2A.classList.remove("off");
        CVWork3A.classList.remove("off");
    });
    CVWork2.addEventListener("click", () => {
        CVWork3.classList.add("off");
        CVWork3A.classList.remove("off");
    });
    CVWork2A.addEventListener("click", () => {
        CVWork3.classList.add("off");
        CVWork3A.classList.remove("off");
        CVWork2.classList.remove("off");
    });
    CVWork3A.addEventListener("click", () => {
        CVWork2.classList.add("off");
        CVWork2A.classList.remove("off");
        CVWork3.classList.remove("off");
    });
};

let loop = setInterval(Terminal, 100);
Skip();
Menu();
Game();
rotateCarousel();
changeProject();
Photo();

                // Road 1
// Right -> Bottom -> Right -> Right -> Top -> Right -> Bottom -> Bottom -> Left -> Bottom -> Left -> Bottom -> Left -> Top -> Top -> Left -> Bottom -> Bottom -> Bottom -> Right -> Right -> Right -> Top -> Right -> |END|

                // Road 2
// Right -> Bottom -> Right -> Right -> Top -> Right -> Bottom -> Bottom -> Left -> Bottom -> Left -> Bottom -> Left -> Right -> Right -> Top -> Right -> |END|

                // Road 3
// Right -> Bottom -> Right -> Right -> Top -> Right -> Bottom -> Bottom -> Left -> Bottom -> Bottom -> Right -> |END|

                // Road 4
// Right -> Bottom -> Bottom -> Left -> Bottom -> Bottom -> Bottom -> Right -> Right -> Right -> Top -> Right -> |END|

                // Road 5
// Right -> Bottom -> Bottom -> Left -> Bottom -> Bottom -> Right -> Bottom -> Right -> Right -> Top -> Right -> |END|