const d = document

export function scrollEffect(dom, domelement, classTogle) {
    const disparador = (domsearch) => {
      domsearch.forEach((element) => {
        if (element.isIntersecting) {
          d.querySelector(domelement).classList.add(classTogle);
        }
      });
    };
    const observador = new IntersectionObserver(disparador, {
      root: null,
      threshold: 0.1,
    });
  
    observador.observe(d.querySelector(dom));
  }
  
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

export const scrollbanner =(seccion,domOb) =>{

  const secciones  = d.querySelectorAll(seccion);

  const domObserver  = d.querySelector(domOb);
  
  const disparador = (analizarid) => {
    analizarid.forEach((idanalizada) => {
      const id = idanalizada.target.getAttribute("id");
  
      if (idanalizada.isIntersecting) {
        let translatey = 2.3,
            barlatey = 11.11,
            idb = parseInt(id) + 1

        translatey = translatey*id
        barlatey = barlatey*idb

        // console.log(idb);
         d.querySelector(".count-slider").style.marginTop = `-${translatey}rem` 
         d.querySelector(".progress-carousel").style.width = `${barlatey}%` 

      }
    });
  };
  
  const observadorHover = new IntersectionObserver(disparador, {
    root: domObserver,
    rootMargin:'0px -30% 0px -30%',
    threshold: 0.5,
  });
  
  secciones.forEach((elemento) => {
    observadorHover.observe(elemento);
  });
  }


export const hiddenEffect =(seccion,domOb) =>{

    const secciones  = d.querySelectorAll(seccion);

    const domObserver  = d.querySelector(domOb);
    
    const disparador = (analizarid) => {
      analizarid.forEach((idanalizada) => {
        const id = idanalizada.target.getAttribute("id");
    
        if (idanalizada.isIntersecting) {
           d.querySelector(`#${id}`).classList.add("comment-effect"); 
        } else {   
           d.querySelector(`#${id}`).classList.remove("comment-effect");          
        }
      });
    };
    
    const observadorHover = new IntersectionObserver(disparador, {
      root: domObserver,
      threshold: 0.8,
    });
    
    secciones.forEach((elemento) => {
      observadorHover.observe(elemento);
    });
  }

export function navbarUpeffect(dom, domelement, classTogle) {
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
      threshold: 1,
    });
  
    observador.observe(d.querySelector(dom));
  }
  