function handleEscClose(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) closeModal(openedPopup);
    }
}

// Ф-ия открытия модального окна
function openModal(modalElement) {
    modalElement.classList.add('popup_is-opened'); 

    document.addEventListener('keydown', handleEscClose);
}

// Ф-ия закрытия модального окна
function closeModal(modalElement) {
    modalElement.classList.remove('popup_is-opened');

    document.removeEventListener('keydown', handleEscClose);
}

export { openModal, closeModal, handleEscClose };