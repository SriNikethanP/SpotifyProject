//Create global variable
let currentSong = new Audio();

//Create functions to fetch songs from folder
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/PlaylistSongs/YourFavourites/")
    let YourFavourites = await a.text();
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

//Create function to play audio from folder 
function playMusic(track) {
    currentSong.src = "/PlaylistSongs/YourFavourites/" + track + ".mp3"
    currentSong.play();
}

async function main() {
    let songs = await getSongs()
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
    let currentSongDetails = document.querySelector(".currentSong")
    let PlayButton = document.querySelector(".play")
    li.forEach(element => {
        element.addEventListener("click", () => {
            let songName = element.querySelector(".songName").innerHTML.replaceAll(" ", "")
            let fullSongName = element.querySelector(".songName").innerHTML

            if (currentSong.paused) {
                playMusic(element.querySelector(".songName").innerHTML.trim())
                PlayButton.src = "SvgIcons/Pause.svg"
            }
            else {
                currentSong.pause();
                PlayButton.src = "SvgIcons/PlayButton.svg"
            }
            currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${songName}.jpg" alt=""> </div>
                <div class="songName">${fullSongName}</div>
                </div>`
        })
    })
    PlayButton.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            PlayButton.src = "SvgIcons/Pause.svg"
        }
        else {
            currentSong.pause();
            PlayButton.src = "SvgIcons/PlayButton.svg"
        }
    })

    //Add eventlistener to previous and next
    previous.addEventListener("click", () => {
        let currentSongname = currentSong.src.split("/").slice(-1)[0].split(".mp3")[0]
        let index = songs.indexOf(currentSongname, 0)
        if ((index - 1) >= 0) {
            PlayButton.src = "SvgIcons/Pause.svg"
            let PlayingTrack = songs[index - 1].replaceAll("%20", " ")
            let fullPlayingTrack = songs[index - 1].replaceAll("%20", "")
            playMusic(songs[index - 1])

            currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${fullPlayingTrack}.jpg" alt=""> </div>
                <div class="songName">${PlayingTrack}</div>
                </div>`
        }

    })
    next.addEventListener("click", () => {
        let currentSongname = currentSong.src.split("/").slice(-1)[0].split(".mp3")[0]
        let index = songs.indexOf(currentSongname, 0)
        if ((index + 1) < songs.length) {
            PlayButton.src = "SvgIcons/Pause.svg"
            playMusic(songs[index + 1])

            let PlayingTrack = songs[index + 1].replaceAll("%20", " ")
            let fullPlayingTrack = songs[index + 1].replaceAll("%20", "")
            currentSongDetails.innerHTML = `<div class="songPhoto">
                <div class="songphotocard"><img src="PlaylistImages/${fullPlayingTrack}.jpg" alt=""> </div>
                <div class="songName">${PlayingTrack}</div>
                </div>`
        }
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

