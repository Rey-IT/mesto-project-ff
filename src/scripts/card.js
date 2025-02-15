import { handleEscClose } from "./modal.js"; 
import { placesList ,cardTemplate } from "./index.js";
import { popupTypeNewCard ,popupTypeImage, popupImage, popupCaption, cardName, cardLink} from './index.js';
import { closePopup } from "./modal.js"; 

// @todo: Функция создания карточки
export function createCard(element, deleteCard, likeCard, imageClick) {
    const cardPlace = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardPlace.querySelector('.card__image').src = element.link;
    cardPlace.querySelector('.card__image').alt = element.alt;
    cardPlace.querySelector('.card__title').textContent = element.name;

    const deleteButton = cardPlace.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    // Находим кнопку лайка и добавляем обработчик
    const likeButton = cardPlace.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => likeCard(likeButton));

    // Находим изображение и добавляем обработчик клика
    const cardImage = cardPlace.querySelector('.card__image');
    cardImage.addEventListener('click', () => imageClick(cardImage));

    return cardPlace;
};

// @todo: Функция удаления карточки
export function deleteCard(event) {
    const buttonBin = event.target;
    buttonBin.closest('.places__item').remove();
};

// @todo: Вывести карточки на страниц
export function addCard(cardPlace, placesList) {
    placesList.append(cardPlace);
};

export function handleLike(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
};

export function handleImageClick(cardImage) {
    // Родительский элемент карточки
    const card = cardImage.closest('.card');
    // Извлекаем данные из карточки
    const title = card.querySelector('.card__title').textContent;
    const imageSrc = cardImage.src;

    // Устанавливаем данные в модальное окно
    popupImage.src = imageSrc;
    popupCaption.textContent = title;

    popupTypeImage.classList.add('popup_is-opened');

    document.addEventListener('keydown', handleEscClose);
};

export function handleAddCard(evt) {
    evt.preventDefault();

    const newCardData = {
        name: cardName.value,
        link: cardLink.value,
        alt: cardName.value
    };

    const newCard = createCard(newCardData, deleteCard, handleLike, handleImageClick);
    placesList.prepend(newCard);

    closePopup(popupTypeNewCard);

    cardName.value = '';
    cardLink.value = '';
};