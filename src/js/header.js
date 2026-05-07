(async function () {
  const placeholder = document.getElementById("header-placeholder");
  if (!placeholder) return;

  try {
    const response = await fetch("header.html", {
      cache: "no-cache"
    });

    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    placeholder.innerHTML = await response.text();

    const toggle = placeholder.querySelector(".menu-toggle");
    const menu = placeholder.querySelector(".menu");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
      });
    }
  } catch (error) {
    console.error("Errore caricamento header:", error);
  }
})();