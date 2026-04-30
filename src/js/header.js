document.addEventListener("DOMContentLoaded", async function () {
  const placeholder = document.getElementById("header-placeholder");

  if (!placeholder) {
    console.error("Manca <div id='header-placeholder'></div> nella pagina");
    return;
  }

  try {
    const response = await fetch("header.html");

    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    const html = await response.text();
    placeholder.innerHTML = html;
  } catch (error) {
    console.error("Errore caricamento header:", error);
  }
});