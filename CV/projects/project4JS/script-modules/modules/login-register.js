const d = document;

const $sectionLogin = d.querySelector(".section-log"),
      $sectionRegister = d.querySelector(".section-register")

export const loginRegister = ()=>{

    if ($sectionRegister.style.display == "block") {
        $sectionRegister.style.display = "none"
        $sectionLogin.style.display = "block"
    }else{
        $sectionRegister.style.display = "block"
        $sectionLogin.style.display = "none"
    }

    setTimeout(() => {
        $sectionRegister.classList.toggle("login-show")
        $sectionLogin.classList.toggle("login-show")
    }, 200);


}