////// Event Delegation
////// OOP
////// Cars
////// Tic Tac Toe

import cars from '../data/cars.js' 

////// it does not work
// class Gallery {
//     constructor({galleryGallery, galleryImage}) {
//         this.galleryGallery = galleryGallery,
//         this.galleryImage=galleryImage
//     }
//     onGallery(event) {
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log(event.target.nodeName);
//     if (event.target.nodeName !== 'IMG') {
//        return;
//     }
//     // console.log(event.target.nodeName);
//     // console.log(galleryImage.src);
    
//     this.galleryImage.src = galleryImage.dataset.source;
//     this.galleryGallery.classList.add('fix');
//     }
//     addListeners() {
//     galleryGallery.addEventListeners('click', this.onGallery.bind(this))
//     }
//     init() {
//         this.addListeners();
//     }
   
// };
// const refs = {
//     galleryGallery: document.querySelector('.js-gallery'),
//     galleryImage: document.querySelector('.gallery__image'),
// };
 
// new Gallery(refs).init()

// class Train{
//     constructor(boy, girl) {
//         this.boy = boy;
//         this.girl = girl;
//     }
// }
// const train02 = new Train('Pete', 'Sarah');
// const train03 = new Train('Mark', 'Rebecca');
// console.log(train02);
// console.log(train03);

// const thisUl = document.querySelector('.this_ul');//// это ul
// console.log(Array.isArray([...thisUl.children]));//// Псевдомассив преобразуем в массив

// console.log(cars);

const container = document.querySelector('.js-container');

const carsMarkup = cars.map(({ id, img, car }) => {
    //// Одинаковый класс на три разных элемента.
    //// Что бы отлавить event.target

    return `
    <ul >
    <li data-car-id="${id}" class="js-target">
    <img src="${img}" class="js-target"
    alt="${car}"
    width="200">
    <h2 class="js-target">${car}</h2>
    </li>
    </ul>
    `
}).join('');
container.insertAdjacentHTML('beforeend', carsMarkup);

// console.log(container);

container.addEventListener('click', onClick);

function onClick(event) {
    // console.log(event.target);
    if (!event.target.classList.contains('js-target')) {
        // console.log('Whoa!')
        return;
    }
    const { target } = event;
    //////левая часть выражения не нужна!
    const carId = target.dataset.carId ?? target.closest('li').dataset.carId;
   
    console.log(carId);
    const currentItem = cars.find(({ id }) => id === Number(carId));
    // console.log(currentItem);
    
    const {img, car, type, price} = currentItem;
    const instance = basicLightbox.create(`
    <div class="bg">
    <img src="${img}" width="300" alt="${car}"
    <h2>${car}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
    </div>
`, {
    ////// There are objects here 
});
    instance.show();

const esc = 'Escape';
document.addEventListener('keydown', toKeyDown);
function toKeyDown(event) {
    if (event.key === esc) {
        // console.log("whoa!");
        instance.close();
    }
}
}

// ////// For Examples for basicLightbox
// const instance = basicLightbox.create(`
// //     <h1>Dynamic Content</h1>
// //     <p>You can set the content of the lightbox with JS.</p>
// // `)
// // console.log(instance);
// // instance.show();

////// Tic Tac Toe
const containerTic = document.querySelector('.js-content');
// console.log(containerTic);
 
let player = 'X';
const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
let historyX = [];
let historyY = [];

////// Date attributes are strings only!
function createMarkup() {
    let markup = '';
    for (let i = 1; i < 10; i += 1){
    markup +=`<div class="item js-item" data-id="${i}"></div>`
}
containerTic.innerHTML = markup;
}
createMarkup();
// containerTic.insertAdjacentHTML('beforeend', markup)

containerTic.addEventListener('click', onClickTic);

 const winnerIs = document.querySelector('.winner_is');
//  console.log(winnerIs);
function onClickTic(evt) {
    if (!evt.target.classList.contains('js-item')||evt.target.textContent ) {
        return;
        // console.log('Hi!');
    }
    const { target } = evt;
    const id = Number(target.dataset.id);
    let result = false; 
    
    if (player === 'X') {
        historyX.push(id);
        result = isWinner(historyX);
    } else {
        historyY.push(id)
        result = isWinner(historyY);
    }
    // console.log(evt.target);
    // console.log(evt.currentTarget);
    // console.log(historyX);
    // console.log(historyY);
    target.textContent = player;
    console.log(result);

    if (result) {
        // console.log('Winner is', `${player}`);
        winnerIs.textContent = `Hooray! Winner is player${player}`;
        resetGame();
        return;
    } else if(historyX.length+historyY.length===9){
        // console.log('Try again', `${player}`);
        winnerIs.textContent = `Hooray! Winner is player${player}`
        resetGame();
        return;
    }
    // console.log(target.textContent);
    player = player === 'X' ? 'O' : 'X';
}

function isWinner(arr) {
    return win.some(item => item.every(id => arr.includes(id)))
}

function resetGame() {
    createMarkup();
    historyX = [];
    historyY = [];
    player = 'X'
}


// const arr07 = [1, 2, 3,];
// console.log([1, 2, 3].every(item => arr07.includes(item)));


//////exp
// const arr05 = [1, 2, 4];
// const arr = [[1, 2, 4], [1, 2, 5]];
// const arrNew = [4, 2, 1];
// const arr02 = arr.some(itm => itm === 5);
// // console.log(arr02);
// const arr06 = arr.every(itm => {
//     return (itm < 6);
// } );
// console.log(arr06);
// const arr04 = arr.some(itm=>itm.every(item=>arrNew.includes(item)));
// console.log(arr04);
// ////// includes() with string. Well done!
// const str = 'pye';
// console.log(str.includes('p'));////// true

//////exp
// if (false){
//     console.log('Hi!');
// }else if(true){
//      console.log('Boo! 02');
// }
// if (false){
//     console.log('Hi!');
// }else{
//      console.log('Boo! 04');
// }

////// methods
console.log([1, 2, 3].find(itm=>itm===2));//// 2
console.log([1, 2, 3].some(itm=>itm===3));////true
console.log([1, 2, 3].some(itm=>true));////true
console.log([1, 2, 3].every(itm=>[4, 5, 6]));////true
console.log([1, 2, 3].every(itm=>true));////true
console.log([1, 2, 3].every(itm => false));////false
//////  split
const str = 'The quick brown fox jumps over the lazy dog';
const words = 'quick';
const arr = str.split(' ');
const arr02 = words.split(' ');
const arr03 = words.split('');
console.log(Array.isArray(arr));//////true
console.log(arr);//////['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
console.log(arr02);/////['quick']
console.log(arr03);/////['q', 'u', 'i', 'c', 'k']

let getEll = selector => document.querySelector(selector);
console.log(getEll('.winner_is'));  //////<h3 class="winner_is">Who is Winner?</h3>
console.log(getEll('.container_Tic')); ///<div class="container_Tic"></div>





//////_.debounce
const tech = [
    { label: 'HTML' },
    { label: 'CCS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQL' },
    { label: 'PostgresSQL' },
    { label: 'MongoDB' },
];
const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};
function createListItemMarkup(items) {
    return items.map(item => {
        return `
            <li class="li">${item.label}</li>
        `
    }).join('');
}
// console.log(refs.list);
// console.log(refs.input);
// console.log(createListItemMarkup(tech));
populateList(createListItemMarkup(tech))
refs.input.addEventListener('input', _.debounce(onFilterChange, 300));
function onFilterChange(event) {
    // console.log(event.target.value.toLowerCase());
    const filter = event.target.value.toLowerCase();
    let filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));
    console.log(filteredItems);
    const listItemMarkup = createListItemMarkup(filteredItems);
    // console.log(listItemMarkup);
        populateList(listItemMarkup)
}
function populateList(markup) {
    refs.list.innerHTML = markup;
}



////// Tasks. FSOn 77 Moдуль 7 Урок 2 Артём Рисіч 29032023

////// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований 
////// масив Потрібно перебарати масив і якщо він має об'єкти в яких дублюються айді
////// то квонтіті цих єлементів потрібно сплюсувати а ті об'єкти в яких айді
////// співпав видалити з масиву. Потрібно мутувати масив,
////// створювати новий не потрібно.
const products = [
    {
        id: 'sku1',
        qty: 1,
    },
    {
        id: 'sku2',
        qty: 2,
    },
    {
        id: 'sku3',
        qty: 3,
    },
    {
        id: 'sku1',
        qty: 6,
    },
    {
        id: 'sku1',
        qty: 8,
    },
    {
        id: 'sku2',
        qty: 19,
    },
    {
        id: 'sku4',
        qty: 1,
    },
];

/////// Функция не имеет return. Массив сложный ссылочный тип return не нужен
let a = 0;
function sortProduct(arr) {
    for (let i = 0; i < arr.length; i += 1){
        console.log('поточний >>>>>>>', i,  arr[i]);
            for (let j = i + 1; j < arr.length; j += 1){
            console.log('наступний', j, arr[j]);
            if (arr[i].id === arr[j].id) {
                console.log(arr[i].qty += arr[j].qty);
                arr[i].qty += arr[j].qty;
                arr.splice(j, 1);
                j -= 1;
                // console.log(arr[i].qty);
                // console.log(a);
            }
           
        }
    }
}

sortProduct(products);
console.log(products);

////// task
////// У кожному масиві є унікальний рядок, у якому не повторюються літери.
////// Знайдіть і виведіть цей рядок
/////console.log(findUniq(['abc', 'acd', 'bac', 'foo', 'bca', 'cab', 'cba']));//==='foo'
/////console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf']));//==='abcd'
/////console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac']));//==='qwe'

const str01 = 'abc';
console.log(str01.split('').every(t=>t==='a')); //false
console.log(str01.split('').includes('a'));     //true

const str02 = 'abcd';
console.log(str02.split('')); ////['a', 'b', 'c', 'd']
console.log('abcd'.split('').slice(-2)); ////['c', 'd']
console.log('abcd'.split('').slice(1));  ////['b', 'c', 'd']


// const arrLar = ['abc', 'acd', 'bac', 'foo', 'bca', 'cab', 'cba',];
const arrLar = ['abc', 'acb', 'foo'];
console.table(arrLar);

// for (let i = 0; i < arrLar.length; i += 1) {
//         console.log(i);
//     for (let j = 0; j < arrLar.length; j += 1) {
//         if (i !== j) {
//              console.log('поточне', arrLar[i]);
//              console.log('порівнюю з', arrLar[j]);
//         }
           
    
//        }
//     }

////// сравниваем два массива
const arr05 = ['abc'];
const arr06 = ['abc'];
console.log(arr05.every(itm => itm.includes(arr06.map(itm=>itm))));//// true