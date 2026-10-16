(() => {
  const figure = document.querySelector('.profile-mix');
  if (!figure) return;

  const photos = [...figure.querySelectorAll('[data-photo]')];
  const selectors = [...figure.querySelectorAll('[data-select]')];
  const playback = figure.querySelector('.mix-playback');
  const counter = figure.querySelector('.mix-counter');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let paused = motion.matches;
  let hovered = false;
  let focused = false;
  let visible = true;

  function updatePlayback() {
    playback.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} photo rotation`);
    playback.replaceChildren(document.createTextNode(paused ? 'Play ' : 'Pause '));
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = paused ? '▷' : 'Ⅱ';
    playback.append(icon);
  }

  function show(index) {
    active = index;
    photos.forEach((photo, i) => {
      photo.dataset.slot = String((i - active + photos.length) % photos.length);
      photo.setAttribute('aria-pressed', String(i === active));
    });
    selectors.forEach((button, i) => button.setAttribute('aria-pressed', String(i === active)));
    counter.textContent = `${String(active + 1).padStart(2, '0')} / 03`;
  }

  function select(index) {
    paused = true;
    show(index);
    updatePlayback();
  }

  photos.forEach((photo, i) => photo.addEventListener('click', () => select(i)));
  selectors.forEach((button, i) => button.addEventListener('click', () => select(i)));
  playback.addEventListener('click', () => {
    paused = !paused;
    updatePlayback();
  });

  // Hover and keyboard focus temporarily stop rotation without changing the user's setting.
  figure.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') hovered = true; });
  figure.addEventListener('pointerleave', () => { hovered = false; });
  figure.addEventListener('focusin', () => { focused = true; });
  figure.addEventListener('focusout', event => { focused = figure.contains(event.relatedTarget); });
  motion.addEventListener('change', event => {
    if (event.matches) {
      paused = true;
      updatePlayback();
    }
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(figure);
  }

  // Keep the coastal portrait first; cycle each photo through all three spatial roles.
  window.setInterval(() => {
    if (!paused && !hovered && !focused && visible && !document.hidden) {
      show((active + 1) % photos.length);
    }
  }, 6500);

  updatePlayback();
  figure.querySelector('.mix-controls').hidden = false;
})();
