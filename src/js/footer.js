document.addEventListener("DOMContentLoaded", async function () {
  const placeholder = document.getElementById("footer-placeholder");
  if (!placeholder) return;

  try {
    const response = await fetch("footer.html");
    if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);

    const html = await response.text();
    placeholder.innerHTML = html;

    const year = document.getElementById("currentYear");
    if (year) year.textContent = new Date().getFullYear();
  } catch (error) {
    console.error("Errore caricamento footer:", error);
  }
});