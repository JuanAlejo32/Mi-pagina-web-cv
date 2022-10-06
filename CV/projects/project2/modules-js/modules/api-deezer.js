const d = document,
    $loader = d.querySelector(".container-loader"),
    $loaderArtists = d.querySelector(".container-loader-artists"),
    $containerTracks = d.querySelector(".container-search-list"),
    $templatetrackPlaylist = d.querySelector(".block-track-musicplay").content,
    $fragment = d.createDocumentFragment(),
    $templateTrack = d.querySelector(".block-track-musics").content

const $canvasImg = d.querySelector("#mg-canvas"),
      $imgTrack = d.querySelector(".cover-tracks img "),
      $titleAlbum = d.querySelector(".title-album"),
      $titleTrack = d.querySelector(".title-track"),
      $titleArtist = d.querySelector(".title-artist"),
      $messaError = d.querySelector(".block-track-message")

const $miniImg = d.querySelector(".block-img-mini-player img"),
      $miniTitletrack = d.querySelector(".title-track-mini h2"),
      $miniTitleartist = d.querySelector(".title-track-mini span"),
      $trackSrc = d.querySelector('#audio-player'),
      $miniBGtrack = d.querySelector(".block-img-mini-player"),
      $playIcon = d.querySelectorAll(".mb-play .svg-play"),
      $pauseIcon = d.querySelectorAll(".mb-play .svg-pause"),
      $statePlay = d.querySelectorAll(".mb-play")

const $templateCardartists = d.querySelector(".template-card-artists").content,
      $containerCardartists = d .querySelector(".block-top-artists"),
      $containerPlaylistartists = d.querySelector(".block-music-playlist")

const $btnFavmark = d.querySelector(".mb-favorite"),
      favcheck = d.querySelector(".block-favorite-full"),
      favuncheck = d.querySelector(".block-favorite-stroke")

const $repeat =  d.querySelector(".container-repeat"),
      $repeatOne = d.querySelector(".container-repeat-one"),
      $shuffle = d.querySelector(".container-shuffle"),
      $mbbackward= d.querySelector(".mb-backward"),
      $mbforward = d.querySelector(".mb-forward"),
      $mbrepeat = d.querySelector(".mb-repeat"),
      $minibackward = d.querySelector(".mini-backward"),
      $miniforward = d.querySelector(".mini-forward")


let bdPlaylist = [],
    nexttrack = 2,
    indexf = 0,
    bdplayerlist =[]

export const bdPlaylistload = async (elementdetecte,e) =>{
  
  if (elementdetecte==="playlistselect") {
    bdPlaylist = []
    bdPlaylist = JSON.parse(localStorage.getItem("playlistselect"))
  }

  if (elementdetecte==="playlist") {
    bdPlaylist = []
    let bdPlay = JSON.parse(localStorage.getItem("playlist")),  
    $playindex  =  e.target.querySelector(".track-playlist-title"),
    finalvalue =  $playindex.innerText  

    const validaSiexiste = (element) => element.nameplaylist.toLowerCase() === finalvalue.toLowerCase()
    let indexplaylist = bdPlay.findIndex(validaSiexiste)

    for (let index = 0; index < bdPlay[indexplaylist].trackinfo.length; index++) {
      const element = bdPlay[indexplaylist].trackinfo[index];
      bdPlaylist.push(element)
    }
  }

  if (elementdetecte==="playlistfav") {
    bdPlaylist = []
    bdPlaylist = JSON.parse(localStorage.getItem("favsmusic"))  
  }

}

export const templateNameimgartists =  async(namesec,background)=>{

    d.querySelector(".d-title-playlist").innerText = namesec
    d.querySelector(".container-bg-playlist-template").style.backgroundImage = `linear-gradient(to bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 255)),url(${background})`
}

const LoadtrackselectStorage = async(response) =>{

    let dbplaylistselect = localStorage.getItem("playlistselect")
    dbplaylistselect = []

    for (let index = 0; index < 25; index++) {
        const element = response[index];

    let trackInfo = {previewurl:element.preview, imgcover:element.album.cover_medium, titlealbum:element.album.title,titletrack:element.title,nameartists:element.artist.name,idtrack:element.id }

    dbplaylistselect.push(trackInfo)

    localStorage.setItem("playlistselect",JSON.stringify(dbplaylistselect)) 

    }

}

const templateTracklist = async(response,template,containertemplate) =>{

    d.querySelector(".block-add-music").style.display = "none"

    for (let index = 0; index < 25; index++) {
        const element = response[index];
        // console.log(element.album)
        template.querySelector('img').setAttribute("src", element.album.cover_medium);
        template.querySelector('img').dataset.img_cover = element.album.cover_small
        template.querySelector('img').dataset.img_cover_medium = element.album.cover_medium
        template.querySelector('img').dataset.img_cover_big = element.album.cover_big
        template.querySelector('.search-track-title').innerText = element.title
        template.querySelector('.search-track-title').dataset.title = element.title
        template.querySelector('.search-artist-title').innerText = element.album.title
        template.querySelector('.search-artist-title').dataset.title_album = element.album.title
        template.querySelector('.block-infotrack').dataset.artist = element.artist.name
        template.querySelector('.block-infotrack').dataset.preview = element.preview
        template.querySelector('.block-infotrack').dataset.id_track = element.id

         let $clon = d.importNode(template,true)
         $fragment.appendChild($clon)
    }          
    containertemplate.appendChild($fragment)
}


export const callApiDeezer = async (searcht) => {
  $containerTracks.innerHTML = "";

  const respuesta = searcht.value.toLowerCase(),
    filtrarrespuesta = respuesta.trim(),
    apiDeezer = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${filtrarrespuesta}`,
    options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "51a78223c8mshdb4d63b7fe6014bp142c3ejsncc1f06bd9379",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

  if (filtrarrespuesta.length > 3) {
    await fetch(apiDeezer, options)
      .then((response) => response.json(), ($loader.style.display = "block"))
      .then((response) => { const bdresponse = response.data;
        if (response.data.length > 1) {
          templateTracklist(bdresponse,$templateTrack,$containerTracks);

          $loader.style.display = "none";
        } else {
          $loader.style.display = "none";
          $containerTracks.innerHTML = `<h2 class="block-track-message">Lo siento, No se encontro "${respuesta}"   :(</h2>`;
        }
      });
  }
};

export const Controls= (cases) =>{

  switch (cases) {
    case true:
      d.querySelector(".mb-repeat").classList.add("repeat-icon")
      $repeat.style.display = "block"
      $shuffle.style.display = "none"
      $repeatOne.style.display = "none"

      $mbbackward.style.pointerEvents = "auto";
      $mbforward.style.pointerEvents = "auto";
      $mbbackward.style.opacity = "1";
      $mbforward.style.opacity = "1";

      $minibackward.style.pointerEvents = "auto";
      $miniforward.style.pointerEvents = "auto";
      $minibackward.style.opacity = "1";
      $miniforward.style.opacity = "1";


      $mbrepeat.style.pointerEvents = "auto"
      $mbrepeat.style.opacity = "1";

        
      break; 
    case false:
      d.querySelector(".mb-repeat").classList.remove("repeat-icon")
      d.querySelector(".mb-repeat").classList.remove("repeat-one-icon")
      d.querySelector(".mb-repeat").classList.remove("shuffle-icon")     
      $repeat.style.display = "block"
      $shuffle.style.display = "none"
      $repeatOne.style.display = "none"

      $mbbackward.style.pointerEvents = "none";
      $mbforward.style.pointerEvents = "none";
      $mbbackward.style.opacity = "0.2";
      $mbforward.style.opacity = "0.2";

      $minibackward.style.pointerEvents = "none";
      $miniforward.style.pointerEvents = "none";
      $minibackward.style.opacity = "0.2";
      $miniforward.style.opacity = "0.2";

      $mbrepeat.style.pointerEvents = "none"
      $mbrepeat.style.opacity = "0.2";


    break;
  }


}

const templateMusicPlayer = (...rest)=>{

    $miniImg.src = rest[0]
    $miniTitletrack.innerText = rest[1]
    $miniTitleartist.innerText = rest[2]
    
    $trackSrc.src = rest[3]
    $imgTrack.src = rest[0]
    $titleAlbum.innerText =rest[4]
    $titleTrack.innerText = rest[1]
    $titleArtist.innerText = rest[2]
    $titleTrack.dataset.id_track = rest[5]
    
    for (let index = 0; index < $playIcon.length; index++) {
      const playelement = $playIcon[index],
            pauselement = $pauseIcon[index],
            statelement = $statePlay[index]

            playelement.style.display = "block"
            pauselement.style.display = "none"
            statelement.classList.remove("pause")            
  }
  
}

export const musicPlayerLoader = async (e) =>{

      const  mimgsrc = e.target.querySelector('img').dataset.img_cover_big,
             mtitletrack = e.target.querySelector('.search-track-title').dataset.title,
             martistsname = e.target.querySelector('.block-infotrack').dataset.artist, 
             mpreviuwurl = e.target.querySelector('.block-infotrack').dataset.preview,
             mtitlealbum = e.target.querySelector('.search-artist-title').dataset.title_album,
             midtrack = e.target.querySelector('.block-infotrack').dataset.id_track  

        templateMusicPlayer(mimgsrc,mtitletrack,martistsname,mpreviuwurl,mtitlealbum,midtrack)
           
}

export const resetIndextrack = () =>{
  nexttrack = 0
  indexf= bdPlaylist.length
}

export const forward = () =>{

  if ( nexttrack < indexf) {
    nexttrack++
  }else{
    nexttrack = 1
  }
 
}

export const backward = () =>{

  if ( nexttrack <= 1) {
    nexttrack = indexf 
  }else{
     nexttrack--
  }

}

export const randomForward = () =>{
  nexttrack = Math.floor((Math.random()* bdPlaylist.length)+1)

  // console.log(bdPlaylist.length)
}


export const controlCheckPlaylist = (e, type) => {
  let existe = 0;

  const Testplaylist = bdplayerlist;

  // console.log(Testplaylist);

  switch (type) {
    case "container":

      const $containerid = e.target.querySelector(".block-infotrack").dataset.id_track;
    
      const validaSiexistecontain = (element) => parseInt(element.idtrack) === parseInt($containerid);
  
      existe = Testplaylist.findIndex(validaSiexistecontain);

      nexttrack = existe+1
  
      if (existe !== -1) {
        Controls(true)
      }else{
        Controls(false)
      }
      
      break;
  
    default:
      const $blockid = e.target.dataset.id_track;
   
      const validaSiexisteblock = (element) => parseInt(element.idtrack) === parseInt($blockid);
  
      existe = Testplaylist.findIndex(validaSiexisteblock);

      nexttrack = existe+1
  
      if (existe !== -1) {
        Controls(true)
      }else{
        Controls(false)
      }

      break;
  }

};


export const musicPlayerLoaderList = async () =>{

  const bdstorage = JSON.parse(localStorage.getItem("favsmusic"))

  bdplayerlist = bdPlaylist

  const validaSiexiste = (element) => parseInt(element.idtrack) === parseInt(bdPlaylist[nexttrack -1].idtrack);

   let existe = bdstorage.findIndex(validaSiexiste)


   if (existe !== -1) {
      $btnFavmark.classList.add("fav-track")
      favcheck.style.display = "block"
      favuncheck.style.display = "none"
   }else{
        $btnFavmark.classList.remove("fav-track")
        favuncheck.style.display = "block"
        favcheck.style.display = "none"
   }


  if (bdplayerlist.length>1) {

    templateMusicPlayer(bdplayerlist[nexttrack-1].imgcover,bdPlaylist[nexttrack-1].titletrack,bdPlaylist[nexttrack-1].nameartists,bdPlaylist[nexttrack-1].previewurl,bdPlaylist[nexttrack-1].titlealbum,bdPlaylist[nexttrack-1].idtrack)  
  }
     
}



const artistaAleatorio = () =>{

    let artisList = [{idartists:14,name:"GORILLAZ",img:"https://e-cdns-images.dzcdn.net/images/artist/77f5ea79673e2cfb77dd1078e37db82e/250x250-000000-80-0-0.jpg"},
                       {idartists:12487862,name:"BIZARRAP",img:"https://e-cdns-images.dzcdn.net/images/artist/e121c1ef9b1135e6a5b71c1e65ab10b4/250x250-000000-80-0-0.jpg"},
                       {idartists:10583405,name:"BAD BUNNY",img:"https://e-cdns-images.dzcdn.net/images/artist/f21443a563e5d03ddf83ed1e6a12d581/250x250-000000-80-0-0.jpg"},
                       {idartists:434,name:"DJ TIESTO",img:"https://e-cdns-images.dzcdn.net/images/artist/b6ff15612b6ef51e5a552e4bd6abefd6/250x250-000000-80-0-0.jpg"},
                       {idartists:8706544,name:"DUA LIPA",img:"https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/250x250-000000-80-0-0.jpg"},
                       {idartists:7543848,name:"POST MALONE",img:"https://e-cdns-images.dzcdn.net/images/artist/a5a8cca44e7eab2db7d44e039bed2574/250x250-000000-80-0-0.jpg"},
                       {idartists:464,name:"RAMMSTEIN",img:"https://e-cdns-images.dzcdn.net/images/artist/f22cac6a41e838f54d2c7b4ea47b5f94/250x250-000000-80-0-0.jpg"},
                       {idartists:4902904,name:"DUKI",img:"https://e-cdns-images.dzcdn.net/images/artist/342b6c7cb35ff0e44d482597aad0cc9e/250x250-000000-80-0-0.jpg"},
                       {idartists:1458571,name:"LOW ROAR",img:"https://e-cdns-images.dzcdn.net/images/artist/02d3ac13f9c055c892244a8cb0d1fa8f/250x250-000000-80-0-0.jpg"}]   
    
    artisList = artisList.sort(function() {return Math.random() - 0.5});

return artisList.slice(0,4)
}

export const TopArtists = () => {
  const artistsProminent = artistaAleatorio();

  for (let index = 0; index < artistsProminent.length; index++) {
    const element = artistsProminent[index];

    $templateCardartists.querySelector("img").src = element.img,
    $templateCardartists.querySelector("img").alt = `${element.name}_img` ,
    $templateCardartists.querySelector(".card-artists-name").innerText = element.name,
    $templateCardartists.querySelector(".card-artists-name").dataset.id_artists = element.idartists

    let $clon = d.importNode($templateCardartists, true);
    $fragment.appendChild($clon);
  }
  $containerCardartists.appendChild($fragment);
  $loader.style.display = "none";
};


export const loadArtiststrack  = async(idArtists) =>{

    // console.log(idArtists)

    $containerPlaylistartists.innerHTML =""

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '51a78223c8mshdb4d63b7fe6014bp142c3ejsncc1f06bd9379',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${idArtists}/top?limit=50`, options)
        .then(response => response.json(), $loaderArtists.style.display = "block")
        .then(response =>{  const bdresponse = response.data   
            
            templateTracklist(bdresponse,$templatetrackPlaylist,$containerPlaylistartists)
            LoadtrackselectStorage(bdresponse)
            bdPlaylistload("playlistselect")  
            $loaderArtists.style.display = "none"}

       
            )
        .catch(err => console.error(err));
}

export const loadPlaylists  = async(idplay) =>{

    // console.log(idArtists)

    $containerPlaylistartists.innerHTML =""

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '51a78223c8mshdb4d63b7fe6014bp142c3ejsncc1f06bd9379',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${idplay}`, options)
        .then(response => response.json(), $loaderArtists.style.display = "block")
        .then(response =>{ const bdresponse = response.tracks.data 
            
            templateTracklist(bdresponse,$templatetrackPlaylist,$containerPlaylistartists)
            LoadtrackselectStorage(bdresponse)
            bdPlaylistload("playlistselect")  
            $loaderArtists.style.display = "none"}
       
            )
        .catch(err => console.error(err));
}