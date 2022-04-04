function ImagePopup({ title, src, onClose, isOpen }) {
  return (
    <section className={`popup popup-image ${isOpen && "popup_is-opened"}`}>
      <div className="popup-image__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img src={src} alt={title} className="popup-image__img" />
        <h2 className="popup-image__title">{title}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
