/*******************Efectos scrolls y navbar********************* */

const dom = document.querySelector("#inicio"),
  header = document.querySelector("header"),
  scrolling = document.querySelectorAll(".reveal"),
  skillAnimacion = document.querySelector(".wrapper-progress"),
  lineBarsr = document.querySelectorAll(".line-bar .line-right"),
  lineBarsl = document.querySelectorAll(".line-bar .line-left"),
  circleRight = document.querySelectorAll(".circle-right"),
  circleLeft = document.querySelectorAll(".circle-left");

//Funcion con la que se puede añadir o remove una clase si es observa el elemento determinado por el segundo parametro de la funcion
function navbarIndicator(domObserver, elementoObserver, classToggle) {
  const disparador1 = (analizar) => {
    analizar.forEach((elemento) => {
      if (elemento.isIntersecting) {
        elementoObserver.classList.remove(classToggle);
      } else {
        elementoObserver.classList.add(classToggle);
      }
    });
  };
  const observador = new IntersectionObserver(disparador1, {
    root: null,
    threshold: 0.5,
  });

  observador.observe(domObserver);
}

navbarIndicator(dom, header, "nav-color");

/******************************Efectos scrollings************************************* */

//funcion para que aparezcan las secciones de la pagina, esta se activa con scrolling
function classActive(entrada) {
  entrada.classList.add("active");
}

//Funcion para animar las lineas de mis habilidades derecha la primera funcion, izquierda la segunda funcion, esta se activa con lineBars

function BarProgressR(entradaBar) {
  requestAnimationFrame(animacionBar);
  let progreso = 100;
  function animacionBar() {
    progreso = progreso - 2;
    if (progreso >= 1) {
      entradaBar.style.transform = `translateX(-${progreso}%)`;
      requestAnimationFrame(animacionBar);
    }
  }
}

function BarProgressL(entradaBar) {
  requestAnimationFrame(animacionBar);
  let progreso = 100;
  function animacionBar() {
    progreso = progreso - 2;
    if (progreso >= 1) {
      entradaBar.style.transform = `translateX(${progreso}%)`;
      requestAnimationFrame(animacionBar);
    }
  }
}


//Funcion que espera como parametros una funcion y el observer, se utiliza exclusivamente para agregar multiples clases/efectos a multiples elementos.
function scrollObserver(functionTrigger, domObserver) {
  const observerElement = (entradas, observer) => {
    entradas
      .filter((entrada) => entrada.isIntersecting)
      .forEach((entrada) => {
        functionTrigger(entrada.target);
        observer.disconnect(); //Solo se ejecutara una vez cuando el elemento haya pasado por la pantalla
      });
  };

  domObserver.forEach((element) => {
    const observer = new IntersectionObserver(observerElement, {
      root: null,
      threshold: 0.1,
    });
    observer.observe(element);
  });
}

scrollObserver(classActive, scrolling);
scrollObserver(BarProgressR, lineBarsr);
scrollObserver(BarProgressR, circleRight);
scrollObserver(BarProgressL, lineBarsl);
scrollObserver(BarProgressL, circleLeft);

/****************Indicador Link funcion*********************** */

const secciones = document.querySelectorAll("article[id]");

const disparador = (analizarid) => {
  analizarid.forEach((idanalizada) => {
    const id = idanalizada.target.getAttribute("id");

    if (idanalizada.isIntersecting) {
      document
        .querySelector(`div a[href="#${id}"]`)
        .classList.add("hover-indicator");
      document
        .querySelector(`div a[href="#${id}"]`)
        .classList.remove("hover-effect");
    } else {
      document
        .querySelector(`div a[href="#${id}"]`)
        .classList.remove("hover-indicator");
      document
        .querySelector(`div a[href="#${id}"]`)
        .classList.add("hover-effect");
    }
  });
};

const observadorHover = new IntersectionObserver(disparador, {
  root: null,
  threshold: 0.3,
});

secciones.forEach((seccion) => {
  observadorHover.observe(seccion);
});

/*********************Efecto Scale********************** */


const scaleEffect = document.querySelectorAll(".scale"),
  scaleHover = document.querySelectorAll(".reveal-header");

document.addEventListener("DOMContentLoaded", () => {
  scaleEffect.forEach((elemento) => {
    elemento.classList.add("scale-active");
  });

  scaleHover.forEach((elementoh) => {
    elementoh.classList.add("active-header");
  });
});

/***************Media query PhoneX****************** */

const textologo = document.querySelector(".container-logo h2"),
  resolucion = window.matchMedia("(max-width:768px)");

resolucion.addEventListener("change", cambioTexto);

function cambioTexto(e) {
  if (e.matches) {
    textologo.innerHTML = "JUNIOR DEV";
  } else {
    textologo.innerHTML = "PROGRAMADOR JUNIOR";
  }
}

cambioTexto(resolucion);

/******************Boton hamburguesa****************** */

const boton = document.querySelector("#h1"),
  menue = document.querySelector(".navbar"),
  uncheck = document.querySelector("#h1");

boton.addEventListener("click", () => {
  menue.classList.toggle("closet");
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".menu-nav a")) {
    menue.classList.toggle("closet");
    uncheck.checked = false;
  }
});

/*********************Formulario****************** */

((d) => {
  const $form = document.querySelector(".form-container"),
    $formloader = document.querySelector(".form-loader"),
    $formmensaje = document.querySelector(".container-modal"),
    $formboton = document.querySelector(".fill");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $formloader.classList.remove("none");
    $formboton.classList.add("none");
    fetch("https://formsubmit.co/ajax/juanchosang@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText;
        $formmensaje.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        $formloader.classList.add("none");
        $formboton.classList.remove("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

((d) => {
  const $botonTema = d.querySelector(".tema"),
    $imgBoton = d.querySelector(".tema img"),
    $navbarColor = d.querySelector("header"),
    $menuNavcolor = d.querySelector(".menu-nav"),
    sombraLetra = d.querySelectorAll(".block-skills .text-about");

    const darkMode = () =>{
      d.documentElement.style.setProperty("--logo-color", "#4086ff");
      d.documentElement.style.setProperty("--firts-color", "#000000");
      d.documentElement.style.setProperty("--black-bg", "#ffffff");
      d.documentElement.style.setProperty("--black2-bg", "#e5e5e5");
      d.documentElement.style.setProperty("--container", "#e5e5e5");
      d.documentElement.style.setProperty("--logo-nav-color", "#4086ff");
      d.documentElement.style.setProperty("--nav-color", "#000");
      $imgBoton.src = "img/brightness-high-fill.svg";
      $navbarColor.style.backgroundColor = "#fff";
      $menuNavcolor.style.backgroundColor = "rgba(255, 255, 255, 1)";
      sombraLetra.forEach((element) => {
        element.style.textShadow =
          "0px 3px 0px #b2a98f,0px 14px 10px rgba(0,0,0,0.15),0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1)";
      });
      $botonTema.setAttribute("data-theme", "light");

      localStorage.setItem("theme","dark")

    }

    const lightMode = () =>{

      d.documentElement.style.setProperty("--logo-color", "#4040ff");
      d.documentElement.style.setProperty("--firts-color", "#ffffff");
      d.documentElement.style.setProperty("--black-bg", "#0f1013");
      d.documentElement.style.setProperty("--black2-bg", "#1b1c1f");
      d.documentElement.style.setProperty("--container", "#1b1c1f ");
      d.documentElement.style.setProperty("--logo-nav-color", "#4040ff");
      d.documentElement.style.setProperty("--nav-color", "#ffffff");
      $navbarColor.style.backgroundColor = "";
      $menuNavcolor.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      $imgBoton.src = "img/moon-fill.svg";
      sombraLetra.forEach((element) => {
        element.style.textShadow = "6px 6px 0px rgba(255,255,255,0.1)";
      });
      $botonTema.setAttribute("data-theme", "dark");

      localStorage.setItem("theme","light")

    }

  $botonTema.addEventListener("click", () => {
    if ($botonTema.getAttribute("data-theme") === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  });

  d.addEventListener("DOMContentLoaded", (e)=>{
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme","light");
    }

    if (localStorage.getItem("theme") === "light") {
      lightMode();
    }

    if (localStorage.getItem("theme") === "dark") {
      darkMode();
    }
  })

})(document);

