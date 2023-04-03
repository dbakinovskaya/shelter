const dom = {
    body: document.querySelector('body'),
    headerWrapper: document.querySelector('.header-wrapper'),
    header: document.querySelector('header'),
    menu: document.querySelector('nav'),
    burger: document.querySelector('#burger__menu'),
    petsWrapper: document.querySelector('.our-friends'),
    cardsWrapper: document.querySelector('.pets-cards'),
    pageNumber: document.querySelector('.pageNumber'),
    firstBtn: document.querySelector('.first'),
    previousBtn: document.querySelector('.previous'),
    nextBtn: document.querySelector('.next'),
    lastBtn: document.querySelector('.last'),
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

const pet = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];

function buildPetCard(pet) {
    return `
        <figure>
            <img src="${pet.img}" alt="pet picture">
            <figcaption>${pet.name}</figcaption>
        </figure>
        <button>Learn more</button>
    `
}

function buildModalWindow(pet) {
    return `
        <div class="modal__window">
            <div class="modal__img">
                <img src="${pet.img}" alt="pet picture">
            </div>
            <div class="description">
                <h3>${pet.name}</h3>
                <h4>${pet.type} - ${pet.breed}</h4>
                <p>${pet.description}</p>
                <ul>
                    <li><b>Age:</b> ${pet.age}</li>
                    <li><b>Inoculations:</b> ${pet.inoculations.join(', ')}</li>
                    <li><b>Diseases:</b> ${pet.diseases.join(', ')}</li>
                    <li><b>Parasites:</b> ${pet.parasites.join(', ')}</li>
                </ul>
            </div>
            <button class="close__modal"> &#10006 </button>
        </div>
    `
}

function getCardQuantity() {
    const width = dom.cardsWrapper.clientWidth;
    switch (width) {
        case 1200:
            return 8;

        case 580:
            return 6;

        case 270:
            return 3;
    }
}

function generateArr(quantity) {
    let finalArr = [];
    while (finalArr.length != 48) {
        let first = shuffle();
        let second = shuffle();
        let third = shuffle();
        let part1 = second.slice(0, 4);
        let part2 = second.slice(4,8);

        if(!part1.includes(first[6]) && !part1.includes(first[7]) && !part2.includes(third[0]) && !part2.includes(third[1])) {
            finalArr = finalArr.concat(first, second, third);
        }
    }

    return finalArr;
}

function shuffle() {
    let arr = [];
    while (arr.length !=pet.length) {
        let idx = Math.floor(Math.random() * (pet.length))
        if (arr.indexOf(idx) == -1) {
            arr.push(idx);
        }
    }
    return arr;
}

let currentPage = 1;
const cardsQuantity = getCardQuantity();
const idxArray = generateArr(cardsQuantity);

function showCards(arr, cells, page) {
    dom.cardsWrapper.innerHTML = '';
    const start = cells * (page-1);
    const end = start + cells;
    const cardsIdx = arr.slice(start, end);

    cardsIdx.forEach((idx) => {
        const card = document.createElement('div');
        card.innerHTML = buildPetCard(pet[idx]);
        card.className = 'card';

        let modal = document.createElement('div');
        modal.innerHTML = buildModalWindow(pet[idx]);
        modal.className = 'modal__container';

        dom.cardsWrapper.append(card, modal);
    });
}

showCards(idxArray, cardsQuantity, currentPage);

function changePage(page) {
    showCards(idxArray, cardsQuantity, page);
    dom.pageNumber.innerText = page;
}

function checkButtons(page) {
    const pagesQuantity = idxArray.length / cardsQuantity;
    if (page == pagesQuantity) {
        dom.nextBtn.classList.remove('active');
        dom.lastBtn.classList.remove('active');
        dom.nextBtn.disabled = 'true';
        dom.lastBtn.disabled = 'true';

        dom.previousBtn.classList.add('active');
        dom.firstBtn.classList.add('active');
        dom.previousBtn.removeAttribute('disabled');
        dom.firstBtn.removeAttribute('disabled');

    } else if (page == 1) {
        dom.previousBtn.classList.remove('active');
        dom.firstBtn.classList.remove('active');
        dom.previousBtn.disabled = 'true';
        dom.firstBtn.disabled = 'true';

        dom.nextBtn.classList.add('active');
        dom.lastBtn.classList.add('active');
        dom.nextBtn.removeAttribute('disabled');
        dom.lastBtn.removeAttribute('disabled');
    } else {
        dom.nextBtn.classList.add('active');
        dom.lastBtn.classList.add('active');
        dom.previousBtn.classList.add('active');
        dom.firstBtn.classList.add('active');
        dom.nextBtn.removeAttribute('disabled');
        dom.lastBtn.removeAttribute('disabled');
        dom.previousBtn.removeAttribute('disabled');
        dom.firstBtn.removeAttribute('disabled');
    }
}

dom.nextBtn.addEventListener('click', function() {
    currentPage++;
    changePage(currentPage);
    checkButtons(currentPage);
});

dom.firstBtn.addEventListener('click', function() {
    currentPage = 1;
    changePage(currentPage);
    checkButtons(currentPage);
});

dom.previousBtn.addEventListener('click', function() {
    currentPage--;
    changePage(currentPage);
    checkButtons(currentPage);
});

dom.lastBtn.addEventListener('click', function() {
    currentPage = idxArray.length / cardsQuantity;
    changePage(currentPage);
    checkButtons(currentPage);
});

function showModal(evt) {
    const elem = evt.target;
    const scroll = scrollWidth();

    if (elem.closest('div.card')) {
        const modal = elem.closest('div.card').nextSibling;
        modal.style.display = 'block';
        modal.style.top = window.pageYOffset + 'px';
        modal.style.bottom ='-' + window.pageYOffset + 'px';
        dom.body.style.overflow = 'hidden';
        dom.body.style.marginLeft = '-' + scroll + 'px';
    }
}

function closeModal(evt) {
    const elem = evt.target;

    if (elem.closest('div.modal__container') && (!elem.closest('div.modal__window') || elem.className == 'close__modal')) {
        const modal = elem.closest('div.modal__container');
        modal.style.display = 'none';
        dom.body.style.overflow = 'auto';
        dom.body.style.marginLeft = '0px';
    }
}

function scrollWidth() {
    const scroll = window.innerWidth - document.documentElement.clientWidth;
    return scroll;
}

dom.cardsWrapper.addEventListener('click', showModal);
dom.cardsWrapper.addEventListener('click', closeModal);