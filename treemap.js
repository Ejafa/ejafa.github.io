(() => {
  const figure = document.querySelector('.profile-mix');
  if (!figure) return;

  const photos = [...figure.querySelectorAll('[data-photo]')];
  const playback = figure.querySelector('.mix-playback');
  const counter = figure.querySelector('.mix-counter');
  let active = 0;
  let paused = false;
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
    });
    counter.textContent = `${String(active + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
  }

  playback.addEventListener('click', () => {
    paused = !paused;
    updatePlayback();
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(figure);
  }

  // Keep the original portrait first; cycle every photo through all five spatial roles.
  window.setInterval(() => {
    if (!paused && visible && !document.hidden) {
      show((active + 1) % photos.length);
    }
  }, 6500);

  updatePlayback();
  figure.querySelector('.mix-controls').hidden = false;
})();
