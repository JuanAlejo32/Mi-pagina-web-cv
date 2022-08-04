const d = document;

export function theme(){
    const $botonTema = d.querySelector(".tema"),
        $imgBoton = d.querySelector(".tema img"),
        $navbarColor = d.querySelector("header"),
        $menuNavcolor = d.querySelector(".menu-nav"),
        sombraLetra = d.querySelectorAll(".block-skills .text-about");

    const lightMode = () =>{
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
      $botonTema.setAttribute("data-theme", "dark");

      localStorage.setItem("theme","light")

    }

    const  darkMode= () =>{
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
      $botonTema.setAttribute("data-theme", "light");

      localStorage.setItem("theme","dark")

    }

    $botonTema.addEventListener("click", () => {
        if ($botonTema.getAttribute("data-theme") === "dark") {
          darkMode();
        } else {
          lightMode();
        }
      });


const LocalstorageTheme = () =>{
      if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme","light");
      }
  
      if (localStorage.getItem("theme") === "light") {
        lightMode();
      }
  
      if (localStorage.getItem("theme") === "dark") {
        darkMode();
      }
    }

    LocalstorageTheme()
}