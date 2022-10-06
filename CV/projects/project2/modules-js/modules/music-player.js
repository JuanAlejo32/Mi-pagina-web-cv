const d = document,
      $audioPlayer = d.getElementById('audio-player'),
      $Playstate = d.querySelector('.mb-play'),
      $iconPlay = d.querySelectorAll('.svg-play'),
      $iconPause = d.querySelectorAll('.svg-pause')
  
let $currentTimetrack = d.querySelector(".min-start"),
    $finishTimetrack = d.querySelector(".min-finish")

const $repeat =  d.querySelector(".container-repeat"),
      $repeatOne = d.querySelector(".container-repeat-one"),
      $shuffle = d.querySelector(".container-shuffle")


export const Musicplayer = (dom) =>{

  let $domElement = d.querySelector(dom)

  const isMusicplay = $domElement.classList.contains("pause")

  isMusicplay ? pauseMusic($domElement) : playMusic($domElement);

}



export const playMusic = (dom) =>{
  dom.classList.add("pause")
  $audioPlayer.play()

  for (let index = 0; index < $iconPlay.length; index++) {
    const playelement = $iconPlay[index],
          pauselement = $iconPause[index]
    
          playelement.style.display = "none"
          pauselement.style.display = "flex"; 
  }
}

export const pauseMusic = (dom) =>{

  dom.classList.remove("pause")
  $audioPlayer.pause()
  for (let index = 0; index < $iconPlay.length; index++) {
    const playelement = $iconPlay[index],
          pauselement = $iconPause[index]
    
          playelement.style.display = "flex"
          pauselement.style.display = "none"; 
  }
}



export const timeUpdateTrack = (e) =>{
  const currentTime = e.target.currentTime,
        duration = e.target.duration;

  let progresswidth = (currentTime/ duration)*100;
      d.querySelector(".block-seek-bar").style.width = `${progresswidth}%` 
}

export const updateTimetrack =(currentime) =>{
  let currentmin = Math.floor(currentime / 60),
      currentSec = Math.floor(currentime % 60)

  if (currentSec<10) {
    currentSec = `0${currentSec}`
  }

  $currentTimetrack.innerText = `${currentmin}:${currentSec}`;
}

export const trackDuration = (mainaudio) => {
  let audioDuration = mainaudio.duration,
    totalMin = Math.floor(audioDuration / 60),
    totalSec = Math.floor(audioDuration % 60);
  if (totalSec < 10) {
    totalsec = `0${totalSec}`;
  }
  d.querySelector(".min-finish").innerText = `${totalMin}:${totalSec}`;
};

export const controlBartrack = (e,containerbar,audiolocation) =>{
 
  let progressBarwidth = containerbar.clientWidth,
      clickOfttsetX = e.offsetX,
      songDuration = audiolocation.duration;

      audiolocation.currentTime = (clickOfttsetX / progressBarwidth) * songDuration
}

export const iconRepeatchange = (e) =>{

  if (e.target.classList.contains("repeat-icon")) {
      $repeat.style.display = "none"
      $shuffle.style.display = "none"
      $repeatOne.style.display = "block"
      e.target.classList.remove("repeat-icon")
      setTimeout(() => {
      e.target.classList.add("repeat-one-icon") 
      }, 100);
      
  }

  if (e.target.classList.contains("repeat-one-icon")) {
    $repeat.style.display = "none"
    $shuffle.style.display = "block"
    $repeatOne.style.display = "none"
    e.target.classList.remove("repeat-one-icon")
    setTimeout(() => {
      e.target.classList.add("shuffle-icon")
    }, 100);
    
  }

  if (e.target.classList.contains("shuffle-icon")) {
    $repeat.style.display = "block"
    $shuffle.style.display = "none"
    $repeatOne.style.display = "none"
    e.target.classList.remove("shuffle-icon")
    setTimeout(() => {
      e.target.classList.add("repeat-icon")
    }, 100);
   
  }

}

