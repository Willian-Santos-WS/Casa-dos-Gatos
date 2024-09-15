const navMenu = document.querySelector('#navMenu');
const botaoMenu = document.querySelector('#botaoMenu');

const closeMenu = () => {
  navMenu.style.display = 'none';
}

const openMenu = () => {
  navMenu.style.display = 'block';
}

const openRelato = (x) => {
  x.parentNode.lastElementChild.style.display = 'flex';
  document.querySelector('.fechaRelato').style.position = 'fixed';
  document.querySelector('html').style.overflow = 'hidden';
}

const closeReport = (x) => {
  x.parentNode.style.display = 'none';
  document.querySelector('.fechaRelato').style.position = 'absolute';
  document.querySelector('html').style.overflow = '';
}

addEventListener('scroll', () => {
  closeMenu();

  if (window.scrollY > 100 && window.innerWidth < 601) {
    botaoMenu.style.display = 'block';
  } else {
    botaoMenu.style.display = 'none';
  }
})

const openFelino = (id) => {
  document.querySelector('#' + id).style.display = 'flex';
  document.querySelector('.fechaRelato').style.position = 'fixed';
}