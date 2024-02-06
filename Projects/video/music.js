var songs = [
    "./Audio/fitoor.mp3",
    "./Audio/haseen.mp3",
    "./Audio/jhumta.mp3",
    "./Audio/leja-re.mp3",
    "./Audio/Pranavalaya.mp3",
    "./Audio/radha.mp3"
]

var images = [
    "./Images/fitoor.webp",
    "./Images/roja.jpg",
    "./Images/mausam.jpg",
    "./Images/leja.jpg",
    "./Images/pranvalaya.jpg",
    "./Images/radha.webp"
]
 var a=document.getElementById("mouse")
 var immg=document.getElementById("image")
function shuffle() {
    var b=Math.floor(Math.random()*songs.length)
    a.src=songs[b]
    immg.src=images[b]
}