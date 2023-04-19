const menu = document.querySelector('[data-menu]');
const menuList = document.querySelector('.modal__nav-menu-list');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
menuList.addEventListener('click', onMenuListClick);

function toggleMenu() {
  menu.classList.toggle('is-hidden');

  !menu.classList.contains('is-hidden')
    ? (document.querySelector('body').style.overflow = 'hidden')
    : (document.querySelector('body').style.overflow = 'visible');
}

function onMenuListClick(event) {
  if (event.target.nodeName === 'A') {
    toggleMenu();
  }
}
