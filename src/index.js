import './styles/index.scss';

const mobileMenu = document.querySelector('.mobile-menu');
const btn = document.querySelector('.mobile-nav');


btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-opened');
   
})
