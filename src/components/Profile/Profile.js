import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import BurgerPopup from '../BurgerPopup/BurgerPopup'

function Profile() {
  const [burgerClicked, setBurgerClicked] = React.useState(false)

  function handleBurgerIconClick() {
    setBurgerClicked(true)
  }

  function handleCloseIconClick() {
    setBurgerClicked(false)
  }

  return (
    <div className="profile">
      <Header>
        <Navigation onBurgerButtonClick={handleBurgerIconClick} />
      </Header>
      <h2 className="profile__title">Привет,&nbsp;Друг!</h2>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <label className="profile__label">
            <p className="profile__label-text">Имя</p>
            <input
              className="profile__input"
              minLength="2"
              maxLength="30"
              type="text"
              name="name"
              id="name"
              required
              value="Виталий"
            />
            <span className="profile__error-span"></span>
          </label>
          <label className="profile__label">
            E&#8209;mail
            <input
              className="profile__input"
              type="email"
              id="email"
              required
              value="pochta@yandex.ru"
            />
            <span className="profile__error-span"></span>
          </label>
        </fieldset>
        <button className="profile__form-button" type="button">
          Редактировать
        </button>
      </form>

      <div className="profile__redirection-link-area">
        <Link className="profile__redirection-link" to="/">
          Выйти из аккаунта
        </Link>
      </div>
      <BurgerPopup
        onCloseIconClick={handleCloseIconClick}
        className={
          !burgerClicked ? 'burger-popup' : 'burger-popup burger-popup_opened'
        }
      />
    </div>
  )
}

export default Profile
