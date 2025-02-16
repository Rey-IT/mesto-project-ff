// Функция создания карточки
function createCard(element, handleImageClick) {
    const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
    const cardPlace = cardTemplate.cloneNode(true);
    const cardImage = cardPlace.querySelector('.card__image');
    const cardDescription = cardPlace.querySelector('.card__description');
    const cardTitle = cardDescription.querySelector('.card__title');
    const cardLikeButton = cardDescription.querySelector('.card__like-button');
    const cardDeleteButton = cardPlace.querySelector('.card__delete-button');

    // Настройка содержимого карточки
    cardTitle.textContent = element.name;
    cardImage.src = element.link;
    cardImage.alt = element.name;

    // Обработчики событий
    cardImage.addEventListener('click', () => handleImageClick(cardImage, cardTitle));
    cardDeleteButton.addEventListener('click', () => deleteCard(cardPlace));
    cardLikeButton.addEventListener('click', toggleLike);

    return cardPlace;
}

// Функция удаления карточки
function deleteCard(card) {
    card.remove();
}

// Функция добавления лайка
function toggleLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard };

