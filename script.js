document.addEventListener('scroll', () => {
  if(window.scrollY == 700 | window.scrollY == 800) {
    scrollTo(0, 748)
  }
  if(window.scrollY == 1448 | window.scrollY == 1548) {
    scrollTo(0, 1508)
  }
})

descricao = (img, name, desc) => {
  let nome = document.querySelector('#nomeDesc')
  let foto = document.querySelector('#fotoDesc')
  let descricao = document.querySelector('#textoDesc')

  nome.textContent = name
  foto.src = img.src
  descricao.textContent = desc

  nome.id = 'nomeDesc'
  foto.id = 'fotoDesc'
  descricao.id = 'textoDesc'

  d = document.querySelector('#descricao')
  d.style.display = 'flex'
  document.body.style.overflow = 'hidden'
}

fechar = (x) => {
  x.parentNode.style.display = 'none'
  document.body.style.overflow = ''
}