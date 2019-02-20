const Table = ["one", "two", "three"];
let Cards = document.querySelectorAll(".Cards");

console.log(Cards);

const Game = function() {
    greenOne = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    // first RIGHT green throw
    if (greenOne === 1) {
        Cards[0].classList.add("one");
        blueOne = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        // first RIGHT blue throw
        if (blueOne === 1) {
            Cards[1].classList.add("two");
            redOne = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            // frist RIGHT red throw
            if (redOne === 1) {
                Cards[2].classList.add("three");
                greenTwo = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                // two RIGHT green throw
                if (greenTwo === 1) {
                    Cards[3].classList.add("one");
                    // two BOTTOM blue throw
                    Cards[8].classList.add("two");
                    redTwo = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                    // two BOTTOM red throw
                    if (redTwo === 1) {
                        Cards[13].classList.add("three");
                        greenThree = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                        // three BOTTOM green throw
                        if (greenThree === 1) {
                            Cards[18].classList.add("one");
                            blueThree = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                            // three LEFT blue throw
                            if (blueThree === 1) {
                                Cards[17].classList.add("two");
                                redThree = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                                // three TOP red throw
                                if (redThree === 1) {
                                    Cards[12].classList.add("three");
                                    greenFour = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                                    // Four TOP green throw
                                    if (greenFour === 1) {
                                        Cards[7].classList.add("one");
                                        // Four LEFT blue throw
                                        Cards[6].classList.add("two");
                                        redFour = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                                        // Four LEFT red throw
                                        if (redFour === 1) {
                                            Cards[5].classList.add("three");
                                            greenFive = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                                            // Five LEFT green throw
                                            if (greenFive === 1) {
                                                Cards[4].classList.add("one");
                                                // Five BOTTOM blue throw
                                                Cards[9].classList.add("two");
                                                redFive = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                                                // Five RIGHT red throw
                                                if (redFive === 1) {
                                                    Cards[10].classList.add("three");
                                                    greenSix = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                                                    // Six RIGHT green throw
                                                    if (greenSix === 1) {
                                                        Cards[11].classList.add("one");
                                                        // Six BOTTOM blue throw
                                                        Cards[16].classList.add("two");
                                                        redSix = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                                                        // Six BOTTOM red throw
                                                        if (redSix === 1) {
                                                            Cards[21].classList.add("three");
                                                            // Seven LEFT green throw
                                                            Cards[20].classList.add("one");
                                                            // Seven LEFT blue throw
                                                            Cards[19].classList.add("two");
                                                            // Seven BOTTOM blue throw
                                                            Cards[24].classList.add("three");
                                                            // Seven RIGHT green throw
                                                            Cards[25].classList.add("one");
                                                            // Seven RIGHT blue throw
                                                            Cards[26].classList.add("two");
                                                            // Seven RIGHT red throw
                                                            Cards[27].classList.add("three");
                                                        // Six LEFT red throw
                                                        } else if (redSix === 2) {

                                                        }
                                                    // Six BOTTOM green throw
                                                    } else if (greenSix === 2) {

                                                    }
                                                // Five BOTTOM red throw
                                                } else if (redFive === 2) {

                                                }
                                            // Five BOTTOM green throw
                                            } else if (greenFive === 2) {

                                            }
                                        // Four BOTTOM red throw
                                        } else if (redFour === 2) {

                                        }
                                    // Four LEFT green throw
                                    } else if (greenFour === 2) {
                                        Cards[11].classList.add("one");
                                    }
                                // three LEFT red throw
                                } else if (redThree === 2) {

                                }
                            // three BOTTOM blue throw
                            } else if (blueThree === 2) {

                            }
                        // three LEFT green throw
                        } else if (greenThree === 2) {
                            Cards[12].classList.add("one");
                        }
                    // two LEFT red throw
                    } else if (redTwo === 2) {

                    }
                // two BOTTOM green throw
                } else if (greenTwo === 2) {
                    Cards[7].classList.add("one");
                    // two blue throw
                    blueTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                    if (blueTwo === 1) {
                        Cards[8].classList.add("two");
                    // two red throw
                        redTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                    } else if (blueTwo === 2) {
                        Cards[12].classList.add("two");
                    // two red throw
                        redTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                    } else if (blueTwo === 3) {
                        Cards[6].classList.add("two");
                    // two red throw
                        redTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                    }
                }
            // first BOTTOM red throw
            } else if (redOne === 2) {
                Cards[6].classList.add("three");
            }
        // first BOTTOM blue throw
        } else if (blueOne === 2) {
            Cards[5].classList.add("two");

        }
    // first BOTTOM green throw
    } else if (greenOne === 2) {
        Cards[4].classList.add("one");
    }
}

const AAA = function () {
    for(let i = 0; i < Cards.length; i++) {
        Cards[i].addEventListener("click", function() {
            console.log(i)
            if (Cards[i].className === "Cards") {
                Cards[i].classList.add("one");
            } else if (Cards[i].className === "Cards one") {
                Cards[i].classList.remove("one");
                Cards[i].classList.add("two");
            } else if (Cards[i].className === "Cards two") {
                Cards[i].classList.remove("two");
                Cards[i].classList.add("three");
            } else if (Cards[i].className === "Cards three") {
                Cards[i].classList.remove("three");
                Cards[i].classList.add("one");
            }
        })
    }
}

AAA();