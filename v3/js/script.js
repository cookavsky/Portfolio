const headerText = ["Hi, my name is Marcin Panda Kukawski", "Junior Front-end Developer.", "Welcome to my professional life", "Enjoy! This journey!"];

let counter = 0;

const Terminal = () => {
        counter++;
    let counterOneEND = headerText[0].length;
    let counterTwoEND = headerText[1].length;
    let counterThreeEND = headerText[2].length;
    let counterFourEND = headerText[3].length;
    console.log(counter);
};

Terminal();
var int = setInterval(Terminal, 1000);