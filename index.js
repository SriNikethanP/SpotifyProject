let AllPlayButtons = document.querySelectorAll(".AudioController").length;
let currentButton = document.querySelectorAll(".play");
let Song = new Audio("PlaylistSongs/Banjaara.mp3")
for (let index = 0; index < AllPlayButtons; index++) {
    let PlayButton = document.querySelectorAll(".AudioController")[index];

    PlayButton.addEventListener("click", () => {
        if (Song.paused) {
            Song.play();
            currentButton.forEach(element => {
                element.src = "SvgIcons/Pause.svg"
            });
            // currentButton.src = "SvgIcons/Pause.svg"

        } else {
            Song.pause();
            // currentButton.src = "SvgIcons/PlayButton.svg"
            currentButton.forEach(element => {
                element.src = "SvgIcons/PlayButton.svg"
            });
        }

    })
}
//Add hamburger
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    document.querySelector(".right").style.left = "0";
    // let variable = document.querySelector(".right")
    // console.log(variable)
    // console.log(hamburger)
})

//Add cross
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".right").style.left = "-100%";
})
