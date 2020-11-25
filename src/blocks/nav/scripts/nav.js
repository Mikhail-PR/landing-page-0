const iconEl = document.querySelector('.menu-icon');
const iconWrapperEl = document.querySelector('.menu-icon__wrapper');
const navEl = document.querySelector('.nav');

iconWrapperEl.addEventListener('click', () => {
    iconEl.classList.toggle('menu-icon--active');
    navEl.classList.toggle('nav--show');
});