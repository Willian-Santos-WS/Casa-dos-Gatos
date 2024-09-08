const navMenu = document.querySelector('#navMenu');
const botaoMenu = document.querySelector('#botaoMenu');

const closeMenu = () => {
  navMenu.style.display = 'none';
}

const openMenu = () => {
  navMenu.style.display = 'block';
}

addEventListener('scroll', () => {
  if (window.innerWidth < 600) {
    closeMenu();

    if (window.scrollY > 100) {
      botaoMenu.style.display = 'block';
    } else {
      botaoMenu.style.display = 'none';
    }
  }
})