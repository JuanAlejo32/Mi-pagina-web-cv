import { swiperSettings } from "./modules/swiper.js";

const d = document

d.addEventListener("DOMContentLoaded",(e)=>{
    swiperSettings()
   
    history.scrollRestoration = 'manual';

    setTimeout(() => {
      d.getElementById('section-main').scrollIntoView();
    }, 1200);

    setTimeout(() => {
      d.querySelector(".section-loading").style.display = "none";
      d.querySelector("body").classList.remove("scroll-h")
    }, 2000);
})