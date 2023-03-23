const dom = {
    body: document.querySelector('body'),
    headerWrapper: document.querySelector('.header-wrapper'),
    header: document.querySelector('header'),
    menu: document.querySelector('nav'),
    burger: document.querySelector('#burger__menu'),
    petsWrapper: document.querySelector('.our-friends'),
};

function clickBurger(evt) {
    evt.stopPropagation();
    dom.burger.classList.toggle('active__menu');

    if (dom.burger.classList.contains('active__menu')) {
        showBurgerMenu();
    } else {
        closeBurgerMenu();
    };
}

function showBurgerMenu () {
    dom.header.classList.add('open__menu');
    dom.body.classList.add('hide');
    dom.petsWrapper.style.marginTop = '120.2px';
    dom.headerWrapper.style.marginRight = '0px';
}

function closeBurgerMenu() {
    dom.header.classList.remove('open__menu');
    dom.body.classList.remove('hide');
    dom.petsWrapper.style.marginTop = '0px';
    dom.headerWrapper.style.marginRight = 'auto';
}

dom.burger.addEventListener('click', clickBurger);
dom.header.addEventListener('click', function(evt) {
    const elem = evt.target;

    if (!elem.closest('nav') || elem.closest('li')) {
        dom.burger.classList.remove('active__menu');
        closeBurgerMenu();
    }
});