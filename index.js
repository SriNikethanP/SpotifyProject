//Create global default variable
let currentSong = new Audio("PlaylistSongs/YourFavourites/Zara Zara.mp3");
let currentSongDetails = document.querySelector(".currentSong")
let currentFolder = "";
let songs
//Create functions to fetch songs from folder
async function getSongs(folder) {
    currentFolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/PlaylistSongs/${currentFolder}/`)
    let YourFavourites = await a.text();
    let div = document.createElement("div")
    div.innerHTML = YourFavourites
    songs = []
    let as = div.getElementsByTagName("a")
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${currentFolder}/`)[1].split(".mp3")[0])
        }
    }
    let songUL = document.querySelector(".localsongs").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const i of songs) {

        if (currentFolder === "YourFavourites") {

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
        else {
            songUL.innerHTML = songUL.innerHTML + `<li> <div class="SongCard">
            <div class="songPhoto">
            <div class="songphotocard"><img src="PlaylistImages/${currentFolder}.jpg" alt=""> </div>
            <div class="songName">${i.replaceAll("%20", " ")}</div>
            </div>
            <div class="song">
            <img class="AudioController ${i.replaceAll("%20", "")}" src="SvgIcons/PlayButton.svg" alt="">
            </div>
            </div> </li>`;
            // console.log(songUL.innerHTML)
        }
    }

    let li = Array.from(document.querySelector(".localsongs").getElementsByTagName("li"));
    li.forEach(element => {
        element.addEventListener("click", () => {
            let songName = element.querySelector(".songName").innerHTML.replaceAll(" ", "")
            let fullSongName = element.querySelector(".songName").innerHTML

            if (currentSong.paused) {
                playMusic(element.querySelector(".songName").innerHTML)
                PlayButton.src = "SvgIcons/Pause.svg"
            }
            else {
                currentSong.pause();
                PlayButton.src = "SvgIcons/PlayButton.svg"
            }
            if (currentFolder === "YourFavourites") {

                currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${songName}.jpg" alt=""> </div>
                <div class="songName">${fullSongName}</div>
                </div>`
            }
            else {

                currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${currentFolder}.jpg" alt=""> </div>
                <div class="songName">${fullSongName}</div>
                </div>`
            }
        })
        PlayButton.addEventListener("click", () => {
            if (currentSong.paused) {
                currentSong.play();
                // currentButton.src = "SvgIcons/Pause.svg"
                PlayButton.src = "SvgIcons/Pause.svg"
            }
            else {
                currentSong.pause();
                // currentButton.src = "SvgIcons/PlayButton.svg"
                PlayButton.src = "SvgIcons/PlayButton.svg"
            }
        })

    })

   



    // return songs
}

//Create function to play audio from folder 
function playMusic(track) {
    currentSong.src = `/PlaylistSongs/${currentFolder}/` + track + ".mp3"
    currentSong.play();
}

let PlayButton = document.querySelector(".play")
async function main() {

    await getSongs("YourFavourites")

    let selectedFolder;

    Array.from(document.querySelectorAll(".playlist")).forEach(element => {
        element.addEventListener("click", async item => {
            // console.log(item.currentTarget.dataset.folder)
            await getSongs(`${item.currentTarget.dataset.folder}`)
            selectedFolder = item.currentTarget.dataset.folder
        })
    })
     //Add eventlistener to previous and next
     previous.addEventListener("click", () => {
        // console.log("previous")
        let currentSongname = currentSong.src.split("/").slice(-1)[0].split(".mp3")[0]
        let index = songs.indexOf(currentSongname, 0)
        if ((index - 1) >= 0) {
            PlayButton.src = "SvgIcons/Pause.svg"

            playMusic(songs[index - 1])

            if (currentFolder === "YourFavourites") {
                let PlayingTrack = songs[index - 1].replaceAll("%20", " ")
                let fullPlayingTrack = songs[index - 1].replaceAll("%20", "")

                currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${fullPlayingTrack}.jpg" alt=""> </div>
                
                <div class="songName">${PlayingTrack}</div>
                </div>`
            }
            else {
                let PlayingTrack = songs[index - 1].replaceAll("%20", " ")
                // let fullPlayingTrack = songs[index + 1].replaceAll("%20", "")
                currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${currentFolder}.jpg" alt=""> </div>
                
                <div class="songName">${PlayingTrack}</div>
                </div>`

            }

        }

    })
    
    next.addEventListener("click", () => {
        // console.log("next")
        // console.log()
        let currentSongname = currentSong.src.split("/").slice(-1)[0].split(".mp3")[0]
        console.log(currentSongname)
        let index = songs.indexOf(currentSongname, 0)
        if ((index + 1) < songs.length) {
            PlayButton.src = "SvgIcons/Pause.svg"
            playMusic(songs[index + 1])
            if (currentFolder === "YourFavourites") {
                let PlayingTrack = songs[index + 1].replaceAll("%20", " ")
                let fullPlayingTrack = songs[index + 1].replaceAll("%20", "")
                
                currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${fullPlayingTrack}.jpg" alt=""> </div>
                
                <div class="songName">${PlayingTrack}</div>
                </div>`
            }
            else {
                let PlayingTrack = songs[index + 1].replaceAll("%20", " ")
                // let fullPlayingTrack = songs[index + 1].replaceAll("%20", "")
                currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${currentFolder}.jpg" alt=""> </div>
                
                <div class="songName">${PlayingTrack}</div>
                </div>`

            }
        }
    })

    //Add an event listener to Volume Button
    document.querySelector(".VolumeButtons").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        // console.log(e)
        currentSong.volume = parseInt(e.target.value)/100
    })
    
    //SeekBar
    currentSong.addEventListener("timeupdate", () => {
       document.querySelector(".circle").style.left = currentSong.currentTime/currentSong.duration * 100 + "%"
    })
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        document.querySelector(".circle").style.left =( e.offsetX/e.target.getBoundingClientRect().width * 100) + "%"
        currentSong.currentTime = (( e.offsetX/e.target.getBoundingClientRect().width * 100) * currentSong.duration) /100
        // console.log(currentSong.currentTime)
        
    })
}

main()
//Add hamburger
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    document.querySelector(".right").style.left = "0";

})

//Add cross
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".right").style.left = "-100%"
})

//Add eventlistener to keyboard space button
document.addEventListener("keydown", (event) => {
    makesound(event.key)
})
function makesound(key) {
    if (key === " ") {
        if (currentSong.paused) {
            currentSong.play();
            PlayButton.src = "SvgIcons/Pause.svg"
        }
        else {
            currentSong.pause();
            PlayButton.src = "SvgIcons/PlayButton.svg"
        }
    }

}