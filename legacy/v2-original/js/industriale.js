document.addEventListener('DOMContentLoaded', () => {
  // anno footer
  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  // menu mobile
  const navButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#mainMenu');

  if (navButton && navMenu) {
    navButton.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});