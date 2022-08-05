const d = document;

export function hamburguerButton (element1,element2,element3,element4){
  d.addEventListener("click",(e)=>{
    if (e.target.matches(element1)) {
        d.querySelector(element2).classList.toggle(element4);
    }

    if (e.target.matches(element3)) {
        d.querySelector(element2).classList.toggle(element4);
        d.querySelector(element1).checked =false
    }
  })
}
