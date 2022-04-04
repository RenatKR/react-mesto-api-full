import React from "react";
import profileEditImage from "../images/profile__edit.svg";
import profileAddImage from "../images/profile__add.svg";

import Card from "./Card";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  cards,
  onEditAvatar,
  handleCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img src={currentUser.src} alt="Фото" className="profile__avatar" />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>

          <h1 className="profile__title"> {currentUser.name} </h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          >
            <img
              src={profileEditImage}
              alt="Редактировать"
              className="profile__edit"
            />
          </button>
          <p className="profile__subtitle"> {currentUser.description} </p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        >
          <img src={profileAddImage} alt="Добавить" className="profile__add" />
        </button>
      </section>
      <section className="photo-grid">
        <div className="cards">
          {cards.map(({ _id, ...props }) => (
            <Card
              key={_id}
              {...props}
              _id={_id}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
