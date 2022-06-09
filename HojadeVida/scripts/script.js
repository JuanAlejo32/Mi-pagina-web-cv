/*******************Efectos scrolls y navbar********************* */


const dom = document.querySelector('#inicio');

const header = document.querySelector("header");

const scrolling = document.querySelectorAll('.reveal');

const skillAnimacion = document.querySelector(".container-progress");


const disparador1 = (analizar) => {
  analizar.forEach(elemento => {

    if (elemento.isIntersecting) {

      header.classList.remove("nav-color")

    } else {
      header.classList.add("nav-color")
    }

  });
}
const observador = new IntersectionObserver(disparador1, {
  root: null,
  threshold: 0.5
});

observador.observe(dom);

/******************************Efectos scrollings************************************* */

const observerElement = entradas => {
  entradas.forEach((registra) => {
    if (registra.isIntersecting) {
      registra.target.classList.add('active');

    } else {
      registra.target.classList.remove('active');

    }

  })
}

const observer = new IntersectionObserver(observerElement, {
  root: null,
  threshold: 0.1
});

scrolling.forEach((element) => {
  observer.observe(element);
});

/****************Indicador Link funcion*********************** */

const secciones = document.querySelectorAll('article[id]');

const disparador = (analizarid) => {

  analizarid.forEach(idanalizada => {
    const id = idanalizada.target.getAttribute('id');

    if (idanalizada.isIntersecting) {

      document.querySelector(`div a[href="#${id}"]`).classList.add('hover-indicator')
      document.querySelector(`div a[href="#${id}"]`).classList.remove('hover-effect')


    } else {

      document.querySelector(`div a[href="#${id}"]`).classList.remove('hover-indicator')
      document.querySelector(`div a[href="#${id}"]`).classList.add('hover-effect')

    }
  })
}

const observadorHover = new IntersectionObserver(disparador, {
  root: null,
  threshold: 0.3
});


secciones.forEach((seccion) => {
  observadorHover.observe(seccion);

});

/*********************Efecto Scale********************** */


const scaleEffect = document.querySelectorAll(".scale"),
  scaleHover = document.querySelectorAll(".reveal-header")


document.addEventListener('DOMContentLoaded', () => {

  scaleEffect.forEach((elemento) => {
    elemento.classList.add("scale-active")
  });

  scaleHover.forEach((elementoh) => {
    elementoh.classList.add("active-header")
  });


})


/***************Media query Phonex****************** */

const textologo = document.querySelector(".container-logo h2");

const resolucion = window.matchMedia('(max-width:768px)');

resolucion.addEventListener('change', cambioTexto)

function cambioTexto(e) {

  if (e.matches) {
    textologo.innerHTML = "JUNIOR DEV"
  } else {
    textologo.innerHTML = "PROGRAMADOR JUNIOR"
  }
}

cambioTexto(resolucion);

/******************Boton hamburguesa****************** */

const boton = document.querySelector("#h1"),
  menue = document.querySelector(".navbar"),
  uncheck = document.querySelector("#h1")


boton.addEventListener('click', () => {
  menue.classList.toggle('closet')
})

document.addEventListener('click', e => {
  if (e.target.matches('.menu-nav a')) {
    menue.classList.toggle('closet')
    uncheck.checked = false;
  }
})


/********************************Navbar Skill**************************** */


const animacionSkills = (analizar) => {
  analizar.forEach(elemento => {

    if (elemento.isIntersecting) {

      console.log("hola")

      function contador(i) {

        let porcentaje = document.querySelector(`#progress_${i} .circle`);
        let progreso = document.querySelector(`#progress_${i} .progressing`);

        requestAnimationFrame(progressBar);

        let barra = 1;
        let js = 60;
        let htmlcss = 75;
        let bst = 65;



        function progressBar() {

          barra++;

          switch (i) {
            case 0:

              if (barra <= js) {
                porcentaje.innerHTML = `${barra}%`
                porcentaje.style.left = `${barra}%`
                progreso.style.width = `${barra}%`
                requestAnimationFrame(progressBar);
              }
              break;

            case 1:

              if (barra <= htmlcss) {
                porcentaje.innerHTML = `${barra}%`
                porcentaje.style.left = `${barra}%`
                progreso.style.width = `${barra}%`
                requestAnimationFrame(progressBar);
              }

              break;

            case 2:

              if (barra <= bst) {
                porcentaje.innerHTML = `${barra}%`
                porcentaje.style.left = `${barra}%`
                progreso.style.width = `${barra}%`
                requestAnimationFrame(progressBar);
              }

              break;

          }

        }


      }

      for (let i = 0; i <= 2; i++) {
        contador(i);

      }

    }

  });
}
const observadorSkills = new IntersectionObserver(animacionSkills, {
  root: null,
  threshold: 0.5
});

observadorSkills.observe(skillAnimacion);


((d)=>{
  const $form = document.querySelector('.form-container'),
        $formloader = document.querySelector('.form-loader'),
        $formmensaje = document.querySelector('.container-modal'),
        $formboton = document.querySelector('.fill');
 
  $form.addEventListener("submit",(e)=>{
    e.preventDefault();
    $formloader.classList.remove('none');
    $formboton.classList.add('none');
    fetch("https://formsubmit.co/ajax/juanchosang@gmail.com",{
      method: "POST",
      body: new FormData(e.target)
    }).then(res=> res.ok ? res.json(): Promise.reject(res))
      .then(json => {
        console.log(json); 
        location.hash = '#gracias'
        $form.reset();
      })
      .catch(err =>{
        console.log(err);
        let message = err.statusText
        $formmensaje.querySelector("h3").innerHTML = `Error ${err.status}:${message}`
      }).finally(()=>{
        $formloader.classList.add('none');
        $formboton.classList.remove('none');
        setTimeout(() => {
          location.hash = "#close"
        }, 3000);
      });
    
  });

})(document);


