const burger   = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

function openMenu() {
  burger.classList.add('active');
  navLinks.classList.add('open');
  document.body.classList.add('menu-open');
  burger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  burger.classList.remove('active');
  navLinks.classList.remove('open');
  document.body.classList.remove('menu-open');
  burger.setAttribute('aria-expanded', 'false');
}

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });
  // Fermer au clic sur un lien
  navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeMenu));
}

// Fermer avec Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
