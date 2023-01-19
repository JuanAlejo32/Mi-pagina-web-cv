export const swiperSettings =()=>{
    let swiper = new Swiper(".mySwiper", {
        direction:"vertical",
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides:false,
        loop:true, 
        autoplay: {
            delay: 1,
            disableOnInteraction:false,
            reverseDirection:true,
          },
        speed:5000,
      });

      let swiper2 = new Swiper(".mySwiper2", {
        watchSlidesProgress: true,
        direction:"vertical",
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop:true,
        autoplay: {
            delay: 1,
            disableOnInteraction:false,
            
          },
        speed:5000,
      });

      let swiper3 = new Swiper(".mySwiper3", {
        watchSlidesProgress: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
      });

      let swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 'auto',
        spaceBetween:30,
        centeredSlides: true,
        navigation: {
          nextEl: ".arrow-c-right",
          prevEl: ".arrow-c-left ",
        },
      });

      let swiper5 = new Swiper(".swiper-banner-1", {
        slidesPerView: 'auto',
        loop:true,
        preventInteractionOnTransition:true,
        spaceBetween: 10,
        autoplay: {
          delay: 0,  
        },
        speed:5000
      });

      let swiper6 = new Swiper(".swiper-banner-2", {
        slidesPerView: 'auto',
        loop:true,
        preventInteractionOnTransition:true,
        spaceBetween: 10,
        autoplay: {
          delay: 0,  
        },
        speed:12000
      });

      let swiper7 = new Swiper(".swiper-banner-3", {
        slidesPerView: 'auto',
        loop:true,
        preventInteractionOnTransition:true,
        spaceBetween: 60,
        autoplay: {
          delay: 0,  
        },
        speed:5000
      });
}