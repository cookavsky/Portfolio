let Cards = document.querySelectorAll(".Cards");
let CardsStart = document.querySelectorAll(".CardsStart");
let CardsEnd = document.querySelectorAll(".CardsEnd");

console.log(Cards);

const Game = function () {
    for (let y = 0; y < CardsStart.length; y++) {
        CardsStart[y].addEventListener("click", function () {
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
                console.log(i, Cards[i].className)
                // Road 1
                if (i === 0 && Cards[i].className === "Cards green") {
                    Cards[0].classList.remove("green");
                    Cards[0].classList.add("grey");
                // Road 1
                } else if (i === 5 && Cards[0].className === "Cards grey") {
                    Cards[5].classList.remove("blue");
                    Cards[5].classList.add("grey");
                // Road 1
                } else if (i === 6 && Cards[0].className === "Cards grey" && Cards[5].className === "Cards grey" && Cards[10].className === "Cards red") {
                    Cards[6].classList.remove("red");
                    Cards[6].classList.add("grey");
                // Road 1
                } else if (i === 7 && Cards[6].className === "Cards grey") {
                    Cards[7].classList.remove("green");
                    Cards[7].classList.add("grey");
                // Road 1
                } else if (i === 2 && Cards[7].className === "Cards grey") {
                    Cards[2].classList.remove("blue");
                    Cards[2].classList.add("grey");
                // Road 1
                } else if (i === 3 && Cards[2].className === "Cards grey") {
                    Cards[3].classList.remove("red");
                    Cards[3].classList.add("grey");
                // Road 1
                } else if (i === 8 && Cards[3].className === "Cards grey") {
                    Cards[8].classList.remove("green");
                    Cards[8].classList.add("grey");
                // Road 1
                } else if (i === 13 && Cards[8].className === "Cards grey") {
                    Cards[13].classList.remove("blue");
                    Cards[13].classList.add("grey");
                // Road 1
                } else if (i === 12 && Cards[13].className === "Cards grey") {
                    Cards[12].classList.remove("red");
                    Cards[12].classList.add("grey");
                // Road 1
                } else if (i === 17 && Cards[12].className === "Cards grey") {
                    Cards[17].classList.remove("green");
                    Cards[17].classList.add("grey");
                // Road 1
                } else if (i === 16 && Cards[17].className === "Cards grey" && Cards[22].className === "Cards blue") {
                    Cards[16].classList.remove("blue");
                    Cards[16].classList.add("grey");
                // Road 1
                } else if (i === 21 && Cards[16].className === "Cards grey") {
                    Cards[21].classList.remove("red");
                    Cards[21].classList.add("grey");
                // Road 1
                } else if (i === 20 && Cards[16].className === "Cards grey") {
                    Cards[20].classList.remove("green");
                    Cards[20].classList.add("grey");
                // Road 1
                } else if (i === 15 && Cards[16].className === "Cards grey" && Cards[25].className === "Cards blue") {
                    Cards[15].classList.remove("blue");
                    Cards[15].classList.add("grey");
                // Road 1
                } else if (i === 10 && Cards[15].className === "Cards grey") {
                    Cards[10].classList.remove("red");
                    Cards[10].classList.add("grey");
                // Road 1
                } else if (i === 9 && Cards[10].className === "Cards grey") {
                    Cards[9].classList.remove("green");
                    Cards[9].classList.add("grey");
                // Road 1
                } else if (i === 14 && Cards[9].className === "Cards grey") {
                    Cards[14].classList.remove("blue");
                    Cards[14].classList.add("grey");
                // Road 1
                } else if (i === 19 && Cards[14].className === "Cards grey") {
                    Cards[19].classList.remove("red");
                    Cards[19].classList.add("grey");
                // Road 1
                } else if (i === 24 && Cards[19].className === "Cards grey") {
                    Cards[24].classList.remove("green");
                    Cards[24].classList.add("grey");
                // Road 1
                } else if (i === 25 && Cards[24].className === "Cards grey") {
                    Cards[25].classList.remove("blue");
                    Cards[25].classList.add("grey");
                // Road 1
                } else if (i === 26 && Cards[25].className === "Cards grey") {
                    Cards[26].classList.remove("red");
                    Cards[26].classList.add("grey");
                // Road 1
                } else if (i === 27 && Cards[26].className === "Cards grey") {
                    Cards[27].classList.remove("green");
                    Cards[27].classList.add("grey");
                // Road 1
                } else if (i === 22 && Cards[27].className === "Cards grey") {
                    Cards[22].classList.remove("blue");
                    Cards[22].classList.add("grey");
                // Road 1
                } else if (i === 23 && Cards[22].className === "Cards grey") {
                    Cards[23].classList.remove("red");
                    Cards[23].classList.add("grey");
                }
            })
        };
    }
}

Game()

                // Road 1
// Right -> Bottom -> Right -> Right -> Top -> Right -> Bottom -> Bottom -> Left -> Bottom -> Left -> Bottom -> Left -> Top -> Top -> Left -> Bottom -> Bottom -> Bottom -> Right -> Right -> Right -> Top -> Right -> |END|

                // Road 2
// Right -> Bottom -> Right -> Right -> Top -> Right -> Bottom -> Bottom -> Left -> Bottom -> Left -> Bottom -> Left

                // Road 3
// Right -> Bottom -> Right -> Right -> Top -> Right -> Bottom -> Bottom -> Left -> Bottom ->

                // Road 4
// Right -> Bottom -> Bottom -> Left -> Bottom -> Bottom -> Bottom -> Right -> Right -> Right -> Top -> Right -> |END|

                // Road 5
// Right -> Bottom -> Bottom -> Left -> Bottom -> Bottom -> Right -> Bottom -> Right -> Right -> Top -> Right -> |END|