import { Controls,controlCheckPlaylist,randomForward,backward,resetIndextrack,forward,musicPlayerLoaderList,bdPlaylistload,callApiDeezer,musicPlayerLoader,TopArtists,loadArtiststrack,templateNameimgartists,loadPlaylists  } from "./modules/api-deezer.js";
import {  containerUpeffect,loadEffect,ChangeScreenMediaPlayer,TransitionmusicPlayer } from "./modules/change-screen.js";
import { changeBGgradient,colorBGchange } from "./modules/color-pick.js";
import { iconRepeatchange,controlBartrack,trackDuration,updateTimetrack,timeUpdateTrack,Musicplayer,pauseMusic,playMusic } from "./modules/music-player.js";
import { scrollMenu } from "./modules/observer-api.js";
import { addtrackPlayertoplay,fadeEffect,deletePlaylistrack,Optionplaylistfavlist,addtrackFavtoplay,LoadPlaylist,addPlaylistrack,createPlaylist,modalPlaylist,Optionplaylistfav, localStorageLoad,localStorageSave,localStorageFavbtn,btnAddTrack,loadTracklist,trackPlayerload,deleteFavtrack,playlistList,deletePlaylist,hiddenEffect2,loadPlaylistname  } from "./modules/playlist.js";

/******************Variables api buscador music********************************** */
const d = document, 
      $formsearcht = document.querySelector('#search-track'),
      $searcht = document.querySelector("input[name='busqueda']"),
      $Pausetrack =d.querySelector(".mb-play"),
      $mainAudio = d.querySelector("#audio-player"),
      $containerSeekBar = d.querySelector(".container-seek-bar")


const repeatMusic = (e) =>{
    musicPlayerLoaderList()
  colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);
  setTimeout(() => {
    playMusic($Pausetrack)
  }, 200);
}

const Nextmusic = (e) =>{
  forward()
  musicPlayerLoaderList() 
  colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);
  setTimeout(() => {
    playMusic($Pausetrack)
  }, 200);
}

const backMusic = (e) =>{
  backward()
  musicPlayerLoaderList()
  colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);
  setTimeout(() => {
    playMusic($Pausetrack)
  }, 200);
}

const randomMusic = (e) =>{
  randomForward()
  musicPlayerLoaderList()
  colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);
  setTimeout(() => {
    playMusic($Pausetrack)
  }, 200);
}
      
      
document.addEventListener("DOMContentLoaded",e =>{
    e.preventDefault();
    ChangeScreenMediaPlayer();
    scrollMenu("section[id]","container-main-slide");
    TransitionmusicPlayer();
    modalPlaylist();   
    localStorageLoad(); 
    loadTracklist();   
    playlistList()  
    TopArtists();   
    changeBGgradient();   
    loadEffect();
    containerUpeffect(); 
    
    
})

$formsearcht.addEventListener("submit", async e =>{
        e.preventDefault()
        callApiDeezer($searcht);
})

$mainAudio.addEventListener("timeupdate", (e)=>{
  setTimeout(() => {
    timeUpdateTrack(e) 
  }, 100);  

  
  $mainAudio.addEventListener("loadeddata",()=>{
      trackDuration($mainAudio)   
  })
  updateTimetrack(e.target.currentTime)
})


$mainAudio.addEventListener("ended", (e) => {
  setTimeout(() => {
    if (d.querySelector(".mb-repeat").classList.contains("repeat-icon")) {
      Nextmusic(e);
    }

    if (d.querySelector(".mb-repeat").classList.contains("repeat-one-icon")) {
      repeatMusic(e);
    }

    if (d.querySelector(".mb-repeat").classList.contains("shuffle-icon")) {
      randomMusic(e);
    }
  }, 550);
});


$containerSeekBar.addEventListener("click", e =>{
  controlBartrack(e,$containerSeekBar,$mainAudio)
})


document.addEventListener("click", e =>{


        if (e.target.matches("#p-crear")) {
          createPlaylist();
        }

        if (e.target.matches(".block-track-fav")) {
          controlCheckPlaylist(e,"blockfav")
          trackPlayerload(e);
          colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);
        }

        if (e.target.matches(".mb-favorite")) {
          btnAddTrack();
          setTimeout(() => {
            loadTracklist();
          }, 200);
        }

        if (e.target.matches(".block-p-t")) {
          Optionplaylistfav(e, ".add-favs");
          Optionplaylistfav(e, ".add-playlist");
        }

        if (e.target.matches(".add-playlist")) {
          loadPlaylistname();
        }

        if (e.target.matches(".mb-add-playlist")) {
          loadPlaylistname();
        }

        if (e.target.matches(".track-icon-pl")) {
          loadPlaylistname();
        }

        if (e.target.matches(".track-icon-pl")) {
          loadPlaylistname();
          addtrackFavtoplay(e);
          Optionplaylistfavlist(".add-playlist");
        }

        if (e.target.matches(".add-favs")) {
          localStorageSave(".add-favs");
          localStorageFavbtn(e);
          setTimeout(() => {
            loadTracklist();
          }, 300);
        }

        if (e.target.matches(".track-icon-fav")) {
          fadeEffect(e.target.parentNode.parentNode, "show-block");
          deleteFavtrack(e);
          setTimeout(() => {
            loadTracklist();
          }, 200);
        }

        if (e.target.matches(".title-playlist-aside")) {
          hiddenEffect2(".box-pass-playlist-p");
          addPlaylistrack(e);
        }

        if (e.target.matches(".mb-play")) {
          Musicplayer(".mb-play");
        }

        if (e.target.matches(".container-track-music")) {
          controlCheckPlaylist(e,"container")
          localStorageFavbtn(e);
          musicPlayerLoader(e);
          colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);          
          setTimeout(() => {
            loadTracklist();
          }, 300);
        }

        if (e.target.matches(".logo-x")) {
          pauseMusic($Pausetrack);
        }

        if (e.target.matches("#c-yes")) {
          deletePlaylist(e);
          setTimeout(() => {
            playlistList();
          }, 150);
        }

        if (e.target.matches(".block-select-playlist")) {
          LoadPlaylist(e);      
          bdPlaylistload("playlist",e)
        }

        if (e.target.matches(".block-play-fav")) {
          bdPlaylistload("playlistfav",e)              
          Controls(true)
          resetIndextrack()
          musicPlayerLoaderList(forward())
          colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);
          setTimeout(() => {
            playMusic($Pausetrack)
          }, 300);
        }

        if (e.target.matches(".block-play-fav-template")) {
          Controls(true)
          resetIndextrack()
          musicPlayerLoaderList(forward())
          colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);
          setTimeout(() => {
            playMusic($Pausetrack)
          }, 300);
        }

        if (e.target.matches(".block-p-t-t")) {
          fadeEffect(e.target.parentNode, "show");
          deletePlaylistrack(e);
          setTimeout(() => {
            LoadPlaylist(e);
          }, 210);
        }

        if (e.target.matches(".mb-add-playlist")) {
          addtrackPlayertoplay(e);
          Optionplaylistfavlist(".add-playlist");
        }

        if (e.target.matches(".card-a-body")) {
          loadArtiststrack(
            e.target.parentNode.querySelector(".card-artists-name").dataset
              .id_artists
          );
          templateNameimgartists(e.target.parentNode.querySelector(".card-artists-name").innerText,e.target.parentNode.querySelector("img").src);         
        }

        if (e.target.matches(".bg-discover")) {
          loadPlaylists(e.target.dataset.id_track);
          templateNameimgartists(e.target.querySelector("h3").innerText,e.target.dataset.url_img);
        }

        if (e.target.matches(".bg-music-g")) {
          loadPlaylists(e.target.dataset.id_track);
          templateNameimgartists(e.target.querySelector(".gender-music-title").innerText,e.target.dataset.url_img);                      
        }

        if (e.target.matches(".mb-forward")) {

          Nextmusic(e)
          
        }

        if (e.target.matches(".mb-backward")) {
          backMusic(e)
        }

        if (e.target.matches(".mb-repeat")) {
          iconRepeatchange(e)           
        }

        if (e.target.matches(".mini-backward")) {
          backMusic(e)
        }

        if (e.target.matches(".mini-forward")) {         
          Nextmusic(e)

          
        }


})


