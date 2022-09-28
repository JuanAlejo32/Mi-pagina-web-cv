const d = document,
      $audioPlayer = d.getElementById('audio-player'),
      $Playstate = d.querySelector('.mb-play'),
      $iconPlay = d.querySelectorAll('.svg-play'),
      $iconPause = d.querySelectorAll('.svg-pause')

const playlist = [
  {artista:"Dua lipa", album:" Future Nostalgia",track:"Love me Again"},
  {artista:"Kevin Kaarl", album:"San Lucas",track:"San Lucas"}
]


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



