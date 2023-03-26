import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './BurgerPopup.css';

function BurgerPopup(props) {
  const location = useLocation();

  return (
    <div className={props.className}>
      <div className="burger-popup__menu">
        <button className="burger-popup__close-button" type='button' onClick={props.onCloseIconClick} />
        <nav className="burger-popup__links">
          <NavLink to="/" className="burger-popup__link"  onClick={props.onCloseIconClick}>
            <p className="burger-popup__link-text">Главная</p>
          </NavLink>
          <NavLink to="/movies" className="burger-popup__link"  onClick={props.onCloseIconClick}>
            <p className={location.pathname === "/movies" ? "burger-popup__link-text active-link" : "burger-popup__link-text"}>Фильмы</p>
          </NavLink>
          <NavLink to="/saved-movies" className="burger-popup__link"  onClick={props.onCloseIconClick}>
            <p className={location.pathname === "/saved-movies" ? "burger-popup__link-text active-link" : "burger-popup__link-text"}>Сохранённые фильмы</p>
          </NavLink>
          <NavLink to="/profile" className="burger-popup__link" onClick={props.onCloseIconClick}>
            <p className={location.pathname === "/profile" ? "burger-popup__link-text active-link" : "burger-popup__link-text"}>Аккаунт</p>
            <span className="burger-popup__span" />
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
  
export default BurgerPopup;
