// Функция создания карточки
function createCard(element, deleteCard, toggleLike, handleImageClick) {
    const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
    const cardPlace = cardTemplate.cloneNode(true);
    const cardImage = cardPlace.querySelector('.card__image');
    const cardDescription = cardPlace.querySelector('.card__description');
    const cardTitle = cardDescription.querySelector('.card__title');
    const cardLikeButton = cardPlace.querySelector('.card__like-button');
    const cardDeleteButton = cardPlace.querySelector('.card__delete-button');

    // Настройка содержимого карточки
    cardTitle.textContent = element.name;
    cardImage.src = element.link;
    cardImage.alt = element.name;

    // Обработчики событий
    cardImage.addEventListener('click', () => handleImageClick(cardImage, cardTitle));
    cardDeleteButton.addEventListener('click', deleteCard);
    cardLikeButton.addEventListener('click', () => toggleLike(cardLikeButton));

    return cardPlace;
}

// Функция удаления карточки
function deleteCard(event) {
    event.target.closest('.places__item').remove();
}

// Функция добавления лайка
function toggleLike(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, toggleLike };

