import { scaleEffect } from "./modules/effect-module.js";
import { formMail } from "./modules/form-module.js";
import { hamburguerButton } from "./modules/hamburger-button.js";
import { navbarBackgroundColor,scrollFunctionTriggerD,AddclassActive,derecha,izquierda, scrollSpy} from "./modules/observer-module.js";
import { responsiveText } from "./modules/responsive-text.js";
import { theme } from "./modules/theme-module.js";



const d = document;

//Scroll effects


d.addEventListener("DOMContentLoaded",(e) =>{
    scrollSpy()
    
    /////////////////////////////////////////////////////////////////////////
    //Cambia el tema
    theme()

    /////////////////////////////////////////////////////////////////////////
    //Formulario de contacto
    formMail()
    
    ///////////////////////////////////////////////////////////////////////
    //Effectos Scale para la pagina
    scaleEffect(".scale","scale-active")
    scaleEffect(".reveal-header","active-header")

    ///////////////////////////////////////////////////////////////////////
    //Funcion boton de hamburguesa
    hamburguerButton("#h1",".navbar",".menu-nav a","closet")

    ///////////////////////////////////////////////////////////////////////
    //primer parametro hace referencia a la resolucion maxima o minima a cambiar el texto
    //segundo parametro hace referencia al elemento del DOM al que se quiere cambiar el texto
    //tercer parametro hace referencia el texto que se quiere ver en la version de escritorio de la pagina
    //cuarto parametro hace referencia al texto que se quiere ver en la version mobile de la pagina
     responsiveText("(max-width:768px)",".container-logo h2","DESARROLLADOR WEB","WEB DEVELOPER")


    //////////////////////////////////////////////////////////////////
    //primer parametro hace referencia al elemento del Dom que esta observando
    //Segundo parametro hace referencia al elemento del Dom al cual se va agregar la clase
    //Tercer parametro hace referencia a la clase que se va agregar al elemento espeficiado en el segundo parametro
    navbarBackgroundColor("#inicio","header","nav-color");


    /////////////////////////////////////////////////////////////////
    //primer parametro hace referencia a la clase que se va a disparar cuando la API observer pase por el elemento designado, (esta funcion debe revisir un parametro)
    //segundo parametro hace referencia al elemento del DOM que la API observer esta vigilando, cuando este pase por la pantalla, dispara la funcion que se encuentra en el primer parametro
    scrollFunctionTriggerD(AddclassActive,".reveal")
    scrollFunctionTriggerD(derecha,".line-bar .line-right")
    scrollFunctionTriggerD(derecha,".circle-right")
    scrollFunctionTriggerD(izquierda,".line-bar .line-left")
    scrollFunctionTriggerD(izquierda,".circle-left")

})
