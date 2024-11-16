'use strict'
/////////Модалка из урока Саши Репеты
const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

//////добавляем класс на body для открытия модалки
///// только при открытом окне добавлятеся слушатель клавиши Escape
function onOpenModal() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', tooFun);
}
//////снимаем класс с  body для закрытия модалки
function onCloseModal() {
    document.body.classList.remove('show-modal');
}
////// Закрываем модалку кликом по фону
function onBackdropClick(event) {
    console.log('Click по фону');
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.currentTarget === event.target); 
    if (event.currentTarget === event.target) {
        document.body.classList.remove('show-modal');
    }
}
////// Закрываем модалку нажатием Escape
const keyESCAPE = 'Escape';
function tooFun(event) {
    if (keyESCAPE === event.code) {
        // console.log(event.code);
        // console.log('woah!');
        document.body.classList.remove('show-modal');
    };
}
    



////// Моя модалка
const modalRefObj = {
    openMyModalButton: document.querySelector('.my_button_class'),
    // myModal: document.querySelector('.modal__box'),
    sectionSec: document.querySelector('section'),
    closeBut: document.querySelector('.modal_window__close'),
    modalBox: document.querySelector('.modal__box'),
};
// console.log(modalRefObj.openMyModalButton);
// console.log(modalRefObj.myModal);
// console.log(modalRefObj.sectionSec);
modalRefObj.openMyModalButton.addEventListener('click', toOpenMyModalWindow);
//////Открываем модалку
function toOpenMyModalWindow() {
    modalRefObj.sectionSec.classList.add('section_class');
    console.log('Cheers!');
//////Добавляем закрытие модалки нажатием Escape
    window.addEventListener('keydown', toCloseByEscape);
}
modalRefObj.closeBut.addEventListener('click', toCloseModalWindow);
modalRefObj.modalBox.addEventListener('click', toCloseModalByDack);
function toCloseModalWindow() {
    modalRefObj.sectionSec.classList.remove('section_class');
}
function toCloseByEscape(event) {
    // console.log(event.code==='Escape')
    if (event.code === 'Escape') {
        modalRefObj.sectionSec.classList.remove('section_class');
        console.log('Hi!');
    }
////// снимаем слушатель ожидающий нажатие Escape
   window.removeEventListener('keydown', toCloseByEscape); 
}
function toCloseModalByDack(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
        modalRefObj.sectionSec.classList.remove('section_class');
    }
}