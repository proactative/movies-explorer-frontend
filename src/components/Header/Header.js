import React from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import NavigationPromo from '../NavigationPromo/NavigationPromo'

function Header(props) {
  const location = useLocation()
  return (
    <header
      className={location.pathname === '/' ? 'header header_promo' : 'header'}
    >
      <div
        className={
          location.pathname === '/'
            ? 'header__container header__container_promo'
            : 'header__container'
        }
      >
        <Logo />
        { !props.loggedIn ? <NavigationPromo /> : <Navigation onBurgerButtonClick={props.onBurgerButtonClick} />}
      </div>
    </header>
  )
}

export default Header
