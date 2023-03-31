import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CurrentUserContext } from '../Context/CurrentUserContext'

function Profile(props) {
  const currentUser = useContext(CurrentUserContext)
  const [editMode, setEditMode] = React.useState(false)
  const [isActiveInput, setIsActiveInput] = React.useState('disabled')
  const [isEmailInputValid, setIsEmailInputValid] = React.useState(true)
  const [isUserInputValid, setIsUserInputValid] = React.useState(true)
  const [userInputErrorMessage, setUserInputErrorMessage] = React.useState('')
  const [emailInputErrorMessage, setEmailInputErrorMessage] = React.useState('')
  const [user, setUser] = React.useState(currentUser.name)
  const [email, setEmail] = React.useState(currentUser.email)
  const [isFormValid, setIsFormValid] = React.useState(false)
  const [noRepeat, setNoRepeat] = React.useState(true)
  const [wasChanged, setWasChanged] = React.useState(false)

  function handleUserInputChange(e) {
    setWasChanged(true)
    if (e.target.validity.valid) {
      setIsUserInputValid(true)
      setUserInputErrorMessage('')
    } else {
      setIsUserInputValid(false)
      setUserInputErrorMessage(e.target.validationMessage)
    }
    setUser(e.target.value)
    if(currentUser.name===e.target.value) {
      setNoRepeat(false)
    } else {
      setNoRepeat(true)
    }
  }

  function handleEmailInputChange(e) {
    setWasChanged(true)
    if (e.target.validity.valid) {
      setIsEmailInputValid(true)
      setEmailInputErrorMessage('')
    } else {
      setIsEmailInputValid(false)
      setEmailInputErrorMessage(e.target.validationMessage)
    }
    setEmail(e.target.value)
    if(currentUser.email===e.target.value) {
      setNoRepeat(false)
    } else {
      setNoRepeat(true)
    }
  }

  React.useEffect(() => {
    setIsFormValid(isUserInputValid && isEmailInputValid && noRepeat && wasChanged)
  }, [isUserInputValid, isEmailInputValid, noRepeat, wasChanged])

  function switchOnEditMode() {
    setEditMode(true)
    setIsActiveInput('')
  }

  function switchOffEditMode() {
    setEditMode(false)
    setIsActiveInput('disabled')
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handleUpdateUserInfo(user, email)
    switchOffEditMode()
    setWasChanged(false)
  }

  return (
    <section className="profile" aria-label="профиль">
      <h2 className="profile__title">Привет,&nbsp;{currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
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
              value={'' || user}
              pattern="^[a-zA-Zа-яА-Я -]+$"
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
              value={'' || email}
              pattern="^.*@.+$"
              disabled={isActiveInput}
              onChange={handleEmailInputChange}
            />
            <span className="profile__error-span">
              {emailInputErrorMessage}
            </span>
          </label>
        </fieldset>
        
        {!editMode && (
          <button
            className="profile__form-button"
            type="button"
            onClick={switchOnEditMode}
          >
            Редактировать
          </button>
        )}

        
        {editMode && (
          <div>
            {!noRepeat ? <p className='profile__warning'>Данные не поменялись</p> : ''}
            <button
             type="submit"
             className={
               isFormValid
                 ? 'profile__submit-button'
                 : 'profile__submit-button profile__submit-button_disabled'
              }
              disabled={isFormValid ? '' : 'disabled'}
            >
            Сохранить
            </button>
          </div>
        )}
      </form>

      <div className="profile__redirection-link-area">
        {!editMode && (
          <Link
            className="profile__redirection-link"
            to="/"
            onClick={props.handleLogOut}
          >
            Выйти из аккаунта
          </Link>
        )}
      </div>
    </section>
  )
}

export default Profile
