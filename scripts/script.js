const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.getElementById('navbar-items-container');

const toggleMenu = () => {
  menuBtn.classList.toggle('open');
  menuContainer.classList.toggle('open');
};
