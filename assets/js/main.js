// --- Menú móvil --- //
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    const expanded = mainNav.classList.contains('active');
    navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 850) {
        mainNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// --- Año dinámico en el footer --- //
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

