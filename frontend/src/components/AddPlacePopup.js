import React from "react";
import PopupWithForm from "./PopupWithForm";
import AddPlaceForm from "./forms/AddPlaceForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState(" ");
  const [src, setSrc] = React.useState(" ");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSrc(e) {
    setSrc(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: src,
    });
  }

  React.useEffect(() => {
    setName(" ");
    setSrc(" ");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <AddPlaceForm
        handleChangeName={handleChangeName}
        handleChangeSrc={handleChangeSrc}
        name={name}
        src={src}
      />
    </PopupWithForm>
  );
}
