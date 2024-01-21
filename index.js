// let AllPlayButtons = document.querySelectorAll(".AudioController").length;
// for (let index = 0; index < AllPlayButtons; index++) {
//    let PlayButton = document.querySelectorAll(".AudioController")[index];
//     PlayButton.addEventListener("click", () => {
//         let currentButton = PlayButton.classList.toggle("pressed");
        
        
//         if (currentButton === true) {
//                 let Song = new Audio("PlaylistSongs/Banjaara.mp3");
//                 Song.play();
//                 // console.log("play")
//                 // currentButton = PlayButton.classList.remove("pressed")
//             }
//             else if (currentButton === false){
//                 console.log("played")
//                 // Song.pause();
//             }

            
        

//         // console.log(PlayButton)

//     })
// }
// // document.querySelector(".AudioController").addEventListener("click", play)
// // function play() {
    
// // }
// // console.log("Audio")
// // var audio = new Audio("PlaylistSongs/Banjaara.mp3")
// // audio.play();

let AllPlayButtons = document.querySelectorAll(".AudioController").length;
let Song = new Audio("PlaylistSongs/Banjaara.mp3")
for (let index = 0; index < AllPlayButtons; index++) {
    let PlayButton = document.querySelectorAll(".AudioController")[index];
    PlayButton.addEventListener("click", () => {
        if (Song.paused) {
            Song.play();

        } else {
            Song.pause();
        }
    
    })
}