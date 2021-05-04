//play funcionallity
let isPlaying = false;
function togglePlay(){
    if(isPlaying){
            video.pause();
        playButton.innerHTML = "►"
    } else {
        video.play()
        playButton.innerHTML = "&#9646;&#9646;"}
    isPlaying = !isPlaying;
}

const video = document.querySelector(".player__video");
const playButton = document.querySelector(".player__button");
playButton.addEventListener("click", togglePlay);

//change volume and speed
function inputChange(e){
    if(this.name === "volume"){
        video.volume = this.value;
    } else {
        video.playbackRate = this.value;
    }
}
const player__sliders = document.querySelectorAll(".player__slider");
player__sliders.forEach(slider => slider.addEventListener("input", inputChange))

// skip buttons
function onSkip(){
    video.currentTime += Number(this.dataset.skip);
}
const skipButtons=  document.querySelectorAll(".player__button[data-skip]");
skipButtons.forEach(skipButton => skipButton.addEventListener("click", onSkip))

//scrub functionallity
function updateProgressBar(){
    let percentage = Math.floor((100 / video.duration) * video.currentTime);
   progressFill.style.flexBasis = `${percentage}%`;
}
const progressFill = document.querySelector(".progress__filled")
video.addEventListener("timeupdate", updateProgressBar)