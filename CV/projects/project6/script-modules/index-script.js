import { AllCountries,searchCountries,loadRegions,selectCountry,borderCountries } from "./modules/api-countries.js";
import { changeTheme } from "./modules/theme.js";


const d = document;

const $searchInputh = d.getElementById("search"),
      $valueSelect = d.getElementById("select-region")

d.addEventListener("DOMContentLoaded",e=>{

    AllCountries()
    changeTheme()
})

$searchInputh.addEventListener("keyup",e=>{
    if (e.key ==="Escape") {
        $searchInputh.value = ""
    }

    searchCountries($searchInputh,e)
})

$valueSelect.addEventListener("change",e=>{
    loadRegions()
})

d.addEventListener("click",e=>{

    if (e.target.matches(".card")) {
        d.querySelector(".slider-2").classList.add("translate-slide")
        d.querySelector(".container-countries").classList.add("hidden-content")
        d.querySelector("body").classList.toggle("display-scroll")
        d.querySelector(".slider-1").classList.toggle("h-slider")
    }

    if (e.target.matches(".btn-back") ) {
        d.querySelector(".slider-2").classList.remove("translate-slide")
        d.querySelector(".container-countries").classList.remove("hidden-content")
        d.querySelector("body").classList.toggle("display-scroll")
        d.querySelector(".slider-1").classList.toggle("h-slider")
        d.querySelector(".slider-1").classList.remove("h-c-countries")
    
    }

    if (e.target.matches('.card')) {
        selectCountry(e)
        window.scrollTo({ top: 0});
        d.querySelector(".slider-1").classList.add("h-c-countries")
    }

    if (e.target.matches('.container-border-country')) {
            d.querySelector(".container-details").classList.add("transition-opaicity")
            setTimeout(() => {
                borderCountries(e)  
            }, 300);
            
                  
        
    }   

})




