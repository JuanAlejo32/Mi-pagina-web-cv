const d = document;

const scrollUpDown = (elementDom,classdom,translate) =>{
   
        d.querySelector(elementDom).classList.add(classdom) 
        setTimeout(() => {
          d.querySelector(elementDom).style.transform = `translateY(${translate}%)`
        d.querySelector(elementDom).classList.remove(classdom)    
        }, 300);             
}


export const loadEffect =() =>{
  setTimeout(() => {
    d.querySelector(".logo-principal").classList.add("load-effect")      
  }, 1000);
  setTimeout(() => {
    d.querySelector(".logo-principal").classList.add("translate-effect")
  }, 1500);

  setTimeout(() => {
    d.querySelector(".logo-principal").classList.remove("logo-text")
  }, 1800);

  setTimeout(() => {
    d.querySelector(".logo-principal").classList.add("shadow-effect")
    d.querySelector(".menu-nav-music").classList.add("show-load")
  }, 2000);

  setTimeout(() => {
    d.querySelector(".container-discover-title").classList.add("show-load")
    d.querySelector(".container-discover-slider").classList.add("show-load")
  }, 2300);

  setTimeout(() => {
    d.querySelector(".container-top-artists").classList.add("show-load")
  }, 2600);

  setTimeout(() => {
    d.querySelector(".container-musicals-gender").classList.add("show-load")
  }, 2800);
}

export const containerUpeffect = () =>{

 let size = window.matchMedia("(max-width: 768px)")


 if (!size.matches) {
  d.querySelector(".container-main-slide").classList.add("container-up")
 }else{
  d.querySelector(".container-main-slide").style.transform = "translateY(0)";
 }


}


export const ChangeScreenMediaPlayer = () => {
    d.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.matches("#inicio")) {
            d.querySelector(".slider-menu").style.transform = "translateX(0)"

        }
        
        if (e.target.matches("#busqueda")) {
            d.querySelector(".slider-menu").style.transform = "translateX(-20%)"
            
        }

        if (e.target.matches("#playlist")) {
            d.querySelector(".slider-menu").style.transform = "translateX(-40%)"
        }

        if (e.target.matches("#favoritos")) {
            d.querySelector(".slider-menu").style.transform = "translateX(-60%)"
        }

        if (e.target.matches(".block-select-playlist")) {
          d.querySelector(".slider-menu").style.transform = "translateX(-79.9%)"
          d.querySelector(".container-bg-playlist-template").style.backgroundImage = `linear-gradient(to bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 255)),url(../img/playlist-bg.jpg)`
        }
        if (e.target.matches(".card-a-body")){
          d.querySelector(".slider-menu").style.transform = "translateX(-79.9%)"
        }

        if (e.target.matches(".bg-discover")){
          d.querySelector(".slider-menu").style.transform = "translateX(-79.9%)"
        }

        if (e.target.matches(".bg-music-g")){
          d.querySelector(".slider-menu").style.transform = "translateX(-79.9%)"
        }


        if (e.target.matches(".add-favs")) {
          d.querySelector(".block-f-favs").style.display = "flex"
          setTimeout(() => {
            d.querySelector(".block-f-favs").classList.remove("reveal-favs-icon")
            scrollUpDown(".container-menu-aside","down-screen",100) 
            d.querySelector(".block-f-favs").style.display = "none"
          }, 656);
        }

    });
};

export const TransitionmusicPlayer = () =>{

    d.addEventListener("click",e =>{

      if (e.target.matches(".container-track-music")||e.target.matches(".block-track-fav")||e.target.matches(".block-play-fav")||e.target.matches(".block-play-fav-template")) {
        d.querySelector(".block-seek-bar").style.width = "0"
        setTimeout(() => {
          scrollUpDown(".container-media-player","up-screen",0)
        }, 256);
        
      }  

      if (e.target.matches(".logo-x")) {
        scrollUpDown(".container-media-player","down-screen",100)
        d.querySelector(".container-media-player ").classList.remove("container-mini-player")
      }

      if (e.target.matches(".logo-down-arro")) {
        d.querySelector(".container-media-player ").classList.add("container-mini-player")
        d.querySelector(".media-player ").classList.add("hidden-mini-player")
        d.querySelector(".block-media-mini-player").classList.remove("hidden-mini-player")
      }

      if (e.target.matches(".block-img-mini-player") || e.target.matches(".control-mini-player") ) {
        d.querySelector(".container-media-player ").classList.remove("container-mini-player")
        d.querySelector(".block-media-mini-player").classList.add("hidden-mini-player")
        setTimeout(() => {
          d.querySelector(".media-player ").classList.remove("hidden-mini-player")
        }, 200);
      } 

      if (e.target.matches(".container-media-player")) {
        d.querySelector(".container-media-player ").classList.remove("container-mini-player")
        setTimeout(() => {
          d.querySelector(".media-player ").classList.remove("hidden-mini-player")
        }, 200);
        
      }

      if (e.target.matches(".block-p-t")) {
        scrollUpDown(".container-menu-aside","up-screen",0)
         d.querySelector(".container-menu-aside").classList.add("effect-m-aside")   
         d.querySelector(".block-m-aside").style.display = "flex"
         d.querySelector(".block-f-aside").classList.remove("reveal")
         d.querySelector(".template-track-hidden").innerHTML = ""
         d.querySelector(".block-f-aside").style.display = "none"
        //  d.querySelector(".block-f-aside").classList.remove("reveal-error")
      }

      if (e.target.matches(".track-icon-pl")) {
        scrollUpDown(".container-menu-aside","up-screen",0)
        d.querySelector(".container-menu-aside").classList.add("effect-m-aside") 
        d.querySelector(".block-m-aside").style.display = "none"
        d.querySelector(".block-f-aside").classList.add("reveal")
        d.querySelector(".block-f-aside").style.display = "flex"
      }

      if (e.target.matches(".mb-add-playlist")) {
        scrollUpDown(".container-menu-aside","up-screen",0)
        d.querySelector(".container-menu-aside").classList.add("effect-m-aside") 
        d.querySelector(".block-m-aside").style.display = "none"
        d.querySelector(".block-f-aside").classList.add("reveal")
        d.querySelector(".block-f-aside").style.display = "flex"
      }


      if (e.target.matches(".container-f-aside")) { 
        scrollUpDown(".container-menu-aside","down-screen",100)         
        setTimeout(() => {
          d.querySelector(".container-menu-aside").classList.remove("effect-m-aside")  
          d.querySelector(".block-f-aside").classList.remove("reveal")
          d.querySelector(".block-f-aside").classList.remove("reveal-error")
        }, 156);
               
      }

      if (e.target.matches(".add-playlist")) {
        d.querySelector(".block-f-aside").classList.add("reveal")
        d.querySelector(".block-f-aside").style.display = "flex"
      }

      if (e.target.matches(".block-f-aside span")) {
        d.querySelector(".block-f-aside").classList.remove("reveal")
        // console.log("hola")
      }

      if (e.target.matches(".block-add-vacio-music")) {
        d.querySelector(".slider-menu").style.transform = "translateX(-40%)"
        d.querySelector(".block-vacio-list").style.display = "none"
        scrollUpDown(".container-menu-aside","down-screen",100)   
        setTimeout(() => {
            d.querySelector(".block-vacio-list").classList.remove("reveal-error")
        }, 100);
      }     

      if (e.target.matches(".block-add-music")) {
        d.querySelector(".slider-menu").style.transform = "translateX(-20%)"
        d.querySelector(".block-add-music").style.display ="none"
      }

      if (e.target.matches(".block-add-fav")) {
        d.querySelector(".slider-menu").style.transform = "translateX(-20%)"
        d.querySelector(".block-add-music").style.display ="none"
      }
  
  
    })
}



