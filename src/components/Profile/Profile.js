import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import BurgerPopup from '../BurgerPopup/BurgerPopup'

function Profile() {
  const [burgerClicked, setBurgerClicked] = React.useState(false)
  const [editMode, setEditMode] = React.useState(false)
  const [isActiveInput, setIsActiveInput] = React.useState('disabled')
  const [isEmailInputValid, setIsEmailInputValid] = React.useState(true)
  const [isUserInputValid, setIsUserInputValid] = React.useState(true)
  const [userInputErrorMessage, setUserInputErrorMessage] = React.useState('')
  const [emailInputErrorMessage, setEmailInputErrorMessage] = React.useState('')

  // Виталий and pochta@yandex.ru is a temprory decision only for level-2
  const [user, setUser] = React.useState('Виталий')
  const[email, setEmail] = React.useState('pochta@yandex.ru')
  const [isFormValid, setIsFormValid] = React.useState(false)

  function handleUserInputChange(e) {
    if (e.target.validity.valid) {
      setIsUserInputValid(true)
      setUserInputErrorMessage('')
    } else {
      setIsUserInputValid(false)
      setUserInputErrorMessage(e.target.validationMessage)
    }
    setUser(e.target.value);
  }

  function handleEmailInputChange(e) {
    if (e.target.validity.valid) {
      setIsEmailInputValid(true)
      setEmailInputErrorMessage('')
    } else {
      setIsEmailInputValid(false)
      setEmailInputErrorMessage(e.target.validationMessage)
    }
    setEmail(e.target.value);
  }

  React.useEffect(() => {
    setIsFormValid(isUserInputValid && isEmailInputValid)
  }, [isUserInputValid, isEmailInputValid])
 
  function switchOnEditMode() {
    setEditMode(true);
    setIsActiveInput('');
  }

  function switchOffEditMode() {
    setEditMode(false);
    setIsActiveInput('disabled')
  }

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
      <h2 className="profile__title">Привет,&nbsp;{user}!</h2>
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
              value={ "" || user}
              disabled={isActiveInput}
              onChange={handleUserInputChange}
            />
            <span className="profile__error-span">{userInputErrorMessage}</span>
          </label>
          <label className="profile__label">
            E&#8209;mail
            <input
              className="profile__input"
              type="email"
              id="email"
              required
              value={ "" || email}
              pattern='^.*@.+$'
              disabled={isActiveInput}
              onChange={handleEmailInputChange}
            />
            <span className="profile__error-span">{emailInputErrorMessage}</span>
          </label>
        </fieldset>
        {!editMode &&
        <button className="profile__form-button" type="button" onClick={switchOnEditMode}>
          Редактировать
        </button> }
        {editMode &&
         <button
          onClick={switchOffEditMode}
          type="submit"
          className={isFormValid ? "profile__submit-button" : "profile__submit-button profile__submit-button_disabled" }
          disabled={isFormValid ? "" : "disabled"}
          >
          Сохранить
          </button>}
      </form>

      <div className="profile__redirection-link-area">
      {!editMode &&
        <Link className="profile__redirection-link" to="/">
          Выйти из аккаунта
        </Link> }
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
