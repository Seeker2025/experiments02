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







const refForm02 = document.querySelector('.form_02');
// console.log(refForm02);
refForm02.addEventListener('submit', toSentForm);

function toSentForm(event) {
    event.preventDefault();
console.log(event.currentTarget);
console.log(event.currentTarget.elements.userEmail.value);

    const { userName, userEmail, userPass } = event.currentTarget.elements;
    console.log(userName.value);
    console.log(userEmail.value);
    console.log(userPass.value);

    const dataMy = {
        name: userName.value,
        mail: userEmail.value,
        pass: userPass.value,
    };
    console.log(dataMy);
    
}


