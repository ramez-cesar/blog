const btnHamburgerMenu = document.querySelector('#btn_hamburger__menu')
const headerMenuNavbar = document.querySelector('.header-menu-navbar')
const navMenu = document.querySelectorAll('.nav-menu')

btnHamburgerMenu.addEventListener('click', () => {
  headerMenuNavbar.classList.toggle('show-menu')
})

navMenu.forEach(menu => {
  menu.addEventListener('click', () => {
    headerMenuNavbar.classList.remove('show-menu')
  })
})
