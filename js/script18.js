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















////// This is color picker
const boxForManyCards = document.querySelector('.box__forManyCards');
// console.log(colors);
console.log(boxForManyCards);

function generateCard() {
    return colors.map((col) => {
        return `<div class="oneCard">
        <div
        class="color-swatch"
        style="background-color:gold";
        >
        </div>
        
        </div>
        ` 
}).join(' ');

}
boxForManyCards.insertAdjacentHTML('beforeend', generateCard())

//  console.log(generateCard());

    














