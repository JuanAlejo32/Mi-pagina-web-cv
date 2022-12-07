const d = document;

export const changeTheme = ()=>{

   const $btnTheme = d.querySelector(".container-theme")

   const darkmode = ()=>{
        d.documentElement.style.setProperty("--Light-Mode-Background", "hsl(207, 26%, 17%)");
        d.documentElement.style.setProperty("--Light-Mode-Text", "hsl(0, 0%, 100%)");
        d.documentElement.style.setProperty("--Dark-Mode-Text-and-Light-Mode-Elements", "hsl(209, 23%, 22%)");

        $btnTheme.setAttribute("data-theme", "light");

        localStorage.setItem("theme-5","dark")
   }  

   const lightmode = ()=>{
        d.documentElement.style.setProperty("--Light-Mode-Background", "hsl(0, 0%, 98%)");
        d.documentElement.style.setProperty("--Light-Mode-Text", "hsl(200, 15%, 8%)");
        d.documentElement.style.setProperty("--Dark-Mode-Text-and-Light-Mode-Elements", "hsl(0, 0%, 100%)");

        $btnTheme.setAttribute("data-theme", "dark");

        localStorage.setItem("theme-5","light")
   }

    const LocalstorageTheme = () =>{
    if (localStorage.getItem("theme-5") === null) {
        localStorage.setItem("theme-5","light");
    }

    if (localStorage.getItem("theme-5") === "light") {
        lightmode();
    }

    if (localStorage.getItem("theme-5") === "dark") {
        darkmode();
    }
    }

    LocalstorageTheme()

    $btnTheme.addEventListener("click", () => {
        if ($btnTheme.getAttribute("data-theme") === "dark") {
          darkmode();
        } else {
          lightmode();
        }
      });


   
}