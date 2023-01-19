const d = document


export const navbarMobile =(e)=>{

    d.querySelector(".mobile-nav").classList.toggle("slide-nav")
    d.querySelector(".border-line-nav").classList.toggle("border-nav-f")
    d.querySelector("body").classList.toggle("hscroll")
    d.querySelectorAll(".link-mb-menu").forEach(element => {
        element.classList.toggle("menu-mobile-f")
    });
    d.querySelectorAll(".mobile-socials-f").forEach(element => {
        element.classList.toggle("mobile-socials-f-e") 
    });
}

export const navbarMobileHidden = ()=>{
    d.querySelector(".border-line-nav").classList.toggle("border-nav-f")
    d.querySelectorAll(".mobile-socials-f").forEach(element => {
        element.classList.toggle("mobile-socials-f-e") 
    });

    d.querySelectorAll(".link-mb-menu").forEach(element => {
        element.classList.toggle("menu-mobile-f")
    });
    setTimeout(() => {
        d.querySelector(".mobile-nav").classList.toggle("slide-nav")
        d.querySelector("body").classList.toggle("hscroll")
    }, 900);

}