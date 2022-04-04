const profilePopup = document.querySelector('.popup_profile');
const profilePopupForm = profilePopup.querySelector('.popup__submit-form')

const profileElement = document.querySelector('.profile');
const profileEditButton = profileElement.querySelector('.profile__edit-button');

const cardAddButton = profileElement.querySelector('.profile__add-button');

const cardAddPopup = document.querySelector('.popup-add');
const cardAddForm = cardAddPopup.querySelector('.popup__submit-form')

const avaEditPopup = document.querySelector('.popup-ava-edit');
const avaEditButton = document.querySelector('.profile__avatar-edit');

const avaImg = document.querySelector('.profile__avatar');

export { profilePopup, profilePopupForm, profileElement, profileEditButton, cardAddButton, cardAddPopup, cardAddForm, avaEditPopup, avaEditButton, avaImg }