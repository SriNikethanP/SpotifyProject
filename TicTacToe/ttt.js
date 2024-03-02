var currentPawn = "X";

function changePawn() {
    if (currentPawn === "X") {
        currentPawn = "O";
    } else {
        currentPawn = "X";
    }
}
function checkWin() {
    let boxText = document.querySelectorAll(".boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if (
            (boxText[e[0]].innerText !== "") &&
            (boxText[e[0]].innerText ===
                boxText[e[1]].innerText) &&
            (boxText[e[1]].innerText ===
                boxText[e[2]].innerText)
        ) {
            alert(boxText[e[0]].innerText+" won!")
        }
    });
}
let boxes = document.querySelectorAll(".box"); //Returns nodelist of divs in html language.
Array.from(boxes).forEach((element) => {
    let currentElement = element.querySelector(".boxText");
    element.addEventListener("click", function () {
        if (currentElement.innerText === "") {
            currentElement.innerText = currentPawn;
            changePawn();
            checkWin();
        }
    });
});
