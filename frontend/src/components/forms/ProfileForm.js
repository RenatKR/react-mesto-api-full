function ProfileForm({
  name,
  description,
  handleChangeName,
  handleChangeDescription,
}) {
  return (
    <fieldset className="popup__input-form">
      <input
        name="name"
        type="text"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        noValidate
        autoComplete="off"
        id="name-input"
        required
        value={name || " "}
        onChange={handleChangeName}
      />
      <span className="name-input-error"></span>
      <input
        name="job"
        type="text"
        className="popup__input popup__input_type_job"
        placeholder="Род занятий"
        minLength="2"
        maxLength="200"
        noValidate
        autoComplete="off"
        id="job-input"
        required
        value={description || " "}
        onChange={handleChangeDescription}
      />
      <span className="job-input-error"></span>
    </fieldset>
  );
}

export default ProfileForm;
