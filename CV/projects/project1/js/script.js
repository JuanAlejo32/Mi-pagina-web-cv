/*********************Responsive************************** */

const textContacts = document.querySelector("textarea"),
  navBar = document.querySelector(".container-nav"),
  resolucion991 = window.matchMedia("(max-width:991px)");

resolucion991.addEventListener("change", resolucion);

function resolucion(e) {
  if (e.matches) {
    textContacts.rows = "4";
    navBar.classList.add("collapse");
  } else {
    textContacts.rows = "6";
    navBar.classList.remove("collapse");
  }
}

resolucion(resolucion991);

/***********************Scroll Magic****************************** */

const headerEffect = document.querySelector(".container-card-section")
cards = document.querySelectorAll(".card-effect"),
  cardsImg = document.querySelectorAll(".card-effect .card-img-top"),
  imgBottom = document.querySelectorAll(".img-effect-bottom"),
  clientsBlock = document.querySelectorAll(".container-clients-block"),
  contactBlock = document.querySelector(".container-contacts-block"),
  updatesBlock = document.querySelector(".container-updates-block"),
  containerHero  = document.querySelectorAll('.container-hero');

/*******************************Header********************************** */
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: headerEffect,
  triggerHook: 1,
})
  .setClassToggle("header", "header-effect")
  // .addIndicators()
  .addTo(controller);

/*********************Card-flip********************************* */



cards.forEach((element) => {
  new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 0.9,
    reverse: false,
  })
    .setClassToggle(element, "flip-active")
    // .addIndicators()
    .addTo(controller);
});

/***********************Card IMG effect******************************** */

cardsImg.forEach((element1) => {
  new ScrollMagic.Scene({
    triggerElement: element1,
    triggerHook: 0.9,
    reverse: false,
  })
    .setClassToggle(element1, "card-img-effect")
    // .addIndicators()
    .addTo(controller);
});

/***************************Card bottom effect***************************************** */

imgBottom.forEach((element1) => {
  new ScrollMagic.Scene({
    triggerElement: element1,
    triggerHook: 0.9,
    reverse: false,
  })
    .setClassToggle(element1, "img-bottom-effect")
    // .addIndicators()
    .addTo(controller);
});

/******************************Clients effects********************************** */

let elementos = Array.from(clientsBlock);

new ScrollMagic.Scene({
  triggerElement: elementos[0],
  triggerHook: 0.9,
  reverse: false,
})
  .setClassToggle(elementos[0], "transition-client-effect-left")
  // .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: elementos[1],
  triggerHook: 0.9,
  reverse: false,
})
  .setClassToggle(elementos[1], "transition-client-effect-right")
  // .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: contactBlock,
  triggerHook: 0.9,
  reverse: false,
})
  .setClassToggle(contactBlock, "contacts-effect")
  // .addIndicators()
  .addTo(controller);

/**************************Parallax Background IMG**************************** */

let parallaxElements = Array.from(containerHero);

  var parallax = new ScrollMagic.Scene({
    triggerElement:parallaxElements[0],
    triggerHook:1,
    duration:'200%'
  })
  .setTween(TweenMax.from('.main-hero-img',1,{y:'-60%',ease:Power0.easeNone}))
  .addTo(controller);

  var parallax2 = new ScrollMagic.Scene({
    triggerElement:parallaxElements[1],
    triggerHook:1,
    duration:'200%'
  })
  .setTween(TweenMax.from('.second-hero-img',1,{y:'-20%',ease:Power0.easeNone}))
  .addTo(controller);

  var parallax3 = new ScrollMagic.Scene({
    triggerElement:parallaxElements[2],
    triggerHook:1,
    duration:'200%'
  })
  .setTween(TweenMax.from('.footer-hero-img',1,{y:'-40%',ease:Power0.easeNone}))
  .addTo(controller);

  

/*********************Request Animation******************************** */

const countEffect = document.querySelectorAll('.conteo-effect');


function ConteoEstadisticas(estadisticas) {

  estadisticas.forEach(estadistica => {
    const conteoNumeros = estadistica.dataset.conteo
    const duracion = 2000;
    let comienzaConteo = 0;
    let inicioTiempo = null;

    function animate(marcaTiempo) {
      if (!inicioTiempo) {
        inicioTiempo = marcaTiempo;
      }
      const tiempoEjecucion = marcaTiempo - inicioTiempo;
      const relativeProgress = tiempoEjecucion / duracion;
      comienzaConteo = conteoNumeros * Math.min(relativeProgress, 1);
      estadistica.innerHTML = `${Math.trunc(comienzaConteo)}`;

      if (tiempoEjecucion < duracion) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);

  });

}

new ScrollMagic.Scene({
  triggerElement: updatesBlock,
  triggerHook: 0.9,
  reverse: false,
}).on("enter", function (event) {
  ConteoEstadisticas(countEffect);
})
  // .addIndicators()
  .addTo(controller);









