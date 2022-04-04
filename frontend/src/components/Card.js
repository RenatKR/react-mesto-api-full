import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(card) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = currentUser._id === card.owner;

  const isLiked = card.likesArr.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : " "
  }`;

  function handleClick() {
    card.onCardClick(card.src, card.title);
  }

  const cardTrashButtonClassName = `card__trash ${
    isOwn ? "card__trash_visible" : "card__trash_hidden"
  }`;

  function handleLikeClick() {
    card.onCardLike(card);
  }

  function handleDeleteCard() {
    card.onCardDelete(card);
  }

  return (
    <div className="card">
      <button
        className={cardTrashButtonClassName}
        onClick={handleDeleteCard}
      ></button>
      <div className="card__photo-container">
        <img
          src={card.src}
          alt={card.title}
          className="card__photo"
          onClick={handleClick}
        />
      </div>
      <div className="card__flex-block">
        <h2 className="card__title">{card.title}</h2>
        <div className="card__like-section">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="card__like-counter">{card.likesNum}</p>
        </div>
      </div>
    </div>
  );
}
