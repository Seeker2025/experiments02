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

const formEl = document.querySelector('.js-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { userAge, userEmail, userName } = evt.currentTarget.elements;
    // console.dir(evt.currentTarget);
    // console.log(userAge.value);
    // console.log(userEmail.value);
    // console.log(userName.value);
    
    const data = {
    name: userName.value,
    email: userEmail.value,
    age: userAge.value,
};
console.log(data);
}





