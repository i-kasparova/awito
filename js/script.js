'use strict';

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item'),
    modalClass = document.querySelectorAll('.modal'),
    modalBlock = document.querySelectorAll('.modal__block');

document.addEventListener('keydown', (event) => { // event можно без круглых скобок
    if (event.code === 'Escape') {
        modalAdd.classList.add('hide');
        modalSubmit.reset();
        modalItem.classList.add('hide');
    }
})

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
})

for (let modalClassItem of modalClass) {
    modalClassItem.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.modal__close') || target !== modalBlock) {
            modalClassItem.classList.add('hide');
            modalSubmit.reset();
        }
    })
}

catalog.addEventListener('click', event => {
    if (event.target.closest('.card')) {
        modalItem.classList.remove('hide');
    };
})

modalItem.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.modal__close') || target === modalItem) {
        modalItem.classList.add('hide');
    }
})