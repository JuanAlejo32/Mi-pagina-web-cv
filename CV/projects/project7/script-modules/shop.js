import { localItemstorage } from "./modules/itemShop.js";
import { mouseOver } from "./modules/mouse-over.js";
import { navbarMobile, navbarMobileHidden } from "./modules/navMobile.js";
import { swiperSettings } from "./modules/swiper.js";





const d = document;


d.addEventListener("DOMContentLoaded",(e)=>{

    history.scrollRestoration = 'manual';

    setTimeout(() => {
      d.getElementById('section-main').scrollIntoView();
    }, 1200);

    setTimeout(() => {
      d.querySelector(".section-loading").style.display = "none";
      d.querySelector("body").classList.remove("scroll-h")
    }, 2000);




    swiperSettings()
    mouseOver()
})


d.addEventListener("click", e =>{

  if (e.target.matches(".mobile-project")) {
    navbarMobile()
    }

    if (e.target.matches(".mobile-h-project")) {
    navbarMobileHidden()
    }


    if (e.target.matches(".wrapper-shop")) {

      d.querySelector(".loading-page").classList.add("loading-page-f")
      d.querySelector("body").classList.add("scroll-h")
      setTimeout(() => {
        window.location.href = "../views/shop.html";
      }, 456); 
    }


  if (e.target.matches(".swiper-slide-s")) {
    localItemstorage(e)

    d.querySelector(".loading-page").classList.add("loading-page-f")
    d.querySelector("body").classList.add("scroll-h")
    setTimeout(() => {
    window.location.href = "../views/item.html";
    }, 456);
  }   

  if (e.target.matches(".wrapper-main-logo")|| e.target.matches(".mobile-logo")) {

    d.querySelector(".loading-page").classList.add("loading-page-f")
    d.querySelector("body").classList.add("scroll-h")
    setTimeout(() => {
      window.location.href = "../views/index.html";
    }, 456);
  }

  
  if (e.target.matches(".wrapper-collect")) {
   
    d.querySelector(".loading-page").classList.add("loading-page-f")
    d.querySelector("body").classList.add("scroll-h")
    setTimeout(() => {
      window.location.href = "../views/collections.html";
    }, 456);
  }

  if (e.target.matches(".wrapper-about")) {
    d.querySelector(".loading-page").classList.add("loading-page-f")
  d.querySelector("body").classList.add("scroll-h")
  setTimeout(() => {
    window.location.href = "../views/404.html";
  }, 456);
  }
});



