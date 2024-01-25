let currentSong = new Audio();
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/PlaylistSongs/YourFavourites/")
    let YourFavourites = await a.text();
    // console.log(songs)
    let div = document.createElement("div")
    div.innerHTML = YourFavourites
    let songs = []
    let as = div.getElementsByTagName("a")
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/YourFavourites/")[1].split(".mp3")[0])

        }


    }
    return songs

}
function playMusic(track) {
    // let audio = new Audio("/PlaylistSongs/YourFavourites/" + track + ".mp3")
    currentSong.src="/PlaylistSongs/YourFavourites/" + track + ".mp3"
    currentSong.play();

}
async function main() {
    let songs = await getSongs()
    // console.log(songs[0])
    let songUL = document.querySelector(".localsongs").getElementsByTagName("ul")[0]
    for (const i of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> <div class="SongCard">
        <div class="songPhoto">
        <div class="songphotocard"><img src="PlaylistImages/${i.replaceAll("%20", "")}.jpg" alt=""> </div>
        
            <div class="songName">${i.replaceAll("%20", " ")}</div>
        </div>
        <div class="song">
            <img class="AudioController ${i.replaceAll("%20", "")}" src="SvgIcons/PlayButton.svg" alt="">
        </div>

    </div> </li>`;

    }

    let li = Array.from(document.querySelector(".localsongs").getElementsByTagName("li"));

    // li.forEach(element => {
    //     element.addEventListener("click", () => {
    //         let songName = element.querySelector(".songName").innerHTML.replaceAll(" ", "")
    //         // console.log(songName)
    //         let audio = new Audio("/PlaylistSongs/YourFavourites/" + songName + ".mp3")
    //         // Song.play();

    //         // for (let index = 0; index < AllPlayButtons; index++) {
    //         // let PlayButton = document.querySelectorAll(".AudioController")[index];

    //         // }
    //         let currentSong = document.querySelector(`.${songName}`)
    //         // console.log(currentSong)
    //         let currentButton = document.querySelector(`.${songName}`);
    //         // console.log(currentButton)
    //         currentSong.addEventListener("click", () => {
    //             if (audio.paused) {
    //                 audio.play();
    //                 console.log("play")
    //                 // currentButton.forEach(element => {
    //                     //     element.src = "SvgIcons/Pause.svg"
    //                     // });
    //                     currentButton.src = "SvgIcons/Pause.svg"
                        
    //                 } else {
    //                     audio.pause();
                        
    //                     currentButton.src = "SvgIcons/PlayButton.svg"
    //                     console.log("paused")
    //                     // currentButton.forEach(element => {
    //                         //     element.src = "SvgIcons/PlayButton.svg"
    //                         // });
    //                     }
    //                 })

    //     })
    // })

    // console.log(a)

    // console.log(songUL.innerHTML)
    //    songUL.innerHTML = songUL.innerHTML + songs[0]
    let PlayButton = document.querySelector(".play");
    li.forEach(element => {
        element.addEventListener("click", () => {
            let songName = element.querySelector(".songName").innerHTML.replaceAll(" ", "")
            let currentButton = document.querySelector(`.${songName}`);
            if (currentSong.paused) {
                
                playMusic(element.querySelector(".songName").innerHTML.trim())
                currentButton.src = "SvgIcons/Pause.svg"
                PlayButton.src = "SvgIcons/Pause.svg"
            }
            else {
                currentSong.pause();
                currentButton.src = "SvgIcons/PlayButton.svg"
                PlayButton.src = "SvgIcons/PlayButton.svg"
            }
            PlayButton.addEventListener("click", () => {
            if (currentSong.paused) {
                currentSong.play();
                currentButton.src = "SvgIcons/Pause.svg"
                PlayButton.src = "SvgIcons/Pause.svg"
                }
                else {
                    currentSong.pause();
                    currentButton.src = "SvgIcons/PlayButton.svg"
                    PlayButton.src = "SvgIcons/PlayButton.svg"
                }
            })
            // console.log(element.querySelector(".songName").innerHTML.trim())
        })
     })
}
main()
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
    document.querySelector(".right").style.left = "-100%"
})

