const d = document;

//Funcion que agrega un clase a un elemento cuando este no se observa en pantalla

export function navbarBackgroundColor(dom, domelement, classTogle) {
  const disparador = (domsearch) => {
    domsearch.forEach((element) => {
      if (element.isIntersecting) {
        d.querySelector(domelement).classList.remove(classTogle);
      } else {
        d.querySelector(domelement).classList.add(classTogle);
      }
    });
  };
  const observador = new IntersectionObserver(disparador, {
    root: null,
    threshold: 0.5,
  });

  observador.observe(d.querySelector(dom));
}

////////////////////////////////////////////////////////////////////////////////

//Agrega la class Active conforme los elementos del DOM van apareciendo en pantalla

// //funcion callback que agrega la clase "scale-active" 
// export const AddclassScale = (entrada) => {
//   entrada.classList.add("scale-active");
// };


// //Funcion callback que agrega la clase "active-header"
// export const AddclassRevealHeader = (entrada) => {
//   entrada.classList.add("active-header");
// };

//Funcion callback que agrega la clase "active"
export const AddclassActive = (entrada) => {
  entrada.classList.add("active");
};


//Funcion callback con el fin de trasladar un objeto de izquierda a derecha pasando la funcion BarProgressBar
export const derecha = (entrada) => {
  BarProgressBar(entrada, "-");
};

//Funcion callback con el fin de trasladar un objeto de derecha a izquierda pasando la funcion BarProgressBar
export const izquierda = (entrada) => {
  BarProgressBar(entrada, "");
};

//Efecto de traslado en el eje X (Se puede tambien pasar a eje Y)
export function BarProgressBar(entradaBar,direccion) {
    // console.log(entradaBar)
    requestAnimationFrame(animacionBar);
    let progreso = 100;
    function animacionBar() {
      progreso = progreso - 2;
      if (progreso >= 1) {
        entradaBar.style.transform = `translateX(${direccion}${progreso}%)`;
        requestAnimationFrame(animacionBar);
      }
    }
  }


//Funcion que observa cada elemento del DOM y retorna el elemento que esta pasando por pantalla, 
//posteriormente este elemento puede ser tomado por una funcion
export function scrollFunctionTriggerD(functionTrigger, domObserver) {
  const observerElement = (entradas, observer) => {
    entradas.filter((entrada) => entrada.isIntersecting).forEach((entrada) => {
        functionTrigger(entrada.target);
        observer.disconnect(); //Solo se ejecutara una vez cuando el elemento haya pasado por la pantalla
      });
  };

  d.querySelectorAll(domObserver).forEach((element) => {
    const observer = new IntersectionObserver(observerElement, {
      root: null,
      threshold: 0.1,
    });
    observer.observe(element);
  });
}

export function scrollSpy(){

const secciones = d.querySelectorAll("article[id]");

const disparador = (analizarid) => {
  analizarid.forEach((idanalizada) => {
    const id = idanalizada.target.getAttribute("id");

    if (idanalizada.isIntersecting) {
      d.querySelector(`div a[href="#${id}"]`).classList.add("hover-indicator");

    } else {
      d.querySelector(`div a[href="#${id}"]`).classList.remove("hover-indicator");
      
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
}

