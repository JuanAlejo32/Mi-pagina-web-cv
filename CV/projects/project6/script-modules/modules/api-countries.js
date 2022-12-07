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
      $lenguageD = d.querySelector(".d-lenguage")

const $templateBorder = d.getElementById('template-borders').content,
      $containerbouder = d.querySelector(".container-borders")


const apiCountrycall = async(url)=>{

    try {
        let res = await fetch(url),
            json = await res.json()

            if (!res.ok) throw { status: res.status, statusText: res.statusText };

        // console.log(json[25].borders)
        // console.log(json[25].languages)

        for (let index = 0; index < json.length; index++) {
            const element = json[index];
          

            $template.querySelector(".card-img-top").src = element.flags.png
            $template.querySelector(".card-title").innerText = element.name.common
            $template.querySelector(".card-pop").innerHTML =  `<strong>Population:</strong>  ${element.population}` 
            $template.querySelector(".card-region").innerHTML = `<strong>Region:</strong>  ${element.region }`
            $template.querySelector(".card-capital").innerHTML = `<strong>Capital:</strong>  ${element.capital}`
            $template.querySelector(".card").dataset.sub_region = `${element.subregion}`
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

    $flagDetails.src = e.target.querySelector(".card-img-top").src
    $nameDetails.innerText = e.target.querySelector(".card-title").innerText
    $nameNatived.innerHTML = `<strong>Natie Name: </strong> ${e.target.dataset.native_name}` 
    $populationD.innerHTML = e.target.querySelector(".card-pop").innerHTML
    $regionD.innerHTML = e.target.querySelector(".card-region").innerHTML
    $subregionD.innerHTML = `<strong>Sub Region: </strong> ${e.target.dataset.sub_region}` 
    $capitalD.innerHTML = e.target.querySelector(".card-capital").innerHTML
    $toplevelD.innerHTML = `<strong>Top Level Domain: </strong> ${e.target.dataset.top_level}`
    $currencyD.innerHTML =  `<strong>Currencies: </strong> ${e.target.dataset.currencies}`
    $lenguageD.innerHTML = `<strong>Lenguages: </strong> ${e.target.dataset.lenguages}`


    try {
        let res = await fetch(`https://restcountries.com/v3.1/name/${e.target.querySelector(".card-title").innerText}`),
            json = await res.json()

            if (!res.ok) throw { status: res.status, statusText: res.statusText };

        for (let index = 0; index < json.length; index++) {
            const element = json[index];


            // console.log(element.borders)

            element.borders.forEach(el => {

                $templateBorder.querySelector(".b-title").innerText = el
                 
                let $clone = d.importNode( $templateBorder,true)
                    $fragment.appendChild($clone)  
                          
            }); 

            $containerbouder.innerHTML = ""
            $containerbouder.appendChild($fragment)
        
        }

        

    } catch (error) {
        let message = error.statusText || "Ocurrió un error";
            $containerbouder.innerHTML = "NONE"
    }


}

            //json[0].subregion 

            //ACEDER A LOS IDIOMAS 
            //const test = json[230].languages
            // for (const [key,value] of Object.entries(test)) {
            //     console.log(value)
            // }

            //ACEDER A LA MONEDA
            // const test = json[26].currencies
            // if (test !== undefined) {
            //     for (const [key,value] of Object.entries(test)) {console.log(value.name);}
            // } else {
            //     console.log("No tiene una moneda loca");
            // }

            //TOP LEVEL DOMAIN
            //json[23].tld[0]

              
