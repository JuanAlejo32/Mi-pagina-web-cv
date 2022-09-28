document.addEventListener("DOMContentLoaded", (e) => {
  const swiperLibrary = () => {
    var swiper1 = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 100,
        modifier: 3,
        slideShadows: true,
        
      },
      loop:true,
      autoplay: {
        delay: 5000,
      }
    });

    var swiper2 = new Swiper('.swiper-container-g', {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
      grabCursor: true,
      loop:true,
      autoplay: {
        delay: 5000,
      }
        
    });
  };

  swiperLibrary();
});
