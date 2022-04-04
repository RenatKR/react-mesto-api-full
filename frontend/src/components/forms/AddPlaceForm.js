function AddPlaceForm({ handleChangeName, handleChangeSrc, name, src }) {
  return (
    <fieldset className="popup__input-form">
      <input
        name="place"
        type="text"
        className="popup__input popup__input_type_place"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        noValidate
        autoComplete="off"
        id="place-input"
        required
        onChange={handleChangeName}
        value={name}
      />
      <span className="place-input-error"></span>
      <input
        name="src"
        type="url"
        className="popup__input popup__input_type_src"
        placeholder="Ссылка на картинку"
        noValidate
        autoComplete="off"
        id="src-input"
        required
        onChange={handleChangeSrc}
        value={src}
      />
      <span className="src-input-error"></span>
    </fieldset>
  );
}

export default AddPlaceForm;
