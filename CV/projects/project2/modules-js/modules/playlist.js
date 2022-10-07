const d = document,
        $addFavs = d.querySelector(".block-f-favs"),
        $btnFavmark = d.querySelector(".mb-favorite");

const   $trackSrc = d.querySelector('#audio-player'),    
        $imgTrack = d.querySelector(".cover-tracks img "),
        $titleAlbum = d.querySelector(".title-album"),
        $titleTrack = d.querySelector(".title-track"),
        $titleArtist = d.querySelector(".title-artist"),
        favcheck = d.querySelector(".block-favorite-full"),
        favuncheck = d.querySelector(".block-favorite-stroke"),
        $containerTracks = d.querySelector(".container-fav-track"),
        $templateTrack = d.querySelector(".container-track-fav").content,
        $addPlaylistMusic = d.querySelector(".add-playlist"),
        $fragment = d.createDocumentFragment()

const  $containerPlaylist = d.querySelector(".container-playlist-list"),
       $containerfAside = d.querySelector(".block-f-aside"),
       $templatePlaylist = d.querySelector(".template-select-playlist").content,
       $templateNameplay = d.querySelector(".template-name-playlist").content,
       $titlePlaylist =  $templateNameplay.querySelector(".title-playlist-aside"),
       $playlistName = $templatePlaylist.querySelector(".track-playlist-title")

const   $templateTracklist = d.querySelector(".block-track-music-list").content,
        $containerblockPlaylist = d.querySelector(".block-music-playlist"),
        $blockfaside = d.querySelector(".template-track-hidden")

        
const   $miniImg = d.querySelector(".block-img-mini-player img"),
        $miniTitletrack = d.querySelector(".title-track-mini h2"),
        $miniTitleartist = d.querySelector(".title-track-mini span"),
        $playIcon = d.querySelectorAll(".mb-play .svg-play"),
        $pauseIcon = d.querySelectorAll(".mb-play .svg-pause"),
        $statePlay = d.querySelectorAll(".mb-play")

let    $tplayselect = d.querySelector(".d-title-playlist")




export const fadeEffect = (domElement,classlement) =>{
   domElement.classList.remove(classlement)
}


export const deletePlaylistrack = (e) =>{

    const $trackid =  e.target.dataset.id_track,
          $playlistid = e.target.dataset.di_play,
          bdstorage =  JSON.parse(localStorage.getItem("playlist"))

          bdstorage[$playlistid].trackinfo.splice($trackid,1)

          localStorage.setItem("playlist", JSON.stringify(bdstorage))
}

export const addtrackFavtoplay = (e) =>{

    $blockfaside.innerHTML = ""

   const $trackid =  e.target.parentNode.parentNode.dataset.id_track,
       bdstorage =  JSON.parse(localStorage.getItem("favsmusic"))

   const validaSiexiste = (element) => element.idtrack === $trackid;

   let createTrack = bdstorage.findIndex(validaSiexiste)

    // console.log(bdstorage[createTrack])

    $templateTracklist.querySelector('img').setAttribute("src", bdstorage[createTrack].imgcover);
    $templateTracklist.querySelector('img').dataset.img_cover_medium = bdstorage[createTrack].imgcover
    $templateTracklist.querySelector('img').dataset.img_cover_big = bdstorage[createTrack].imgcover
    $templateTracklist.querySelector('.search-track-title').innerText = bdstorage[createTrack].titletrack
    $templateTracklist.querySelector('.search-track-title').dataset.title = bdstorage[createTrack].titletrack
    $templateTracklist.querySelector('.search-artist-title').innerText = bdstorage[createTrack].titlealbum
    $templateTracklist.querySelector('.search-artist-title').dataset.title_album = bdstorage[createTrack].titlealbum
    $templateTracklist.querySelector('.block-infotrack').dataset.artist = bdstorage[createTrack].nameartists
    $templateTracklist.querySelector('.block-infotrack').dataset.preview = bdstorage[createTrack].previewurl
    $templateTracklist.querySelector('.block-infotrack').dataset.id_track = bdstorage[createTrack].idtrack

    let $clon = d.importNode($templateTracklist, true)
    $fragment.appendChild($clon)

    $blockfaside.appendChild($fragment)
}


export const addtrackPlayertoplay = (e) =>{

    $blockfaside.innerHTML = ""

    $templateTracklist.querySelector('img').setAttribute("src", e.target.parentNode.parentNode.parentNode.querySelector(".cover-tracks img ").src);
    $templateTracklist.querySelector('img').dataset.img_cover_medium = e.target.parentNode.parentNode.parentNode.querySelector(".cover-tracks img ").src
    $templateTracklist.querySelector('img').dataset.img_cover_big = e.target.parentNode.parentNode.parentNode.querySelector(".cover-tracks img ").src
    $templateTracklist.querySelector('.search-track-title').innerText = e.target.parentNode.parentNode.parentNode.querySelector(".title-track").innerText
    $templateTracklist.querySelector('.search-track-title').dataset.title = e.target.parentNode.parentNode.parentNode.querySelector(".title-track").innerText
    $templateTracklist.querySelector('.search-artist-title').innerText = e.target.parentNode.parentNode.parentNode.querySelector(".title-album").innerText
    $templateTracklist.querySelector('.search-artist-title').dataset.title_album = e.target.parentNode.parentNode.parentNode.querySelector(".title-album").innerText
    $templateTracklist.querySelector('.block-infotrack').dataset.artist = e.target.parentNode.parentNode.parentNode.querySelector(".title-artist").innerText
    $templateTracklist.querySelector('.block-infotrack').dataset.preview = e.target.parentNode.parentNode.parentNode.querySelector('#audio-player').src
    $templateTracklist.querySelector('.block-infotrack').dataset.id_track = e.target.parentNode.parentNode.parentNode.querySelector(".title-track").dataset.id_track

    let $clon = d.importNode($templateTracklist, true)
    $fragment.appendChild($clon)

    $blockfaside.appendChild($fragment)
}


export const LoadPlaylist = (e) => {
         
    $containerblockPlaylist.innerHTML = ""
    d.querySelector(".block-add-music").style.display ="none"
     
    const bdplaylist = JSON.parse(localStorage.getItem("playlist")),
          $savetitle = $tplayselect.innerText,
          $playindex  =  e.target.querySelector(".track-playlist-title"),
          finalvalue = $playindex === null ? $savetitle : $playindex.innerText
          $tplayselect.innerText = finalvalue
         
    const validaSiexiste = (element) => element.nameplaylist.toLowerCase() === finalvalue.toLowerCase()
    let indexplaylist = bdplaylist.findIndex(validaSiexiste)


    $tplayselect.innerText = bdplaylist[indexplaylist].nameplaylist

    if (bdplaylist[indexplaylist].trackinfo.length > 0) {
        // console.log(bdplaylist[indexplaylist].trackinfo[indexplaylist].previewurl)       

        for (let index = 0; index < bdplaylist[indexplaylist].trackinfo.length; index++) {
            const element = bdplaylist[indexplaylist].trackinfo[index];
            // console.log(element)
            $templateTracklist.querySelector('img').setAttribute("src", element.imgcover);
            $templateTracklist.querySelector('img').dataset.img_cover_medium = element.imgcover
            $templateTracklist.querySelector('img').dataset.img_cover_big = element.imgcover
            $templateTracklist.querySelector('.search-track-title').innerText = element.titletrack
            $templateTracklist.querySelector('.search-track-title').dataset.title = element.titletrack
            $templateTracklist.querySelector('.search-artist-title').innerText = element.titlealbum
            $templateTracklist.querySelector('.search-artist-title').dataset.title_album = element.titlealbum
            $templateTracklist.querySelector('.block-infotrack').dataset.artist = element.nameartists
            $templateTracklist.querySelector('.block-infotrack').dataset.preview = element.previewurl
            $templateTracklist.querySelector('.block-infotrack').dataset.id_track = element.idtrack
            $templateTracklist.querySelector('.block-p-t-t').dataset.id_track = index
            $templateTracklist.querySelector('.block-p-t-t').dataset.di_play = indexplaylist


            let $clon = d.importNode($templateTracklist, true)
            $fragment.appendChild($clon)
        }
        $containerblockPlaylist.appendChild($fragment)
    } else{
     
        d.querySelector(".block-add-music").style.display ="flex"
    
    }


}

export const addPlaylistrack = (e) =>{

    const preview =  $addPlaylistMusic.dataset.preview, 
    imgCover = $addPlaylistMusic.dataset.img_cover_medium,
    titleAlbum = $addPlaylistMusic.dataset.title_album,
    titleTrack = $addPlaylistMusic.dataset.title,
    nameArtists =  $addPlaylistMusic.dataset.artist,
    idtrack = $addPlaylistMusic.dataset.id_track,

    bdplaylist = JSON.parse(localStorage.getItem("playlist"));

    const validaSiexiste = (element) => element.nameplaylist.toLowerCase() === e.target.innerText.toLowerCase();

    let insertrackMusic = bdplaylist.findIndex(validaSiexiste),
    trackInfo = {previewurl: preview, imgcover:imgCover, titlealbum:titleAlbum,titletrack:titleTrack,nameartists:nameArtists,idtrack:idtrack }

    bdplaylist[insertrackMusic].trackinfo.push(trackInfo)

    localStorage.setItem("playlist", JSON.stringify(bdplaylist))

    // console.log(JSON.parse(localStorage.getItem("playlist")))
} 

const revealEmptyMessage = () =>{
    d.querySelector(".block-vacio-list").style.display = "flex"
    setTimeout(() => {
        d.querySelector(".block-vacio-list").classList.add("reveal-error")
    }, 100);
}


export const loadPlaylistname = () => {

    $containerfAside.innerHTML = "";

    const bdplaylist = JSON.parse(localStorage.getItem("playlist"));
   

    if (bdplaylist.length===0) {
        revealEmptyMessage()
    } else {

        for (let index = 0; index < bdplaylist.length; index++) {
            const element = bdplaylist[index];
    
            // console.log(element.nameplaylist);
    
            $titlePlaylist.innerText = element.nameplaylist;
    
            let $clon = d.importNode($templateNameplay, true);
            $fragment.appendChild($clon);
        }
        $containerfAside.appendChild($fragment);
        
    }


};

const popUpmodal = () =>{
    d.querySelector(".box-playlist").style.display = "none";
    d.querySelector(".modal-add-playlist").style.display = "flex";
    d.querySelector(".container-media-player").style.opacity= 0
    d.querySelector(".container-media-player").style.pointerEvents = "none"
    setTimeout(() => {
    d.querySelector(".modal-add-playlist").style.transform = "translateY(0%)" 
    d.querySelector(".menu-nav-music").style.opacity = 0
    d.querySelector(".menu-nav-music").style.pointerEvents = "none";
    }, 350);       
}

const yesOrno = () =>{
    d.querySelector(".modal-add-playlist").style.transform = "translateY(100%)"  
    d.querySelector(".menu-nav-music").style.opacity = 1
    d.querySelector(".menu-nav-music").style.pointerEvents = "auto";
    d.querySelector(".container-media-player").style.opacity= 1
    d.querySelector(".container-media-player").style.pointerEvents = "auto"


    setTimeout(() => {
        d.querySelector(".modal-add-playlist").style.display = "none";
    }, 350);

}

const selectDeletePlaylist = (e) =>{
   d.querySelector("#c-yes").dataset.name = e.target.parentNode.querySelector(".track-playlist-title").innerText 
    
}

export const deletePlaylist =(e) =>{

    let bdplaylist =  JSON.parse(localStorage.getItem("playlist")),
        $playlistDelete = d.querySelector("#c-yes").dataset.name
    const validaSiexiste = (element) => element.nameplaylist.toLowerCase() === $playlistDelete .toLowerCase();
    // console.log($playlistDelete)
    let deleteplaylist = bdplaylist.findIndex(validaSiexiste)
    bdplaylist.splice(deleteplaylist,1)
    localStorage.setItem("playlist", JSON.stringify(bdplaylist)) 

}  


     

export const playlistList = () =>{

    $containerPlaylist.innerHTML  = ""

    const bdplaylist = JSON.parse(localStorage.getItem("playlist"))

    for (let index = 0; index < bdplaylist.length; index++) {
        const element = bdplaylist[index];

        // console.log(element.nameplaylist)

        $playlistName.innerText = element.nameplaylist

        let $clon = d.importNode($templatePlaylist ,true)
        $fragment.appendChild($clon)
        
    }
    $containerPlaylist.appendChild($fragment)

}
        
const hiddenEffect = (domelement) =>{
   
    d.querySelector(" .box-playlist").classList.add("hidden-error")
    setTimeout(() => {
       d.querySelector(domelement).classList.add("reveal-error")
       d.querySelector(" .box-playlist").style.display = "none"
       d.querySelector(domelement).style.display = "flex"
    }, 270);

    setTimeout(() => {
       d.querySelector(domelement).classList.remove("reveal-error")
       d.querySelector(domelement).classList.add("hidden-error")
       d.querySelector(".box-playlist").classList.remove("hidden-error")      
    }, 1500);

   setTimeout(() => {    
       d.querySelector(domelement).classList.remove("hidden-error")
       d.querySelector(domelement).style.display = "none"
       d.querySelector(" .box-playlist").style.display = "flex"
       d.querySelector(" .box-playlist").classList.add("reveal-error")
   }, 1700);

   setTimeout(() => {
    d.querySelector(" .box-playlist").classList.remove("reveal-error")
   }, 1000);
}


export const hiddenEffect2 = (domelement) =>{
   
    d.querySelector(" .block-f-aside").classList.add("hidden-error")
    setTimeout(() => {
       d.querySelector(domelement).classList.add("reveal-error")
       d.querySelector(" .block-f-aside").style.display = "none"
       d.querySelector(domelement).style.display = "flex"
    }, 70);

    setTimeout(() => {
       d.querySelector(domelement).classList.remove("reveal-error")
       d.querySelector(domelement).classList.add("hidden-error")
       d.querySelector(".block-f-aside").classList.remove("hidden-error")      
    }, 700);

   setTimeout(() => {    
       d.querySelector(domelement).classList.remove("hidden-error")
       d.querySelector(domelement).style.display = "none"
       d.querySelector(" .block-f-aside").style.display = "flex"
       d.querySelector(" .block-f-aside").classList.add("reveal-error")
   }, 870);

   setTimeout(() => {
    d.querySelector(" .box-playlist").classList.remove("reveal-error")
   }, 900);
}


const addPlaylist =(name) => {
  let  bdplaylist =  JSON.parse(localStorage.getItem("playlist")),
  playtrackInfo = {nameplaylist:name,trackinfo:[]}

  bdplaylist.push(playtrackInfo)
  localStorage.setItem("playlist",JSON.stringify(bdplaylist))
} 


export const createPlaylist = () =>{

   let $playlist = d.getElementById("res-playlist").value,
         $namePlaylist = $playlist.trim(),
          bdplaylist =  JSON.parse(localStorage.getItem("playlist"))

    const validaSiexiste = (element) => element.nameplaylist.toLowerCase() === $namePlaylist.toLowerCase();

    let repeatlist = bdplaylist.findIndex(validaSiexiste)

    if (bdplaylist.length< 5) {
        if (repeatlist === -1) {         
            if ($namePlaylist.length < 4) {
                hiddenEffect(".box-error-playlist")
            }else{
                addPlaylist($namePlaylist)
                hiddenEffect(".box-pass-playlist")        
                setTimeout(() => {
                    d.querySelector(".modal-add-playlist").style.transform = "translateY(100%)"  
                    d.querySelector(".menu-nav-music").style.opacity = 1
                    d.querySelector(".menu-nav-music").style.pointerEvents = "auto";
                    d.querySelector(".container-media-player").style.opacity= 1
                    d.querySelector(".container-media-player").style.pointerEvents = "auto" 
                    playlistList() 
                }, 2100);
            }
    
        }else{
            hiddenEffect(".box-error-playlist-name")
        }
        
    }else{
        hiddenEffect(".box-error-playlist-number")
    }

}


export const deleteFavtrack = (e) =>{

   const $trackid =  e.target.parentNode.parentNode.dataset.id_track,
         bdstorage =  JSON.parse(localStorage.getItem("favsmusic"))

   const validaSiexiste = (element) => element.idtrack === $trackid;

   let deleteTracck = bdstorage.findIndex(validaSiexiste)

   bdstorage.splice(deleteTracck,1)
   localStorage.setItem("favsmusic", JSON.stringify(bdstorage)) 
   $btnFavmark.classList.remove("fav-track")   
   favuncheck.style.display = "block"
   favcheck.style.display = "none"   
}

export const trackPlayerload = async (e) => {
    const bdstorage =  JSON.parse(localStorage.getItem("favsmusic")),
          $trackId = e.target.dataset.id_track
    
        //   console.log($trackId)

    const validaSiexiste = (element) => element.idtrack === $trackId;

    let searchTrack = bdstorage.findIndex(validaSiexiste)

    // console.log(bdstorage[searchTrack])
       
    $miniImg.src = bdstorage[searchTrack].imgcover
    $miniTitletrack.innerText = bdstorage[searchTrack].titletrack
    $miniTitleartist.innerText = bdstorage[searchTrack].nameartists
    
    $trackSrc.src = bdstorage[searchTrack].previewurl
    $imgTrack.src = bdstorage[searchTrack].imgcover
    $titleAlbum.innerText = bdstorage[searchTrack].titlealbum
    $titleTrack.innerText = bdstorage[searchTrack].titletrack
    $titleArtist.innerText = bdstorage[searchTrack].nameartists
    $titleTrack.dataset.id_track = bdstorage[searchTrack].idtrack
    

    for (let index = 0; index < $playIcon.length; index++) {
        const playelement = $playIcon[index],
              pauselement = $pauseIcon[index],
              statelement = $statePlay[index]

              playelement.style.display = "block"
              pauselement.style.display = "none"
              statelement.classList.remove("pause")

    }

    $btnFavmark.classList.add("fav-track")
    favcheck.style.display = "block"
    favuncheck.style.display = "none"

}

export const loadTracklist = () =>{

    $containerTracks.innerHTML  = ""

    const bdstorage =  JSON.parse(localStorage.getItem("favsmusic"))

    if (bdstorage.length == 0) {
        d.querySelector(".block-add-fav").style.display ="flex"
    }else{

        setTimeout(() => {
            d.querySelector(".block-add-fav").style.display ="none"
        }, 210);
   

        for (let index = 0; index < bdstorage.length; index++) {
            const element = bdstorage[index];
            
            $templateTrack.querySelector(".block-track-fav").dataset.id_track = element.idtrack
            $templateTrack.querySelector(".block-track-fav").dataset.img_cover = element.imgcover
            $templateTrack.querySelector(".block-fav img").src = element.imgcover
            $templateTrack.querySelector(".block-track-fav").dataset.preview = element.previewurl
            $templateTrack.querySelector(".track-title-al").dataset.name_artists = element.nameartists
            $templateTrack.querySelector(".track-title-al h2").innerText = element.titletrack
            $templateTrack.querySelector(".track-title-al h1").innerText = element.titlealbum
            
            let $clon = d.importNode($templateTrack,true)
            $fragment.appendChild($clon)
        }
        $containerTracks.appendChild($fragment)

    }


   
} 


export const btnAddTrack = () =>{
    
    const  preview = $trackSrc.src,
           imgCover = $imgTrack.src,
           titleAlbum = $titleAlbum.innerText,
           titleTrack = $titleTrack.innerText,
           nameArtists = $titleArtist.innerText,
           idtrack = $titleTrack.dataset.id_track


    let trackInfo = {previewurl: preview, imgcover:imgCover, titlealbum:titleAlbum,titletrack:titleTrack,nameartists:nameArtists,idtrack:idtrack },
                    bdstorage =  JSON.parse(localStorage.getItem("favsmusic"))

    const validaSiexiste = (element) => element.idtrack === trackInfo.idtrack;

        if ($btnFavmark.classList.contains("fav-track")) {
            let deleteTracck = bdstorage.findIndex(validaSiexiste)
            bdstorage.splice(deleteTracck,1)
            localStorage.setItem("favsmusic", JSON.stringify(bdstorage))  
            $btnFavmark.classList.remove("fav-track")   
            favuncheck.style.display = "block"
            favcheck.style.display = "none"   
        }else{
            bdstorage.push(trackInfo)  
            localStorage.setItem("favsmusic",JSON.stringify(bdstorage))  
            $btnFavmark.classList.add("fav-track") 
            favuncheck.style.display = "none"
            favcheck.style.display = "block"   
        }
 }

export const modalPlaylist = () =>{

    d.addEventListener("click", e=>{
        
        if (e.target.matches(".block-create-playlist")) {
            const $playlist = d.getElementById("res-playlist").value = ""
            d.querySelector(".modal-add-playlist").style.display = "flex";
            d.querySelector(".box-playlist").style.display="flex"
            d.querySelector(".container-media-player").style.opacity= 0
            d.querySelector(".container-media-player").style.pointerEvents = "none"
            setTimeout(() => {
            d.querySelector(".modal-add-playlist").style.transform = "translateY(0%)" 
            d.querySelector(".menu-nav-music").style.opacity = 0
            d.querySelector(".menu-nav-music").style.pointerEvents = "none";
            }, 350);           
            
        }

        if (e.target.matches("#p-delete")) {

            d.querySelector(".modal-add-playlist").style.transform = "translateY(100%)"  
            d.querySelector(".menu-nav-music").style.opacity = 1
            d.querySelector(".menu-nav-music").style.pointerEvents = "auto";
            

            setTimeout(() => {
                d.querySelector(".container-media-player").style.opacity= 1
                d.querySelector(".container-media-player").style.pointerEvents = "auto"
                d.querySelector(".modal-add-playlist").style.display = "none";
            }, 350);          
        }

        if (e.target.matches(".block-delete-playlist")) {
            popUpmodal()
            d.querySelector(".box-playlist-check").style.display = "flex";
            selectDeletePlaylist(e)
        }

        if (e.target.matches("#c-yes")) {
            yesOrno()
            setTimeout(() => {
                d.querySelector(".box-playlist-check").style.display = "none";
            },400);
            
        }

        if (e.target.matches("#c-no")) {
            yesOrno()
            setTimeout(() => {
                d.querySelector(".box-playlist-check").style.display = "none";
            },400);
        }
    })
}

export const Optionplaylistfavlist = (dom) =>{

    const $domElement = d.querySelector(dom)

    const preview = d.querySelector('.template-track-hidden .block-infotrack').dataset.preview, 
          imgCover =d.querySelector('.template-track-hidden img').dataset.img_cover_medium,
          titleAlbum =d.querySelector('.template-track-hidden .search-artist-title').dataset.title_album,
          titleTrack =d.querySelector('.template-track-hidden .search-track-title').dataset.title,
          nameArtists = d.querySelector('.template-track-hidden .block-infotrack').dataset.artist,
          idtrack = d.querySelector('.template-track-hidden .block-infotrack').dataset.id_track

          $domElement.dataset.preview = preview
          $domElement.dataset.img_cover_medium = imgCover
          $domElement.dataset.title_album = titleAlbum
          $domElement.dataset.title = titleTrack
          $domElement.dataset.artist = nameArtists
          $domElement.dataset.id_track = idtrack
}

export const Optionplaylistfav = (e,dom) =>{

    const $domElement = d.querySelector(dom)

    const preview = e.target.parentNode.querySelector('.block-infotrack').dataset.preview, 
          imgCover =e.target.parentNode.querySelector('img').dataset.img_cover_medium,
          titleAlbum =e.target.parentNode.querySelector('.search-artist-title').dataset.title_album,
          titleTrack =e.target.parentNode.querySelector('.search-track-title').dataset.title,
          nameArtists = e.target.parentNode.querySelector('.block-infotrack').dataset.artist,
          idtrack = e.target.parentNode.querySelector('.block-infotrack').dataset.id_track

          $domElement.dataset.preview = preview
          $domElement.dataset.img_cover_medium = imgCover
          $domElement.dataset.title_album = titleAlbum
          $domElement.dataset.title = titleTrack
          $domElement.dataset.artist = nameArtists
          $domElement.dataset.id_track = idtrack
}



export const localStorageSave = (dom) =>{
    
    const preview = d.querySelector(dom).dataset.preview, 
          imgCover =d.querySelector(dom).dataset.img_cover_medium,
          titleAlbum =d.querySelector(dom).dataset.title_album,
          titleTrack =d.querySelector(dom).dataset.title,
          nameArtists = d.querySelector(dom).dataset.artist,
          idtrack = d.querySelector(dom).dataset.id_track

    let trackInfo = {previewurl: preview, imgcover:imgCover, titlealbum:titleAlbum,titletrack:titleTrack,nameartists:nameArtists,idtrack:idtrack },
        bdstorage =  JSON.parse(localStorage.getItem("favsmusic"))

const validaSiexiste = (element) => element.idtrack === trackInfo.idtrack;
    // console.log(bdstorage)
    // console.log(bdstorage.some(validaSiexiste))
    if (!bdstorage.some(validaSiexiste)) {
        bdstorage.push(trackInfo)  
        localStorage.setItem("favsmusic",JSON.stringify(bdstorage))  
        $addFavs.classList.add("reveal-favs-icon")
    } else {
        d.querySelector(".block-check-fav").style.display ="flex"
        setTimeout(() => {
            d.querySelector(".block-check-fav").style.display ="none"
        }, 1500);
    }     
}



export const localStorageFavbtn = (e) =>{
    const bdstorage = JSON.parse(localStorage.getItem("favsmusic"))
          
    let   idTrack = ""

          if (e.target.matches(".add-favs")) {
            idTrack = e.target.dataset.id_track
            // console.log(idTrack)
          }else{
            idTrack = e.target.querySelector(".block-infotrack").dataset.id_track
            // console.log(idTrack)
          }
   

const validaSiexiste = (element) => element.idtrack === idTrack;

    if (bdstorage.some(validaSiexiste)) {
        $btnFavmark.classList.add("fav-track")
        favcheck.style.display = "block"
        favuncheck.style.display = "none"
    } else{
        $btnFavmark.classList.remove("fav-track")
        favuncheck.style.display = "block"
        favcheck.style.display = "none"
    }

}


export const localStorageLoad  = async () =>{
    
    let favsmusics = [],
        playlists = [],
        playlistselect = [] 

    if (localStorage.getItem("favsmusic") === null) {           
        localStorage.setItem("favsmusic",JSON.stringify(favsmusics))
    }  

    if (localStorage.getItem("playlist") === null) {           
        localStorage.setItem("playlist",JSON.stringify(playlists))
    }  
    
    if (localStorage.getItem("playlistselect") === null) {
        localStorage.setItem("playlistselect",JSON.stringify(playlistselect))
    }
}


