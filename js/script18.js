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


////// Butons
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










////// Buttons Repeating
const box_button = document.querySelector('.js_box_button');
// console.log(box_button);
box_button.addEventListener('click', clickOnBox);
function clickOnBox(event03) {
    // console.log(event03.target);

    if (event03.target.nodeName !== 'BUTTON') {
        return;
    }
    // else{console.log('Hi!')}
    const activeButton = document.querySelector('.button_style');
    // if (activeButton) {
    //     activeButton.classList.remove('button_style');
    // }

    event03.target.classList.toggle('button_style');
}
