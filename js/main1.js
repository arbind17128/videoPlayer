let video=document.getElementById('video');
let play=document.getElementById('play');
let stop=document.getElementById('stop');
let timeStamp=document.getElementById('timestamp');
let progress=document.getElementById('progress');

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('timeupdate', toggleTimeStatus);

stop.addEventListener('click', resetVideoStatus);
// video.addEventListener('click', toggleVideoStatus);
// video.addEventListener('click', toggleVideoStatus);


function resetVideoStatus() {
    video.pause();
    video.currentTime= 0;
    play.innerHTML='<i class="fa fa-play fa-2x"></i>'

}

function toggleVideoStatus() {
    if(video.paused) {
        video.play();
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
       
    }else{
        video.pause();
       
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    }
}

function toggleIconStatus() {
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
      }
      else {
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'

      }
}

function toggleTimeStatus() {
    // this line of is responsible for move the progress button according the real time to the video
    progress.value = (video.currentTime / video.duration) * 100;
    

    let mins=Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = "0" + String(mins);
    } else{
        mins= String(mins);
    }

    
    let secs=Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = "0" + String(secs);
    } else{
        secs= String(secs);
    }
    timeStamp.innerHTML=`${mins}:${secs}`

}
function toggleProgresStstus() {
    video.currentTime=(+progress.value * video.duration) / 100;

}

play.addEventListener('click', toggleVideoStatus);
play.addEventListener('click', toggleIconStatus);


progress.addEventListener('change', toggleProgresStstus)
