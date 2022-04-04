import React from "react";

function AvaForm({ inputRef, getAvatarSrc}) {
  return (
    <fieldset className="popup__input-form">
      <input
        ref={inputRef}
        name="ava"
        type="url"
        className="popup__input popup__input_type_ava"
        placeholder="Ссылка на изображение"
        noValidate
        autoComplete="off"
        id="ava-input"
        required
        onChange={getAvatarSrc}
      />
      <span className="ava-input-error"></span>
    </fieldset>
  );
}

export default AvaForm;
