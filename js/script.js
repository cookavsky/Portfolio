const button = document.getElementsByClassName('Intro');
const VisualArt = document.querySelectorAll(".Portfolio");

let OpenDoor = function() {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            button[i].classList.add("Back");
            button[i].childNodes[1].classList.remove("Hide")
            button[i].classList.add("Back");
            button[i].childNodes[3].classList.remove("Hide")
        })
}};

let SizeArt = function() {
    for( let i = 0; i < VisualArt.length; i++) {
        VisualArt[i].addEventListener("click", function() {
            switch(VisualArt[i])
            {
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
                break;
                default:
                break;
            }
        for( let y = 0; y < VisualArt.length; y++) {
            VisualArt[y].addEventListener("click", function () {
                VisualArt[0].classList.remove("Size");
                VisualArt[1].classList.remove("Size");
                VisualArt[2].classList.remove("Size");
                VisualArt[3].classList.remove("Size");
                VisualArt[4].classList.remove("Size");
                VisualArt[5].classList.remove("Size");
                VisualArt[6].classList.remove("Size");
                VisualArt[7].classList.remove("Size");
                VisualArt[8].classList.remove("Size");
                VisualArt[9].classList.remove("Size");
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
            })
        }
        })
    }
}

OpenDoor();
SizeArt();