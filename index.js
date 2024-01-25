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
            <img class="AudioController play" src="SvgIcons/PlayButton.svg" alt="">
        </div>

    </div> </li>`;

    }
    console.log(songUL.innerHTML)
    //    songUL.innerHTML = songUL.innerHTML + songs[0]
    let Song = new Audio(songs[0])

    let AllPlayButtons = document.querySelectorAll(".AudioController").length;
    let currentButton = document.querySelectorAll(".play");
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

