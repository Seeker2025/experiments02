////// Event Delegation
////// OOP

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



class Peace{
    constructor(town, village) {
        this.town = town;
        this.village = village;
        
    }
}
const boo02 = new Peace('Bucha', 'Fastiv');
console.log(boo02);

