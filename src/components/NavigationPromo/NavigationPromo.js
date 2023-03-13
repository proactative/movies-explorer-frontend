import React from 'react';
import './NavigationPromo.css';
import { NavLink } from 'react-router-dom';

function NavigationPromo() {
  return (
    <nav className="navigation-promo">
      <NavLink to="/signup" className="navigation-promo__link">Регистрация</NavLink>
      <NavLink to="/signin" className="navigation-promo__link">Войти</NavLink>
    </nav>
  );
}
  
export default NavigationPromo;
