// ─── Navigation burger menu ───
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Fermer le menu au clic sur un lien (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Fermer en cliquant en dehors du menu
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
}
