import React from "react";
import PopupWithForm from "./PopupWithForm";
import AvaForm from "./forms/AvaForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();

  function getAvatarSrc() {
    return inputRef.current.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const src = inputRef.current.value;
    onUpdateAvatar({
      avatar: src,
    });
  }

  React.useEffect(() => {
    inputRef.current.value=" "
  }, [isOpen])

  return (
    <PopupWithForm
      name="ava"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <AvaForm inputRef={inputRef} getAvatarSrc={getAvatarSrc} />
    </PopupWithForm>
  );
}
