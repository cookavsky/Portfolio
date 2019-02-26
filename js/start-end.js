let Cards = document.querySelectorAll(".Cards");
let CardsStart = document.querySelectorAll(".CardsStart");
let CardsEnd = document.querySelectorAll(".CardsEnd");
let Play = document.querySelectorAll(".Play");
let TextPlay = document.querySelectorAll(".TextPlay");

const Game = function () {
    for (let x = 0; x < TextPlay.length; x++) {
        TextPlay[0].addEventListener("click", function() {
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
        TextPlay[1].addEventListener("click", function() {
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
        CardsStart[y].addEventListener("click", function () {
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
            Cards[i].addEventListener("click", function () {
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
            CardsEnd[z].addEventListener("click", function () {
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
        )};
    }
}

Game();

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

