var numberOfDrums = document.querySelectorAll(".drum").length;
//For clicking on the drum
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", sound);
}
//For pressing the button on the keyboard
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

})





function sound() {
    var buttonInnerHTML = this.innerText;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }

}
function buttonAnimation(currentButton) {
    var activeButton = document.querySelector("." + currentButton);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 50)
}
