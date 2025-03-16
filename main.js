(()=>{"use strict";function e(e){e.target.closest(".places__item").remove()}function t(e){e.classList.toggle("card__like-button_is-active")}function r(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function c(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}function a(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))}function u(e,t){var r=e.querySelector(t.submitButtonSelector),n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(r){c(e,r,t),r.value=""})),a(n,r,t)}var i={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"2b149f6e-69fb-48c7-a327-06d63f0c44c2","Content-Type":"application/json"}},l=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},s=function(){return fetch(i.baseUrl+"/users/me",{headers:i.headers}).then(l)},p=function(){return fetch(i.baseUrl+"/cards",{headers:i.headers}).then(l)};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,u=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var m=document.querySelector(".places__list"),y=document.querySelector(".profile__edit-button"),_=document.querySelector(".profile__add-button"),v=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),h=document.querySelector(".popup__input_type_name"),b=document.querySelector(".popup__input_type_description"),q=document.querySelector(".popup_type_edit"),k=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup_type_image"),E=document.forms["edit-profile"],C=document.forms["new-place"],L=document.querySelectorAll(".popup"),x=(C.querySelector(".popup__input_type_card-name"),C.querySelector(".popup__input_type_url"),document.querySelector(".popup__content_content_image")),A=x.querySelector(".popup__image"),j=x.querySelector(".popup__caption");function w(e,t,r,n,o){var c=function(e,t,r,n){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=o.querySelector(".card__image"),a=o.querySelector(".card__description").querySelector(".card__title"),u=o.querySelector(".card__like-button"),i=o.querySelector(".card__delete-button");return a.textContent=e.name,c.src=e.link,c.alt=e.name,c.addEventListener("click",(function(){return n(c,a)})),i.addEventListener("click",t),u.addEventListener("click",(function(){return r(u)})),o}(e,t,r,n);m.append(c)}function B(e,t){A.src=e.src,A.alt=e.alt,j.textContent=t.textContent,n(g)}x.querySelector(".popup__close"),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){return w(e,"append")})),y.addEventListener("click",(function(){u(E,D),function(){n(q);var e=Array.from(E.querySelectorAll(D.inputSelector)),t=E.querySelector(D.submitButtonSelector);h.value=v.textContent,b.value=S.textContent,a(e,t,D)}()})),_.addEventListener("click",(function(){u(C,D),n(k)})),Promise.all([s(),p()]).then((function(r){var n=d(r,2),o=n[0],c=n[1];setProfileData(o),c.forEach((function(r){w(r,e,t,B)}))})).catch((function(e){console.error("Did not get any data: ",e)})),L.forEach((function(e){var t=e.querySelector(".popup__close");t&&t.addEventListener("click",(function(){return o(e)})),e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&o(e)}))})),Promise.all([s(),p()]).then((function(r){var n=d(r,2),o=n[0],c=n[1];setProfileData(o),c.forEach((function(r){w(r,e,t,B)}))})).catch((function(e){console.error("Did not get any data: ",e)})),C.addEventListener("submit",addNewCard),E.addEventListener("submit",(function(e){e.preventDefault(),v.textContent=h.value,S.textContent=b.value,o(q)}));var D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);a(r,n,t),r.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?c(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.classList.add(n.errorClass),o.textContent=r}(e,t,t.validationMessage,r)}(e,o,t),a(r,n,t)}))}))}(t,e)}))}(D)})();