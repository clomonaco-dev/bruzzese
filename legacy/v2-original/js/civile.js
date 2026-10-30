document.addEventListener('DOMContentLoaded', () => {
  // anno footer
  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  // menu mobile
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('#navigationLinks');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});