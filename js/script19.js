////// Event Delegation
////// OOP

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

console.log(container);

container.addEventListener('click', onClick);

function onClick(event) {
    // console.log(event.target);
    if (!event.target.classList.contains('js-target')) {
        // console.log('Whoa!')
        return;
    }
    const { target } = event;
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
`);
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






