var video=document.querySelector("video")
var prev=document.querySelector(".fa-backward")
var pause=document.querySelector(".fa-pause")
var play=document.querySelector(".fa-play")
var next=document.querySelector(".fa-forward")
var shuff=document.querySelector(".fa-shuffle")
var volume=document.querySelector("#vol")
var videorange=document.querySelector("#videorange")
var Plus10=document.querySelector(".fa-circle-right")
var minus10=document.querySelector(".fa-circle-left")
var full=document.querySelector(".fa-expand")
var shrink=document.querySelector(".fa-compress")
var main=document.querySelector("main")
pause.style.display="none"
shrink.style.display="none"

var storge=["./video/Ek Mulaqaat - Vishal Mishra_HD_720p-(PagalWorld.video).mp4"]
var index=0
var realTime=0
function playing() {
    video.src=storge[index];
    video.currentTime=realTime
    video.play()
    setInterval(() => {
        videorange.value=(video.currentTime/video.duration)*100
    }, 1000);
    pause.style.display="inline"
    play.style.display="none"
}

function pauseplay() {
    if (video.paused) {
        playing()
    }
    else {
        video.pause()
        realTime=video.currentTime
        play.style.display = "inline"
        pause.style.display = "none"
    }
}

play.addEventListener("click", pauseplay)
pause.addEventListener("click", pauseplay)

next.addEventListener("click",function () {
    index=(index+1)%storge.length
    realTime=0
    playing()
})

prev.addEventListener("click",function () {
    index=(index-1+storge.length)%storge.length
    realTime=0
    playing()
})

shuff.addEventListener("click",()=>{
    index=Math.floor(Math.random()*storge.length)
    realTime=0
    playing()
})

volume.addEventListener("input",()=>{
    video.volume= volume.value 
})

videorange.addEventListener("input",()=>{
    video.currentTime=(videorange.value*video.duration)/100
    realTime=video.currentTime
})

video.addEventListener("ended",()=>{
    index=(index+1)%storge.length
    realTime=0
    playing()
})

Plus10.addEventListener("click",()=>{
    video.currentTime=video.currentTime+10
    realTime=video.currentTime  
})
minus10.addEventListener("click",()=>{
    video.currentTime=video.currentTime-10
    realTime=video.currentTime  
})
full.addEventListener("click",()=>{
    video.style.marginTop="0"
    main.style.marginLeft="0"
    video.width="1300"
    video.height="600"
    shrink.style.display="inline"
    full.style.display="none"
})

shrink.addEventListener("click",()=>{
    video.style.marginTop="40%"
    main.style.marginLeft="-37%"
    video.width="560"
    video.height="315"
    shrink.style.display="none"
    full.style.display="inline"
})