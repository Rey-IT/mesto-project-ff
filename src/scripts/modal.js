const handleClick = (event) => {
    if (event.target.closest(".popup__close")) {
      closeModal(event.target.closest(".popup"));
    } else if (event.target.classList.contains("popup_is-opened")) {
      closeModal(event.target);
    }
};
  
const openModal = (element) => {
    element.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEscape);
};
  
const closeModal = (element) => {
    element.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscape);
};
  
const handleEscape = (event) => {
    if (event.key === "Escape") {
      closeModal(document.querySelector(".popup_is-opened"));
    }
};
  
export { handleClick, openModal, closeModal };