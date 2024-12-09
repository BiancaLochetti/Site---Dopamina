const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  nav.classList.toggle('show');
});