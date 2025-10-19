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

// ----- Toggle de facturación (Mensual/Anual) ----- //
const billingButtons = document.querySelectorAll('.billing-btn');
const priceAmounts = document.querySelectorAll('.price-amount');

billingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.billing; // 'monthly' | 'yearly'
    billingButtons.forEach(b => b.classList.toggle('is-active', b === btn));
    priceAmounts.forEach(el => {
      const value = el.getAttribute(`data-${mode}`);
      if (value) el.textContent = value;
    });
  });
});
