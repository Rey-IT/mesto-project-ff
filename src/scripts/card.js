import { removeCard, tagLike, removeLike } from "./api.js";

const cardsTemplate = document.querySelector("#card-template").content;

const createCard = (element, deleteCard, toggleLike, openImg, userId) => {
  const cardItem = cardsTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardItem.querySelector(".card__image");
  const cardTitle = cardItem.querySelector(".card__title");
  const cardLikeButton = cardItem.querySelector(".card__like-button");
  const cardDeleteButton = cardItem.querySelector(".card__delete-button");
  const cardLikeCounter = cardItem.querySelector(".card__like-count");

  cardItem.dataset.cardId = element._id;
  cardItem.dataset.ownerId = element.owner._id;
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;
  cardLikeCounter.textContent = element.likes.length;

  const likeClicked = element.likes.some((like) => like._id === userId);
  if (likeClicked) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }

  if (element.owner._id === userId) {
    cardDeleteButton.addEventListener("click", (event) => {
      deleteCard(cardItem, element._id);
    });
  } else {
    cardDeleteButton.remove();
  }

  cardLikeButton.addEventListener("click", (event) => {
    toggleLike(cardLikeCounter, cardLikeButton, element._id);
  });

  cardImage.addEventListener("click", openImg);

  return cardItem;
};

const deleteCard = (cardItem, cardId) => {
  removeCard(cardId)
    .then((result) => {
      cardItem.remove();
    })
    .catch((error) => {
      console.log(error);
    });
};

const toggleLike = (cardLikeCounter, cardLikeButton, cardId) => {
  const likeMethod = cardLikeButton.classList.contains("card__like-button_is-active") ? removeLike : tagLike;
    likeMethod(cardId) 
        .then((result) => { 
            cardLikeButton.classList.toggle("card__like-button_is-active"); 
            cardLikeCounter.textContent = result.likes.length; 
      })
        .catch(err => console.log(err));
};



export { createCard, deleteCard, toggleLike };