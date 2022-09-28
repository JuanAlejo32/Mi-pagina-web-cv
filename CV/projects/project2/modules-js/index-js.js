import { callApiDeezer,musicPlayerLoader,TopArtists,loadArtiststrack,templateNameimgartists,loadPlaylists  } from "./modules/api-deezer.js";
import { ChangeScreenMediaPlayer,TransitionmusicPlayer } from "./modules/change-screen.js";
import { colorBGchange } from "./modules/color-pick.js";
import { Musicplayer,pauseMusic } from "./modules/music-player.js";
import { scrollMenu } from "./modules/observer-api.js";
import {addtrackPlayertoplay,fadeEffect,deletePlaylistrack,Optionplaylistfavlist,addtrackFavtoplay,LoadPlaylist,addPlaylistrack,createPlaylist,modalPlaylist,Optionplaylistfav, localStorageLoad,localStorageSave,localStorageFavbtn,btnAddTrack,loadTracklist,trackPlayerload,deleteFavtrack,playlistList,deletePlaylist,hiddenEffect2,loadPlaylistname  } from "./modules/playlist.js";

/******************Variables api buscador music********************************** */
const d = document, 
      $formsearcht = document.querySelector('#search-track'),
      $searcht = document.querySelector("input[name='busqueda']"),
      $Pausetrack =d.querySelector(".mb-play")


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
})

$formsearcht.addEventListener("submit", async e =>{
        e.preventDefault()
        callApiDeezer($searcht);
        console.log($searcht.value)
})

document.addEventListener("click", e =>{


        if (e.target.matches("#p-crear")) {
                createPlaylist()
        }

        if (e.target.matches(".block-track-fav")) {
                trackPlayerload(e)
                colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src); 
        }

        if (e.target.matches(".mb-favorite")) {
                btnAddTrack()
                setTimeout(() => {
                loadTracklist();    
                }, 200); 
        }
        
        if (e.target.matches(".block-p-t")) {
                Optionplaylistfav(e,'.add-favs')
                Optionplaylistfav(e,'.add-playlist')
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
                Optionplaylistfavlist('.add-playlist')
        }

        if (e.target.matches(".add-favs")) {
                localStorageSave(".add-favs")
                localStorageFavbtn(e)
                setTimeout(() => {
                loadTracklist();    
                }, 300);                
        }

        if (e.target.matches(".track-icon-fav")) {
                fadeEffect(e.target.parentNode.parentNode,"show-block")
                deleteFavtrack(e)
                setTimeout(() => {
                 loadTracklist();    
                 }, 200);      
        }

        if (e.target.matches(".title-playlist-aside")) {
                hiddenEffect2(".box-pass-playlist-p")
                addPlaylistrack(e)
        }

        if (e.target.matches(".mb-play")) {
                Musicplayer('.mb-play'); 
        }

        if (e.target.matches(".container-track-music")) { 
                localStorageFavbtn(e)
                musicPlayerLoader(e);
                colorBGchange(e,d.querySelector("#img-canvas"),d.querySelector(".cover-tracks img").src);  
                setTimeout(() => {
                        loadTracklist();    
                        }, 300);               
                        
        }
       
        if (e.target.matches(".logo-x")) {
                pauseMusic($Pausetrack)              
        }

        if (e.target.matches("#c-yes")) {
          deletePlaylist(e);
          setTimeout(() => {
            playlistList();
          }, 150);
        }

        if (e.target.matches(".block-select-playlist")) {
          LoadPlaylist(e);
        }

        if (e.target.matches(".block-p-t-t")) {
          fadeEffect(e.target.parentNode,"show")
          deletePlaylistrack(e);
          setTimeout(() => {
                LoadPlaylist(e);
          }, 210);
        }

        if (e.target.matches(".mb-add-playlist")) {
                addtrackPlayertoplay(e)
                Optionplaylistfavlist('.add-playlist')
        }

        if (e.target.matches(".card-a-body")) {
           loadArtiststrack(e.target.parentNode.querySelector(".card-artists-name").dataset.id_artists)
           templateNameimgartists(e.target.parentNode.querySelector(".card-artists-name").innerText,e.target.parentNode.querySelector("img").src)
          
        }

        if (e.target.matches(".bg-discover")) {
                loadPlaylists(e.target.dataset.id_track)
                templateNameimgartists(e.target.querySelector("h3").innerText,e.target.dataset.url_img)                         
        }

        if (e.target.matches(".bg-music-g")) {
                loadPlaylists(e.target.dataset.id_track)
                templateNameimgartists(e.target.querySelector(".gender-music-title").innerText,e.target.dataset.url_img)
        }
})



