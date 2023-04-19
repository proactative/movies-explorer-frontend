import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation(props) {
  const location = useLocation()
  return (
    <div className="navigation">
      <nav className="navigation__links">
        <NavLink
          to="/movies"
          className={
            location.pathname === '/'
              ? 'navigation__link navigation__link_promo'
              : 'navigation__link'
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={
            location.pathname === '/'
              ? 'navigation__link navigation__link_promo'
              : 'navigation__link'
          }
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink
          to="/profile"
          className={
            location.pathname === '/'
              ? 'navigation__link navigation__link_profile_promo navigation__link_promo'
              : 'navigation__link navigation__link_profile'
          }
        >
          <p className="navigation__link-text">Аккаунт</p>
          <span
          className={
            location.pathname === '/'
              ? 'navigation__span navigation__span_promo'
              : 'navigation__span'
          }
          />
        </NavLink>
      </nav>
      <button
        className={
          location.pathname === '/'
            ? 'navigation__burger-button navigation__burger-button_promo'
            : 'navigation__burger-button'
        }
        type="button"
        onClick={props.onBurgerButtonClick}
      />
    </div>
  )
}

export default Navigation
