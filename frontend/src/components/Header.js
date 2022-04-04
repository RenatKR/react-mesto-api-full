import React from "react";
import headerLogo from "../images/header__logo.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Link, Switch, Route } from "react-router-dom";

export default function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="header">
      <img src={headerLogo} alt="Место" className="header__logo" />

      <Switch>
        <Route exact path="/">
          <>
            <div className="header__container">
              <p className="header__mail">{currentUser.email}</p>
              <button className="header__button" onClick={props.onClick}>
                Выйти
              </button>
            </div>
          </>
        </Route>
 
      <Route path="/sign-up">
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      </Route>

      <Route path="/sign-in">
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
        </Route>
        
      </Switch>
    </header>
  );
}