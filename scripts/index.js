// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 
const placesList = document.querySelector('.places__list');
// @todo: DOM узлы

// @todo: Функция создания карточки

function createCard (element, deleteCard) {
    const cardPlace = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardPlace.querySelector('.card__image').src = element.link;
    cardPlace.querySelector('.card__image').alt = element.alt;
    cardPlace.querySelector('.card__title').textContent = element.name;

    const deleteButton = cardPlace.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    return cardPlace;
};

// @todo: Функция удаления карточки
function deleteCard(event) {
    const buttonBin = event.target;
    buttonBin.closest('.places__item').remove();
};
// @todo: Вывести карточки на страниц
function addCard(cardPlace, placesList) {
    placesList.append(cardPlace);
};

initialCards.forEach(function (element) {
    addCard(createCard(element, deleteCard), placesList)
});