import { Link } from "react-router-dom";

export default function AuthForm({
  name,
  buttonText,
  title,
  handleChangePassword,
  handleChangeEmail,
  handleSubmit,
  email,
  password
}) {
  return (
    <section className="auth">
      <div className="auth__container">
        <h1 className="auth__title">{title}</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="auth__input-form">
            <input
              name="email"
              type="email"
              className={`auth__input ${name}__input_type_email`}
              placeholder="Email"
              minLength="2"
              maxLength="40"
              noValidate
              autoComplete="off"
              id="email-input"
              required
              onChange={handleChangeEmail}
              value={email}
            ></input>
            <span className={`${name}-input-email-error`}></span>
            <input
              name="password"
              type="password"
              className={`auth__input ${name}__input_type_password`}
              placeholder="Пароль"
              minLength="2"
              maxLength="40"
              noValidate
              autoComplete="off"
              id="password-input"
              required
              onChange={handleChangePassword}
              value={password}
            ></input>
            <span className={`${name}-input-email-error`}></span>
          </fieldset>
          <button type="submit" className="auth__button">
            {buttonText}
          </button>
        </form>
        {name === "register" ? (
          <p className="auth__text">
            Уже зарегистрированы?{" "}
            <Link to="/sign-in" className="auth__text">
              Войти
            </Link>
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </section>
  );
}
