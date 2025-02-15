import '../pages/index.css';
import './cards.js';
import { initialCards } from './cards.js';
import { createCard, deleteCard, addCard, handleLike, handleImageClick, handleAddCard } from './card.js';
import { openPopup, closePopup, handleFormSubmit} from './modal.js';

// @todo: Темплейт карточки
export const placesList = document.querySelector('.places__list');
export const cardTemplate = document.querySelector('#card-template').content; 
initialCards.forEach(function (element) {
    addCard(createCard(element, deleteCard, handleLike, handleImageClick), placesList)
});

//6 проект

//Кнопка редактирования профиля
const editProfileButton = document.querySelector('.profile__edit-button');
//Попап редактирования
export const popupTypeEdit = document.querySelector('.popup_type_edit');
openPopup(editProfileButton, popupTypeEdit);

//Инициализация кнопки +
const addNewCardButton = document.querySelector('.profile__add-button');
//Инициализация попапа кнопки +
export const popupTypeNewCard = document.querySelector('.popup_type_new-card');
openPopup(addNewCardButton, popupTypeNewCard);

//Реализация открытия попапа по нажатию на карточки с картинками
//Заводим переменные попапа, его данных 
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
export {popupTypeImage, popupImage, popupCaption};

placesList.addEventListener('click', (event) => {
    const cardImage = event.target.closest('.card__image');
    if (cardImage) {
        handleImageClick(cardImage);
    }
});

// Закрытие попапа при нажатии на крестик
const arrayPopupClose = document.querySelectorAll('.popup__close');
arrayPopupClose.forEach(buttonClose => {
    buttonClose.addEventListener('click', () => {
        const popup = buttonClose.closest('.popup');
        closePopup(popup);
    });
});

// Закрытие попапа при нажатии на оверлей
const arrayPopup = document.querySelectorAll('.popup');
arrayPopup.forEach(popup => {
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup(popup);
        }
    })
})

//Шаг 4
// Находим форму в DOM
const formElement = document.querySelector('.popup_type_edit .popup__form[name="edit-profile"]');
// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector('.popup__input_type_description');// Воспользуйтесь инструментом .querySelector()
export {nameInput, jobInput};
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent; 

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

//Шаг 6
const formAddCard = document.querySelector('.popup_type_new-card .popup__form[name="new-place"]');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
export const cardName = formAddCard.querySelector('.popup__input_type_card-name');// Воспользуйтесь инструментом .querySelector()
export const cardLink =  formAddCard.querySelector('.popup__input_type_url');// Воспользуйтесь инструментом .querySelector()


formAddCard.addEventListener('submit', handleAddCard);



