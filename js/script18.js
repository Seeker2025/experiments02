import colors from '../data/colors.js'




///// destructuring
// const isObjToDestruction = {
//     name01: 'Masha',
//     name02: 'Lena',
//     boy: 'Mark',
//     father: 'Abraham',
//     woman: 'Sarah',
//     girl: 'Rebecca',
// };
// const{ name01, boy, woman } = isObjToDestruction;
// console.log(name01, boy, woman);


//// Form
//// Собираем данные из формы в объект с помощью elements
// const formEl = document.querySelector('.js-form');
// // console.dir(formEl);
// formEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//     evt.preventDefault();
//     // console.log(evt.currentTarget);
//     // console.log(evt.currentTarget.elements.userEmail.value);
//     const { userAge, userEmail, userName } = evt.currentTarget.elements;
//     // console.dir(evt.currentTarget);
//     // console.log(userAge.value);
//     // console.log(userEmail.value);
//     // console.log(userName.value);
//     const data = {
//     name: userName.value,
//     email: userEmail.value,
//     age: userAge.value,
// };
// console.log(data);
// }


////// Buttons
// const container = document.querySelector('.js-container');
// container.addEventListener('click', onClick);
// function onClick(event02) {
//     if (event02.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     // console.log(event02.target);
//     // console.log(event02.currentTarget);
//     const currentActiveBtn = document.querySelector('.button_style');
//     if (currentActiveBtn) {
//        currentActiveBtn.classList.remove('button_style');
//     }
//     event02.target.classList.add('button_style');
// }













//////Event delegation

////// This is color picker
// const paletteContainer = document.querySelector('.js-palette');
// // console.log(colors);
// // console.log(paletteContainer);

// function generateCard() {
//     return colors.map(({ hex, rgb }) => {
//         return `
//         <div class="color-card">
//             <div
//                 class="color-swatch"
//                 data-hex="${hex}"
//                 data-rgb="${rgb}"
//                 style="background-color:${hex}"
//             ></div>

//             <div class="color-meta">
//                 <p>HEX: ${hex}</p>
//                 <p>RGB: ${rgb}</p>
//             </div>
//         </div>
//         ` ;
// }).join(' ');

// }
// const layout = generateCard();
// paletteContainer.insertAdjacentHTML('beforeend', layout);

// paletteContainer.addEventListener('click', toFun02);
// console.log(paletteContainer);
// function toFun02(evt04) {
//     // console.log(evt04.target);
//     if (!evt04.target.classList.contains('color-swatch')) {
//         return;
//     }
   
//     const jsActive = evt04.target.parentNode;

//     const arr02 = document.querySelector('.color-card.js-active');
    
//     if (arr02) {
//        arr02.classList.remove('js-active')
//      }
//     jsActive.classList.add('js-active');
  
//     document.body.style.backgroundColor = evt04.target.dataset.hex;
//     // console.log(evt04.target.dataset.hex);
// }

//////Event delegation 02
//////Data atributes (dataset)
// const refParent = document.querySelector('.parent');
// const refInner = document.querySelector('.inner');
// const refChild = document.querySelector('.child');
// // console.log(refParent);
// // console.log(refInner);
// // console.log(refChild);
// refChild.addEventListener('click', childFun);
// refInner.addEventListener('click', innerFun);
// refParent.addEventListener('click', ParentFun);
// function childFun(evt05) {
//     console.log(evt05.target);
//     // console.log(evt05.currentTarget);
//     console.log(evt05.target.dataset.ob01);
// }
// function innerFun(evt05) {
//     console.log(evt05.target);
//     console.log(evt05.currentTarget);
//     console.log(evt05.currentTarget.dataset.ob02);
// }
// function ParentFun(evt05) {
//     // console.log(evt05.target);
//     // console.log(evt05.currentTarget);
// }
// //////Data atributes (dataset)
// console.log(refChild.dataset.ob01);
// console.log(refInner.dataset.ob02);

////// Gallery
const galleryGallery = document.querySelector('.js-gallery');
// console.log(galleryGallery);
const galleryLink = document.querySelector('.gallery__link');
const galleryImage = document.querySelector('.gallery__image');
// console.log(galleryLink);
// console.log(galleryImage.dataset.source);
// console.log(galleryImage.src);
galleryGallery.addEventListener('click', largeImg);
function largeImg(event) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event.target.nodeName);
    if (event.target.nodeName !== 'IMG') {
       return;
    }
    // console.log(event.target.nodeName);
    // console.log(galleryImage.src);
    galleryImage.src = galleryImage.dataset.source;
    galleryGallery.classList.add('fix');
}
//////Cross for Close 
const galleryClose = document.querySelector('.gallery__close');
galleryClose.addEventListener('click', closeFun);
function closeFun(event){
    console.log(event.target.nodeName);
    galleryImage.src = "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg"
    galleryGallery.classList.remove('fix');
}














////// Color Picker 02
// console.log(colors);

const newMass = colors.map(itm => {
    return `<div class="box__elem">
            <div class="box__color"
            style="background: ${itm.hex}"
            >

            </div>
            <p>color RGB ${itm.rgb}</p>
            <p>color HEX ${itm.hex}</p>

    
    
    </div>`
}).join('');


const boxGallery02 = document.querySelector('.box__gallery_02');
boxGallery02.insertAdjacentHTML('beforeend', newMass);


    














