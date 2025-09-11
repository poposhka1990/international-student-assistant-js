const menuFirstLine = document.querySelector('.mobile-menu__first-line');
const menuSecondLine = document.querySelector('.mobile-menu__second-line');
const checkbox = document.querySelector('.menu__burger-checkbox');
const headerNavEl = document.querySelector('.header__navbar');
const headerEl = document.querySelector('.header');

checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        menuFirstLine.classList.add('open');
        menuSecondLine.classList.add('open');
        headerEl.classList.add('menu_mobile');
        headerNavEl.classList.add('menu_mobile');
    } else {
        menuFirstLine.classList.remove('open');
        menuSecondLine.classList.remove('open');
        headerEl.classList.remove('menu_mobile');
        headerNavEl.classList.remove('menu_mobile');
    }
})
