import '../pages/index.css';
import { createCard, deleteCard, toggleLike } from "./card.js";
import { handleClick, openModal, closeModal } from "./modal.js";
import { enableValidation, clearValidation, toogleButtonState } from "./validation.js";
import {getUserData, editProfile, updateAvatar, getInitialCards, postNewCard, removeCard, tagLike, removeLike} from "./api.js";
const profileEditButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup_type_edit");
const profileForm = document.forms["edit-profile"];
  
const profileName = profileForm.elements.name;
const profileJob = profileForm.elements.description;
const profileNameContent = document.querySelector(".profile__title");
const profileJobContent = document.querySelector(".profile__description");
  
const addCardButton = document.querySelector(".profile__add-button");
const cardPopup = document.querySelector(".popup_type_new-card");
const cardForm = document.forms["new-place"];
const cardName = document.querySelector(".popup__input_type_card-name");
const cardLink = document.querySelector(".popup__input_type_url");
  
const imageItem = document.querySelector(".popup__image");
const imagePopup = document.querySelector(".popup_type_image");
const imageSign = document.querySelector(".popup__caption");
  
const profileImageButton = document.querySelector(".profile__image_overlay");
const profileImagePopup = document.querySelector(".popup_type_user-image");
const profileImageForm = document.forms["edit-user-image"];
const profileImage = document.querySelector(".profile__image");

const placesList = document.querySelector(".places__list");

let userId = "";

const showLoading = (isLoading, buttonElement) => {
    if (isLoading) {
      buttonElement.innerHTML = "Сохранение...";
    } else {
      buttonElement.innerHTML = "Сохранить";
    }
  };

const showCards = (element, deleteCard, toggleLike, openImg, userId) => {
    const cardElement = createCard(element, deleteCard, toggleLike, openImg, userId);
    placesList.append(cardElement);
  };

const setProfilePopup = (formElement, name, description) => {
    formElement.name.value = name;
    formElement.description.value = description;
  };

const setProfileData = (userData) => {
    profileNameContent.textContent = userData.name;
    profileJobContent.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
    userId = userData._id;
  };

const handleProfileFormSubmit = (event) => {
    event.preventDefault();
    const profilePopupButton = profileForm.querySelector(".popup__button");
    showLoading(true, profilePopupButton);
    editProfile({
      name: profileName.value,
      about: profileJob.value,
    })
      .then((updateProfile) => {
        setProfileData(updateProfile);
        closeModal(profilePopup);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        showLoading(false, profilePopupButton);
      });
  };

profileEditButton.addEventListener("click", (event) => {
    clearValidation(profileForm, validationConfig);
    setProfilePopup(
      profileForm,
      profileNameContent.textContent,
      profileJobContent.textContent
    );
    openModal(profilePopup);

    const inputList = Array.from(
        profileForm.querySelectorAll(validationConfig.inputSelector)
      );
    toogleButtonState(inputList, profileForm.querySelector(validationConfig.submitButtonSelector), validationConfig);
  });
  
profilePopup.addEventListener("click", handleClick);
profileForm.addEventListener("submit", handleProfileFormSubmit);

const handleProfileImageFormSubmit = (event) => {
    event.preventDefault();
    const profileImagePopupButton = profileImageForm.querySelector(".popup__button");
    showLoading(true, profileImagePopupButton);
    updateAvatar(profileImageForm.link.value)
      .then((updateProfile) => {
        setProfileData(updateProfile);
        closeModal(profileImagePopup);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        showLoading(false, profileImagePopupButton);
      });
  };

profileImageButton.addEventListener("click", (event) => {
    profileImageForm.reset();
    clearValidation(profileImageForm, validationConfig);
    openModal(profileImagePopup);
    
  });

profileImagePopup.addEventListener("click", handleClick);
profileImageForm.addEventListener("submit", handleProfileImageFormSubmit);
  
addCardButton.addEventListener("click", (event) => {
    openModal(cardPopup);
  });
cardPopup.addEventListener("click", handleClick);
  
const handleNewCardFormSubmit = (event) => {
    event.preventDefault();
    const cardPopupButton = cardForm.querySelector(".popup__button");
    showLoading(true, cardPopupButton);
    const name = cardName.value;
    const link = cardLink.value;
    postNewCard({ name, link })
      .then((cardElement) => {
        const newCard = createCard(
          cardElement,
          deleteCard,
          toggleLike,
          openImg,
          userId
        );
        placesList.prepend(newCard);
        closeModal(cardPopup);
        cardForm.reset();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        showLoading(false, cardPopupButton);
      });
  };

cardForm.addEventListener("submit", handleNewCardFormSubmit);

addCardButton.addEventListener("click", () => {
  cardForm.reset();
  clearValidation(cardForm, validationConfig);
  openModal(cardPopup);
});

Promise.all([getUserData(), getInitialCards()])
  .then(([userData, element]) => {
    setProfileData(userData);
    element.forEach((cardElement) => {
      showCards(cardElement, deleteCard, toggleLike, openImg, userId);
    });
  })
  .catch((error) => {
    console.error("Did not get any data: ", error);
  });

const openImg = (event) => {
    imageItem.src = event.target.src;
    imageItem.alt = event.target.alt;
    imageSign.textContent = event.target.alt;
    openModal(imagePopup);
  };
  
imagePopup.addEventListener("click", handleClick);
  
const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };
  
enableValidation(validationConfig); 