document.addEventListener("DOMContentLoaded", async function () {
  const placeholder = document.getElementById("header-placeholder");

  if (!placeholder) return;

  try {
    const response = await fetch("header.html");
    if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);

    const html = await response.text();
    placeholder.innerHTML = html;

    // MENU MOBILE: va inizializzato DOPO aver inserito l'header
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
      });
    }

  } catch (error) {
    console.error("Errore caricamento header:", error);
  }
});