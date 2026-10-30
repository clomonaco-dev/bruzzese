document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#siteMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const slider = document.querySelector('#workSlider');
  if (!slider) return;

  const stage = slider.querySelector('.slider-stage');
  const slides = [...slider.querySelectorAll('.slide')];
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const nextBtn = slider.querySelector('.slider-btn.next');

  if (!stage || !slides.length) return;

  let currentSlide = 0;
  let startX = 0;
  let movedX = 0;
  let isDragging = false;
  let hasDragged = false;

  function renderCoverflow() {
    slides.forEach((slide, index) => {
      slide.className = 'slide';

      const diff = (index - currentSlide + slides.length) % slides.length;

      if (diff === 0) slide.classList.add('active');
      else if (diff === 1) slide.classList.add('next');
      else if (diff === 2) slide.classList.add('far-next');
      else if (diff === slides.length - 1) slide.classList.add('prev');
      else if (diff === slides.length - 2) slide.classList.add('far-prev');
    });
  }

  function goNext() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderCoverflow();
  }

  function goPrev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderCoverflow();
  }

  stage.addEventListener('pointerdown', e => {
    isDragging = true;
    hasDragged = false;
    startX = e.clientX;
    movedX = 0;

    stage.classList.add('is-dragging');
    stage.setPointerCapture(e.pointerId);
  });

  stage.addEventListener('pointermove', e => {
    if (!isDragging) return;

    movedX = e.clientX - startX;

    if (Math.abs(movedX) > 8) {
      hasDragged = true;
    }
  });

  stage.addEventListener('pointerup', () => {
    if (!isDragging) return;

    if (movedX > 45) goPrev();
    if (movedX < -45) goNext();

    isDragging = false;
    stage.classList.remove('is-dragging');
  });

  stage.addEventListener('pointercancel', () => {
    isDragging = false;
    stage.classList.remove('is-dragging');
  });

  stage.addEventListener('dragstart', e => {
    e.preventDefault();
  });

  slides.forEach(slide => {
    slide.addEventListener('click', e => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);

  renderCoverflow();
});