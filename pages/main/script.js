const dom = {
    body: document.querySelector('body'),
    header: document.querySelector('header'),
    menu: document.querySelector('nav'),
    burger: document.querySelector('#burger__menu'),
    carusel: document.querySelector('.carusel'),
    caruselContainer: document.querySelector('.carusel-container'),
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

function getCardQuantity() {
    return Math.round(dom.caruselContainer.clientWidth/(360));
}



function buildPetCard(pet) {
    return `
        <figure>
            <img src="${pet.img}" alt="pet picture">
            <figcaption>${pet.name}</figcaption>
        </figure>
        <button>Learn more</button>
    `
}


function shufflePetCards() {
    const quantity = getCardQuantity();
    let arr = [];
    while (arr.length != quantity) {
        let j = Math.floor(Math.random() * (pet.length));
        if (arr.indexOf(j) == -1) {
          arr.push(j);
        }
    }
    return arr;
}

let randomIdx = shufflePetCards()

for (let i of randomIdx) {
    let card = document.createElement('div');
    card.innerHTML = buildPetCard(pet[i]);
    card.className = 'card';
    dom.caruselContainer.append(card);
}


function changeCards (evt) {
    const elem = evt.target;
    if(elem.classList.contains('arrow')) {
        let newCards = getNewCards();
        const cards = document.querySelectorAll('.card');
        let count = 0;
        for(let card of cards) {
            card.innerHTML = buildPetCard(pet[newCards[count]]);
            count++;
        }
    }
}

dom.carusel.addEventListener('click', changeCards);


function getNewCards() {
    let result = getCardQuantity();
    let newIdx;
    while (result != 0) {
        let arr = shufflePetCards();
        for (i of arr) {
            if (randomIdx.indexOf(i) == -1 ) {
                result--;
            } else {
                result = getCardQuantity();
            };

            if (result == 0) {
                newIdx = arr;
            }
        };
    }
    randomIdx = newIdx;
    return newIdx;
}