import '../pages/index.css';
import { createCard, deleteCard, toggleLike } from './card.js';
import { initialCards } from './cards.js';
import {openModal, closeModal} from './modal.js';

const placesList = document.querySelector('.places__list');  // DOM узлы
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Модальные окна и элементы формы
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputDescription = document.querySelector('.popup__input_type_description');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const editProfileForm = document.forms['edit-profile'];
const newPlaceForm = document.forms['new-place'];
const arrPopups = document.querySelectorAll('.popup');


const inputTypeCardName = newPlaceForm.querySelector('.popup__input_type_card-name');
const inputTypeLink = newPlaceForm.querySelector('.popup__input_type_url');

// Модальное окно с изображением
const popupContentImage = document.querySelector('.popup__content_content_image');
const imageContent = popupContentImage.querySelector('.popup__image');
const imageCaption = popupContentImage.querySelector('.popup__caption');
const closeButton = popupContentImage.querySelector('.popup__close');

initialCards.forEach((item) => addCard(item, 'append'));

// Редактирование профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;

    closeModal(popupTypeEdit);
}

// Ф-ия открытия попап профиля
function openEditProfilePopup() {
    openModal(popupTypeEdit);
    
    popupInputName.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;
}

editProfileButton.addEventListener('click', openEditProfilePopup);
addCardButton.addEventListener('click', () => openModal(popupTypeNewCard));

// Закрытие popup при клике на оверлей или крестик
arrPopups.forEach((popup) => {
    const closeBtn = popup.querySelector('.popup__close'); // Находим кнопки закрытия в каждом попапе
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(popup)); // обработчик на кнопку закрытия
    }
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closeModal(popup); // Закрытие попапа по клику на оверлей или крестик
        }
    });
});

// Ф-ия добавления карточки на страницу
function addCard(item) {
    const cardElement = createCard(item, deleteCard, toggleLike, handleImageClick);
    placesList.append(cardElement);
}

// Добавления новой карточки
function addNewCard(evt) {
    evt.preventDefault();

    const newCard = {
        name: inputTypeCardName.value,
        link: inputTypeLink.value
    };

    placesList.prepend(createCard(newCard, deleteCard, toggleLike, handleImageClick));
    
    closeModal(popupTypeNewCard);
    evt.target.reset();
}

// Отправка формы для создания новой карточки
newPlaceForm.addEventListener('submit', addNewCard);

// Отправка формы для редактирования профиля
editProfileForm.addEventListener('submit', handleProfileFormSubmit);

// Перенос данных картинки
function handleImageClick(image, title) {

    imageContent.src = image.src;
    imageContent.alt = image.alt;
    imageCaption.textContent = title.textContent;

    openModal(popupTypeImage);
}



