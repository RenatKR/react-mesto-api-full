import React from "react";
import AuthForm from "../forms/AuthForm";
import InfoTooltip from "../InfoToolTip";

export default function Register(props) {
  const [state, setState] = React.useState({
    password: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { password, email } = state;
    if (!password || !email) return;
    props.handleRegister(password, email);
    setState({ password: "", email: "", message: "" });
  }

  return (
    <>
      <AuthForm
        name={"register"}
        title={"Регистрация"}
        buttonText={"Зарегистрироваться"}
        handleChangePassword={handleChange}
        handleChangeEmail={handleChange}
        handleSubmit={handleSubmit}
        email={state.email}
        password={state.password}
      />
      <InfoTooltip
        isOpen={props.isInfoTooltipOpen}
        onClose={props.closeAllPopups}
        isInfoTooltipOpenOk={props.isInfoTooltipOpenOk}
      />
    </>
  );
}
