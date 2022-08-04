const d = document;

export function responsiveText(resolution,domelement, desktoptext, mobiletext) { 
  const textChange = (e) => {
    if (e.matches) {
      d.querySelector(domelement).innerHTML =  mobiletext;
    } else {
      d.querySelector(domelement).innerHTML = desktoptext;    
    }
  }
  textChange(window.matchMedia(resolution))
  window.matchMedia(resolution).addEventListener("change", textChange);
}

