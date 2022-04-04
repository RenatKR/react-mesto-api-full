const PopupWithForm = ({
  children,
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen && "popup_is-opened"}`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="popup__content">
          <h2 className="popup__title">{title}</h2>
          <form
            name={name}
            className="popup__submit-form popup__submit-form_profile popup__form"
            onSubmit={onSubmit}
          >
            {children}
            <button type="submit" className="popup__save popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PopupWithForm;
