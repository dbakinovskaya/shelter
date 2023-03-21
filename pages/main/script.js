const dom = {
    body: document.querySelector('body'),
    header: document.querySelector('header'),
    menu: document.querySelector('nav'),
    burger: document.querySelector('#burger__menu'),
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
}

function closeBurgerMenu() {
    dom.header.classList.remove('open__menu');
    dom.body.classList.remove('hide');
}

dom.burger.addEventListener('click', clickBurger);

dom.header.addEventListener('click', function(evt) {
    const elem = evt.target;

    if (!elem.closest('nav') || elem.closest('li')) {
        dom.burger.classList.remove('active__menu');
        closeBurgerMenu();
    }
});


