const d = document;

const $template = d.getElementById('card-template').content,
      $fragment = d.createDocumentFragment(),
      $container = d.querySelector(".container-countries"),
      $valueSelect = d.getElementById("select-region"),
      $cardCountry = d.querySelector("card")

const $flagDetails = d.querySelector(".flag-img"),
      $nameDetails = d.querySelector(".name-country"),
      $nameNatived = d.querySelector(".d-name"),
      $populationD = d.querySelector(".d-population"),
      $regionD = d.querySelector(".d-region"),
      $subregionD = d.querySelector(".d-s-region"),
      $capitalD = d.querySelector(".d-capital"),
      $toplevelD = d.querySelector(".d-t-level"),
      $currencyD = d.querySelector(".d-curency"),
      $lenguageD = d.querySelector(".d-lenguage"),
      $idUrl = d.querySelector(".btn-back")

const $templateBorder = d.getElementById('template-borders').content,
      $containerbouder = d.querySelector(".container-borders")


const apiCountrycall = async(url)=>{

    try {
        let res = await fetch(url),
            json = await res.json()

            if (!res.ok) throw { status: res.status, statusText: res.statusText };

        // console.log(json[25])
        // console.log(json[25].languages)

        for (let index = 0; index < json.length; index++) {
            const element = json[index];

            // console.log(element.borders);
          
            $template.querySelector(".card").setAttribute('id',element.name.common) 
            $template.querySelector(".card-img-top").src = element.flags.png
            $template.querySelector(".card-title").innerText = element.name.common
            $template.querySelector(".card-pop").innerHTML =  `<strong>Population:</strong>  ${element.population}` 
            $template.querySelector(".card-region").innerHTML = `<strong>Region:</strong>  ${element.region }`
            $template.querySelector(".card-capital").innerHTML = `<strong>Capital:</strong>  ${element.capital}`
            $template.querySelector(".card").dataset.sub_region = `${element.subregion}`
            $template.querySelector(".card").dataset.border_countries = element.borders
           
            const nName= json[index].name.nativeName
            if (nName !== undefined) {
                for (const [key,value] of Object.entries(nName)) {$template.querySelector(".card").dataset.native_name = `${value.common}`;}
            } else {
                $template.querySelector(".card").dataset.native_name = `none`
            }

            const Tld= json[index].tld
            if (Tld !== undefined) {
                for (const [key,value] of Object.entries(Tld)) { $template.querySelector(".card").dataset.top_level = `${value}`}
            } else {
                $template.querySelector(".card").dataset.top_level = `none`
            }

            const currenci = json[index].currencies
            if (currenci !== undefined) {
                for (const [key,value] of Object.entries(currenci)) {$template.querySelector(".card").dataset.currencies = `${value.name}`}
            } else {
                $template.querySelector(".card").dataset.currencies = `none`
            }

            const leng = json[index].languages
            if (leng !== undefined) {
                for (const [key,value] of Object.entries(leng)) {$template.querySelector(".card").dataset.lenguages = `${value}`}
            }else {
                $template.querySelector(".card").dataset.lenguages = `none`
            }
                 
            let $clone = d.importNode($template,true)
                $fragment.appendChild($clone)       
        }

        $container.appendChild($fragment)

    } catch (error) {
        let message = error.statusText || "Ocurrió un error";

            console.log(message);
    }

}

export const AllCountries = async()=>{

    apiCountrycall("https://restcountries.com/v3.1/all")
}


export const searchCountries = async(svalue)=>{

    let respuesta = svalue.value.toLowerCase()
    const reglaespacio = /^[ \t\r\n\f]/


    d.querySelectorAll(".card-title").forEach(element => {
        element.textContent.toLowerCase().includes(respuesta)? element.parentNode.parentNode.classList.remove("filter") : element.parentNode.parentNode.classList.add("filter")
    });
    
    
}

export const loadRegions = async()=>{

    $container.innerHTML = ""

    $valueSelect.value == "all"? apiCountrycall("https://restcountries.com/v3.1/all") : apiCountrycall(`https://restcountries.com/v3.1/region/${$valueSelect.value}`) 

}

export const selectCountry = async(e)=>{

    const url = e.target.dataset.border_countries

    $idUrl.href = `#${e.target.querySelector(".card-title").innerText}`
    $flagDetails.src = e.target.querySelector(".card-img-top").src
    $nameDetails.innerText = e.target.querySelector(".card-title").innerText
    $nameNatived.innerHTML = `<strong>Natie Name: </strong> ${e.target.dataset.native_name}` 
    $nameDetails.dataset.border_countries = e.target.dataset.border_countries
    $populationD.innerHTML = e.target.querySelector(".card-pop").innerHTML
    $regionD.innerHTML = e.target.querySelector(".card-region").innerHTML
    $subregionD.innerHTML = `<strong>Sub Region: </strong> ${e.target.dataset.sub_region}` 
    $capitalD.innerHTML = e.target.querySelector(".card-capital").innerHTML
    $toplevelD.innerHTML = `<strong>Top Level Domain: </strong> ${e.target.dataset.top_level}`
    $currencyD.innerHTML =  `<strong>Currencies: </strong> ${e.target.dataset.currencies}`
    $lenguageD.innerHTML = `<strong>Lenguages: </strong> ${e.target.dataset.lenguages}`

    if (url === "undefined") {
        $containerbouder.innerHTML = `<span class="text-center b-title pb-1 light-text">No Border Countries </span>`
    }else{

        try {
            let res = await fetch(
                `https://restcountries.com/v3.1/alpha?codes=${url}`
            ),
            json = await res.json();

            if (!res.ok)
            throw { status: res.status, statusText: res.statusText };

            for (let index = 0; index < json.length; index++) {
            const element = json[index];

            $templateBorder.querySelector(".b-title").innerText =
                element.name.common;

            $templateBorder.querySelector(
                ".b-title"
            ).dataset.sort_name = element.name.common;

            let $clone = d.importNode($templateBorder, true);
            $fragment.appendChild($clone);
            }

            $containerbouder.innerHTML = "";
            $containerbouder.appendChild($fragment);
        } catch (error) {
            let message = error.statusText || "Ocurrió un error";
            $containerbouder.innerHTML = `<span class="text-center b-title pb-1 light-text">No Border Countries </span>`;
        }


    }



}


export const borderCountries = async(e)=>{

    let url = `https://restcountries.com/v3.1/name/${e.target.querySelector("span").dataset.sort_name}` 

    

    try {
        let res = await fetch(url),
            json = await res.json()


            if (!res.ok) throw { status: res.status, statusText: res.statusText };
           

            for (let index = 0; index < json.length; index++) {
                const element = json[index];

                $flagDetails.src =  element.flags.png
                $nameDetails.innerText = element.name.common
                $nameDetails.dataset.border_countries = element.borders
                $idUrl.href = `#${element.name.common}` 
                $populationD.innerHTML = `<strong>Population:</strong>  ${element.population}` 
                $regionD.innerHTML = `<strong>Region:</strong>  ${element.region }`
                $subregionD.innerHTML = `${element.subregion}`
                $capitalD.innerHTML = `<strong>Capital:</strong>  ${element.capital}`

                const nName= json[index].name.nativeName
                if (nName !== undefined) {
                    for (const [key,value] of Object.entries(nName)) {$nameNatived.innerHTML = `<strong>Natie Name: </strong>  ${value.common}`;}
                } else {
                    $nameNatived.innerHTML = `<strong>Natie Name: </strong>  none`
                }  


                const Tld= json[index].tld
                if (Tld !== undefined) {
                    for (const [key,value] of Object.entries(Tld)) { $toplevelD.innerHTML = `<strong>Top Level Domain: </strong>  ${value}`}
                } else {
                    $toplevelD.innerHTML = `<strong>Top Level Domain: </strong>  none`
                }

                const currenci = json[index].currencies
                if (currenci !== undefined) {
                    for (const [key,value] of Object.entries(currenci)) {$currencyD.innerHTML= `<strong>Currencies: </strong> ${value.name}`}
                } else {
                    $currencyD.innerHTML = `<strong>Currencies: </strong> none`
                }

                const leng = json[index].languages
                if (leng !== undefined) {
                    for (const [key,value] of Object.entries(leng)) {$lenguageD.innerHTML = `<strong>Lenguages: </strong>  ${value}`}
                }else {
                    $lenguageD.innerHTML  = `<strong>Lenguages: </strong>  none`
                }                   

            } 

            const urlb = $nameDetails.dataset.border_countries

            if (urlb === "undefined") {
                $containerbouder.innerHTML = `<span class="text-center b-title pb-1 light-text">No Border Countries </span>`
            }else{

                try {

                    $containerbouder.innerHTML = ""
                    let res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${urlb}`),
                        json = await res.json()
            
                        if (!res.ok) throw { status: res.status, statusText: res.statusText };
                        
            
                    for (let index = 0; index < json.length; index++) {
                        const element = json[index];
                        
            
            
                        // console.log(element.name.common)
            
                            $templateBorder.querySelector(".b-title").innerText = element.name.common
            
                            $templateBorder.querySelector(".b-title").dataset.sort_name = element.name.common
                             
                            let $clone = d.importNode( $templateBorder,true)
                                $fragment.appendChild($clone)  
                  
                    }
            
                        $containerbouder.appendChild($fragment)
    
    
                        d.querySelector(".container-details").classList.remove("transition-opaicity") 
                    
            
                } catch (error) {
                    let message = error.statusText || "Ocurrió un error";
                    d.querySelector(".container-details").classList.remove("transition-opaicity") 
                        $containerbouder.innerHTML = `<span class="text-center b-title pb-1 light-text">No Border Countries </span>`
                }
            }


            
        
            
            

    } catch (error) {
        let message = error.statusText || "Ocurrió un error";

            console.log(message);
    }



}
              
