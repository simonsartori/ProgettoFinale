const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('side-menu.show');
});