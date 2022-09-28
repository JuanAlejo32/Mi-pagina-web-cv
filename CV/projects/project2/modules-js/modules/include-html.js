const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  const fetchIncludeHtml = (el, url) => {
    let options = {
      method: "GET",
      headers: {
        "Content-type": "text/html; charset=utf-8",
      },
    };

    fetch(url, options)
      .then((res) => (res.ok ? res.text() : Promise.reject(res)))
      .then(function (html) {el.outerHTML = html;})
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "Error no se cargo la pagina HTML";
        $fetch.innerHTML = `Error ${err.status}: ${message} `;
      })
  };

  d.querySelectorAll("[data-include]").forEach((el) =>
    fetchIncludeHtml(el, el.getAttribute("data-include"))
  );
});
