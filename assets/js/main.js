const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}  

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const swiperHome = new Swiper('.home__swiper', {
  loop: true,
  sliderPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}   
window.addEventListener('scroll', bgHeader)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-foggy-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body. classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon-fill' : 'ri-sun-foggy-line'

if (selectedTheme) {

document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove' ](iconTheme)
}

themeButton.addEventListener('click', () => {
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
localStorage. setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())

})

