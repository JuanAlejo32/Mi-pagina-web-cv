const d = document

export const scrollMenu =(seccion,domOb) =>{

    const secciones  = d.querySelectorAll(seccion);

    const domObserver  = d.querySelector(domOb);
    
    const disparador = (analizarid) => {
      analizarid.forEach((idanalizada) => {
        const id = idanalizada.target.getAttribute("id");
    
        if (idanalizada.isIntersecting) {
           d.querySelector(`#${id}`).classList.add("reveal-section"); 
        } else {   
            d.querySelector(`#${id}`).classList.remove("reveal-section");
          
        }
      });
    };
    
    const observadorHover = new IntersectionObserver(disparador, {
      root: domObserver,
      rootMargin:'50% 0px 50% 0px',
      threshold: 1,
    });
    
    secciones.forEach((elemento) => {
      observadorHover.observe(elemento);
    });
    }