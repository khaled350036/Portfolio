// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Copy email to clipboard
const copyEmailBtn = document.getElementById('copyEmail');
const emailHint = copyEmailBtn.querySelector('.contact-hint');
const originalHint = emailHint.textContent;

copyEmailBtn.addEventListener('click', async () => {
  const value = copyEmailBtn.getAttribute('data-value');
  try {
    await navigator.clipboard.writeText(value);
    emailHint.textContent = 'Copied ✓';
  } catch (err) {
    emailHint.textContent = 'Copy failed — select manually';
  }
  setTimeout(() => { emailHint.textContent = originalHint; }, 2000);
});
