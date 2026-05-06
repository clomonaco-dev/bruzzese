document.addEventListener('DOMContentLoaded', () => {
  // anno footer
  const year = document.getElementById('year');
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

  // owl carousel
  if ($('.property-carousel').length) {
    $('.property-carousel').owlCarousel({
      loop: true,
      margin: 18,
      autoplay: true,
      autoplayTimeout: 4200,
      nav: false,
      dots: false,

      slideBy: 2,

      responsive: {
        0: {
          items: 1,
          slideBy: 1,
          stagePadding: 0
        },
        800: {
          items: 2,
          slideBy: 2,
          stagePadding: 0
        },
        1200: {
          items: 2,
          slideBy: 2,
          stagePadding: 0
        }
      }
    });
  }
});


// MODALE (load dopo tutto)
window.addEventListener('load', () => {
  const modal = document.getElementById('soldModal');
  if (!modal) return;

  const close = modal.querySelector('.sold-close');
  const modalLinks = modal.querySelectorAll('.sold-actions a');

  modal.classList.add('is-open');

  if (close) {
    close.addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
  }

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('is-open');
    }
  });

  modalLinks.forEach(link => {
    link.addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove('is-open');
    }
  });
});