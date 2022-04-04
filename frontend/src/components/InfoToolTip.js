import rejectImg from "../images/reg-popup__reject.svg";
import confirmImg from "../images/reg-popup__confirm.svg";

export default function InfoTooltip({ isOpen, onClose, isInfoTooltipOpenOk }) {
  return (
    <section className={`popup popup_type__reg ${isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        {isInfoTooltipOpenOk ? (
          <div className="popup__content">
            <img src={rejectImg} alt="Ошибка" className="popup__img" />
            <h2 className="popup__text">Вы успешно зарегистрировались!</h2>
          </div>
        ) : (
          <div className="popup__content">
            <img src={confirmImg} alt="Ошибка" className="popup__img" />
            <h2 className="popup__text">
              Что-то пошло не так! Попробуйте еще раз.
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}
