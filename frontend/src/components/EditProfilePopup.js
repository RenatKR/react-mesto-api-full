import React from "react";
import PopupWithForm from "./PopupWithForm";
import ProfileForm from "./forms/ProfileForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(" ");
  const [description, setDescription] = React.useState(" ");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.description);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <ProfileForm
          name={name}
          description={description}
          handleChangeName={handleChangeName}
          handleChangeDescription={handleChangeDescription}
        />
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;
