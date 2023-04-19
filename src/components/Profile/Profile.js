import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile() {
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

  return (
    <section className="profile" aria-label="профиль">
      <h2 className="profile__title">Привет,&nbsp;{user}!</h2>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
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
          <span className="profile__label-text">E&#8209;mail</span>
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
    </section>
  )
}

export default Profile
