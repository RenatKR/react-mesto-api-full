import React from "react";
import AuthForm from "../forms/AuthForm";

export default function Login(props) {
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
    props.handleLogin(password, email);
  }

  return (
    <>
      <AuthForm
        name={"login"}
        title={"Вход"}
        buttonText={"Войти"}
        handleChangePassword={handleChange}
        handleChangeEmail={handleChange}
        handleSubmit={handleSubmit}
        email={state.email}
        password={state.password}
      />
    </>
  );
}
