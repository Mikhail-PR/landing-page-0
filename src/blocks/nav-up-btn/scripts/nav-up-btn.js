const upBtnEl = document.querySelector('.nav-up-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        upBtnEl.classList.add('nav-up-btn--show');
    } else {
        upBtnEl.classList.remove('nav-up-btn--show');
    }
});