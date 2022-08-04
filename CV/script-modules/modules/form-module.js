export function formMail(){
    const $form = document.querySelector(".form-container"),
    $formloader = document.querySelector(".form-loader"),
    $formmensaje = document.querySelector(".container-modal"),
    $formboton = document.querySelector(".fill");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $formloader.classList.remove("none");
    $formboton.classList.add("none");
    fetch("https://formsubmit.co/ajax/juanchosang@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText;
        $formmensaje.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        $formloader.classList.add("none");
        $formboton.classList.remove("none");
        setTimeout(() => {
          location.hash = "#";
        }, 3000);
      });
  });
}