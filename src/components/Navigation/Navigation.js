import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navigation__links">
        <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
        <NavLink to="/profile" className="navigation__link navigation__link_profile">
          <p className="navigation__link-text">Аккаунт</p>
          <span className="navigation__span" />
        </NavLink>
      </nav>
      <button className="navigation__burger-button" type="button" onClick={props.onBurgerButtonClick} />
    </div>    
  );
}
  
export default Navigation;
