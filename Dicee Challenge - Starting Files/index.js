var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imagesource1 = "images/dice"+randomNumber1+".png";
var imagesource2 = "images/dice"+randomNumber2+".png";
var imagelocation1 = document.querySelector(".img1");
var imagelocation2 = document.querySelector(".img2");
imagelocation1.setAttribute("src",imagesource1);
imagelocation2.setAttribute("src",imagesource2);
var heading = document.querySelector("h1");
if (randomNumber1>randomNumber2){
    heading.innerHTML ="Player 1 wins"; 
}
else if (randomNumber2>randomNumber1){
    heading.innerHTML = "Player 2 wins";
}
else {
    heading.innerHTML = "Draw";
}