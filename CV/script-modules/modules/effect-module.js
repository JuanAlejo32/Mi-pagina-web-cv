const d = document;

export function scaleEffect(domelement, classelement) {
  d.querySelectorAll(domelement).forEach((elemento) => {
    elemento.classList.add(classelement);
  });
}
