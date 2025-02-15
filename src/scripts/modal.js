import { nameInput, jobInput, popupTypeEdit } from "./index.js";

//Функция открытия попапа
export function openPopup(button, popup) {
    button.addEventListener('click', () => {
        popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', handleEscClose);
    })
};

// Функция закрытия попапа
export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscClose);
}

// Функция обработки нажатия клавиши Esc
export function handleEscClose(event) {
    if (event.key === 'Escape') {
        const openPopup = document.querySelector('.popup_is-opened');
        if (openPopup) {
            closePopup(openPopup);
        }
    }
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
export function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameValue;
    profileDescription.textContent = jobValue;
    closePopup(popupTypeEdit);
}