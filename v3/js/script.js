///////////HEADER/////////
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
                SkipBtn.classList.add("off");
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
/////////////////      GAME HOME       /////////////////////
const Intro = document.querySelectorAll(".Intro");
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
            }
            )
        };
    }
}
///////////////////       CV            //////////////////
const CVIntro = document.querySelectorAll(".CVIntro");
const CVIntroDot = document.querySelectorAll("#CVIntro");
const CVHome = document.querySelectorAll(".CVHome");
const CVHomeDot = document.querySelectorAll("#CVHome");
const CVSchool = document.querySelectorAll(".CVSchool");
const CVSchoolDot = document.querySelectorAll("#CVSchool");
const CVWork = document.querySelectorAll(".CVWork");
const CVWorkDot = document.querySelectorAll("#CVWork");
const Up = document.querySelectorAll(".Up");
const Bottom = document.querySelectorAll(".Bottom");
const CVHomeImg = document.querySelectorAll(".CVHomeImg");
const CVSchoolImg = document.querySelectorAll(".CVSchoolImg");
const CVWorkImg = document.querySelectorAll(".CVWorkImg");
const dotH1 = document.querySelectorAll("#H1");
const dotH2 = document.querySelectorAll("#H2");
const dotS1 = document.querySelectorAll("#S1");
const dotS2 = document.querySelectorAll("#S2");
const dotW1 = document.querySelectorAll("#W1");
const dotW2 = document.querySelectorAll("#W2");
const dotW3 = document.querySelectorAll("#W3");
const changeDot = () => {
    // Change category CV
    for (let up = 0; up < Up.length; up++) {
        Up[up].addEventListener("click", () => {
            if (CVHomeDot[up].className === "dotActiv") {
                CVHome[up].classList.add("off");
                CVHomeDot[up].classList.remove("dotActiv");
                CVHomeDot[up].classList.add("dot");
                CVIntro[up].classList.remove("off");
                CVIntroDot[up].classList.add("dotActiv");
                CVIntroDot[up].classList.remove("dot");
            } else if (CVSchoolDot[up].className === "dotActiv") {
                CVSchool[up].classList.add("off");
                CVSchoolDot[up].classList.remove("dotActiv");
                CVSchoolDot[up].classList.add("dot");
                CVHome[up].classList.remove("off");
                CVHomeDot[up].classList.add("dotActiv");
                CVHomeDot[up].classList.remove("dot");
            } else if (CVWorkDot[up].className === "dotActiv") {
                CVWork[up].classList.add("off");
                CVWorkDot[up].classList.remove("dotActiv");
                CVWorkDot[up].classList.add("dot");
                CVSchool[up].classList.remove("off");
                CVSchoolDot[up].classList.add("dotActiv");
                CVSchoolDot[up].classList.remove("dot");
            } else { };
        });
    }
    for (let bt = 0; bt < Bottom.length; bt++) {
        Bottom[bt].addEventListener("click", () => {
            if (CVIntroDot[bt].className === "dotActiv") {
                CVIntro[bt].classList.add("off");
                CVIntroDot[bt].classList.remove("dotActiv");
                CVIntroDot[bt].classList.add("dot");
                CVHome[bt].classList.remove("off");
                CVHomeDot[bt].classList.add("dotActiv");
                CVHomeDot[bt].classList.remove("dot");
            } else if (CVHomeDot[bt].className === "dotActiv") {
                CVHome[bt].classList.add("off");
                CVHomeDot[bt].classList.remove("dotActiv");
                CVHomeDot[bt].classList.add("dot");
                CVSchool[bt].classList.remove("off");
                CVSchoolDot[bt].classList.add("dotActiv");
                CVSchoolDot[bt].classList.remove("dot");
            } else if (CVSchoolDot[bt].className === "dotActiv") {
                CVSchool[bt].classList.add("off");
                CVSchoolDot[bt].classList.remove("dotActiv");
                CVSchoolDot[bt].classList.add("dot");
                CVWork[bt].classList.remove("off");
                CVWorkDot[bt].classList.add("dotActiv");
                CVWorkDot[bt].classList.remove("dot");
            } else { };
        });
    }
    // change photo in CV Home
    for (let h1 = 0; h1 < dotH1.length; h1++) {
        dotH1[h1].addEventListener("click", () => {
            dotH1[h1].classList.remove("MiniDot");
            dotH1[h1].classList.add("MiniDotActiv");
            dotH2[h1].classList.add("MiniDot");
            dotH2[h1].classList.remove("MiniDotActiv");
            CVHomeImg[h1].classList.remove("CVHomeImg2");
            CVHomeImg[h1].classList.add("CVHomeImg1");
        });
    }
    for (let h2 = 0; h2 < dotH2.length; h2++) {
        dotH2[h2].addEventListener("click", () => {
            dotH1[h2].classList.add("MiniDot");
            dotH1[h2].classList.remove("MiniDotActiv");
            dotH2[h2].classList.remove("MiniDot");
            dotH2[h2].classList.add("MiniDotActiv");
            CVHomeImg[h2].classList.add("CVHomeImg2");
            CVHomeImg[h2].classList.remove("CVHomeImg1");
        });
    }
    // change photo in CV School
    for (let s1 = 0; s1 < dotS1.length; s1++) {
        dotS1[s1].addEventListener("click", () => {
            dotS1[s1].classList.remove("MiniDot");
            dotS1[s1].classList.add("MiniDotActiv");
            dotS2[s1].classList.add("MiniDot");
            dotS2[s1].classList.remove("MiniDotActiv");
            CVSchoolImg[s1].classList.remove("CVSchoolImg2");
            CVSchoolImg[s1].classList.add("CVSchoolImg1");
        });
    }
    for (let s2 = 0; s2 < dotS2.length; s2++) {
        dotS2[s2].addEventListener("click", () => {
            dotS1[s2].classList.add("MiniDot");
            dotS1[s2].classList.remove("MiniDotActiv");
            dotS2[s2].classList.remove("MiniDot");
            dotS2[s2].classList.add("MiniDotActiv");
            CVSchoolImg[s2].classList.add("CVSchoolImg2");
            CVSchoolImg[s2].classList.remove("CVSchoolImg1");
        });
    }
    // change photo in CV Work
    for (let w1 = 0; w1 < dotW1.length; w1++) {
        dotW1[w1].addEventListener("click", () => {
            dotW1[w1].classList.remove("MiniDot");
            dotW1[w1].classList.add("MiniDotActiv");
            dotW2[w1].classList.add("MiniDot");
            dotW2[w1].classList.remove("MiniDotActiv");
            dotW3[w1].classList.add("MiniDot");
            dotW3[w1].classList.remove("MiniDotActiv");
            CVWorkImg[w1].classList.remove("CVWorkImg3");
            CVWorkImg[w1].classList.remove("CVWorkImg2");
            CVWorkImg[w1].classList.add("CVWorkImg1");
        });
    }
    for (let w2 = 0; w2 < dotW2.length; w2++) {
        dotW2[w2].addEventListener("click", () => {
            dotW2[w2].classList.remove("MiniDot");
            dotW2[w2].classList.add("MiniDotActiv");
            dotW1[w2].classList.add("MiniDot");
            dotW1[w2].classList.remove("MiniDotActiv");
            dotW3[w2].classList.add("MiniDot");
            dotW3[w2].classList.remove("MiniDotActiv");
            CVWorkImg[w2].classList.remove("CVWorkImg1");
            CVWorkImg[w2].classList.remove("CVWorkImg3");
            CVWorkImg[w2].classList.add("CVWorkImg2");
        });
    }
    for (let w3 = 0; w3 < dotW3.length; w3++) {
        dotW3[w3].addEventListener("click", () => {
            dotW3[w3].classList.remove("MiniDot");
            dotW3[w3].classList.add("MiniDotActiv");
            dotW1[w3].classList.add("MiniDot");
            dotW1[w3].classList.remove("MiniDotActiv");
            dotW2[w3].classList.add("MiniDot");
            dotW2[w3].classList.remove("MiniDotActiv");
            CVWorkImg[w3].classList.remove("CVWorkImg1");
            CVWorkImg[w3].classList.remove("CVWorkImg2");
            CVWorkImg[w3].classList.add("CVWorkImg3");
        });
    }
    // automatic change
    setInterval(() => {
        if (dotH1[0].className !== "MiniDotActiv") {
            dotH1[0].classList.remove("MiniDot");
            dotH1[0].classList.add("MiniDotActiv");
            dotH2[0].classList.add("MiniDot");
            dotH2[0].classList.remove("MiniDotActiv");
            CVHomeImg[0].classList.remove("CVHomeImg2");
            CVHomeImg[0].classList.add("CVHomeImg1");
        } else if (dotH2[0].className !== "MiniDotActiv") {
            dotH1[0].classList.add("MiniDot");
            dotH1[0].classList.remove("MiniDotActiv");
            dotH2[0].classList.remove("MiniDot");
            dotH2[0].classList.add("MiniDotActiv");
            CVHomeImg[0].classList.add("CVHomeImg2");
            CVHomeImg[0].classList.remove("CVHomeImg1");
        }
    }, 5000);
    setInterval(() => {
        if (dotS1[0].className !== "MiniDotActiv") {
            dotS1[0].classList.remove("MiniDot");
            dotS1[0].classList.add("MiniDotActiv");
            dotS2[0].classList.add("MiniDot");
            dotS2[0].classList.remove("MiniDotActiv");
            CVSchoolImg[0].classList.remove("CVSchoolImg2");
            CVSchoolImg[0].classList.add("CVSchoolImg1");
        } else if (dotS2[0].className !== "MiniDotActiv") {
            dotS1[0].classList.add("MiniDot");
            dotS1[0].classList.remove("MiniDotActiv");
            dotS2[0].classList.remove("MiniDot");
            dotS2[0].classList.add("MiniDotActiv");
            CVSchoolImg[0].classList.add("CVSchoolImg2");
            CVSchoolImg[0].classList.remove("CVSchoolImg1");
        }
    }, 5000);
    setInterval(() => {
        if (dotW3[0].className === "MiniDotActiv") {
            dotW1[0].classList.remove("MiniDot");
            dotW1[0].classList.add("MiniDotActiv");
            dotW2[0].classList.add("MiniDot");
            dotW2[0].classList.remove("MiniDotActiv");
            dotW3[0].classList.add("MiniDot");
            dotW3[0].classList.remove("MiniDotActiv");
            CVWorkImg[0].classList.remove("CVWorkImg3");
            CVWorkImg[0].classList.remove("CVWorkImg2");
            CVWorkImg[0].classList.add("CVWorkImg1");
        } else if (dotW1[0].className === "MiniDotActiv") {
            dotW2[0].classList.remove("MiniDot");
            dotW2[0].classList.add("MiniDotActiv");
            dotW1[0].classList.add("MiniDot");
            dotW1[0].classList.remove("MiniDotActiv");
            dotW3[0].classList.add("MiniDot");
            dotW3[0].classList.remove("MiniDotActiv");
            CVWorkImg[0].classList.remove("CVWorkImg1");
            CVWorkImg[0].classList.remove("CVWorkImg3");
            CVWorkImg[0].classList.add("CVWorkImg2");
        } else if (dotW2[0].className === "MiniDotActiv") {
            dotW3[0].classList.remove("MiniDot");
            dotW3[0].classList.add("MiniDotActiv");
            dotW1[0].classList.add("MiniDot");
            dotW1[0].classList.remove("MiniDotActiv");
            dotW2[0].classList.add("MiniDot");
            dotW2[0].classList.remove("MiniDotActiv");
            CVWorkImg[0].classList.remove("CVWorkImg1");
            CVWorkImg[0].classList.remove("CVWorkImg2");
            CVWorkImg[0].classList.add("CVWorkImg3");
        }
    }, 5000);
};
/////////////////      Carousel Changing       /////////////////////
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
//////////////////////       ProjectBtn Changing        ///////////////////////

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
}

let loop = setInterval(Terminal, 100);
Skip();
Game();
changeDot();
rotateCarousel();
changeProject();

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