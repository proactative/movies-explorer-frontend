import React from 'react'
import './Register.css'
import Logo from '../Logo/Logo'
import AuthForm from '../AuthForm/AuthForm'
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel'
import RedirectionLinkArea from '../RedirectionLinkArea/RedirectioLinkArea'

function Register() {
  const [user, setUser] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isUserInputValid, setIsUserInputValid] = React.useState(false)
  const [isEmailInputValid, setIsEmailInputValid] = React.useState(false)
  const [isPasswordInputValid, setIsPasswordInputValid] = React.useState(false)
  const [userInputErrorMessage, setUserInputErrorMessage] = React.useState('')
  const [emailInputErrorMessage, setEmailInputErrorMessage] = React.useState('')
  const [passwordInputErrorMessage, setPasswordInputErrorMessage] = React.useState('')
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

  function handlePasswordInputChange(e) {
    if (e.target.validity.valid) {
      setIsPasswordInputValid(true)
      setPasswordInputErrorMessage('')
    } else {
      setIsPasswordInputValid(false)
      setPasswordInputErrorMessage(e.target.validationMessage)
    }
    setPassword(e.target.value);
  }

  React.useEffect(() => {
    setIsFormValid( isUserInputValid && isEmailInputValid && isPasswordInputValid);
  }, [isUserInputValid, isEmailInputValid, isPasswordInputValid]);

  // alert is a temporary solution only for level-2
  function handleSubmit(e) {
    e.preventDefault();
    isFormValid && alert('Форма принята');
  }
  
  return (
    <div className="register">
      <Logo />
      <AuthForm 
      formTitle="Добро пожаловать!" 
      buttonTitle="Зарегистрироваться" 
      className={isFormValid ? "auth__form-button" : "auth__form-button auth__form-button_disabled"}
      disabled={isFormValid ? "" : "disabled"}
      onSubmitFunction={handleSubmit}
      >
        <AuthFormLabel
          labelText="Имя"
          type="text"
          name="name"
          id="name"
          minLength="2"
          maxLength="30"
          value={user || ''}
          onChancheHandler={handleUserInputChange}
          errorMessage={userInputErrorMessage || ""}
          inputClassName={isUserInputValid ? "auth-form-label__input" : "auth-form-label__input error"}
        />
        <AuthFormLabel
          labelText="E-mail"
          type="email"
          name="email"
          id="email"
          value={email || ''}
          onChancheHandler={handleEmailInputChange}
          errorMessage={emailInputErrorMessage || ""}
          inputClassName={isEmailInputValid ? "auth-form-label__input" : "auth-form-label__input error"}
          pattern='^.*@.+$'
        />
        <AuthFormLabel
          labelText="Пароль"
          type="password"
          name="password"
          id="password"
          value={password || ''}
          onChancheHandler={handlePasswordInputChange}
          errorMessage={passwordInputErrorMessage || ""}
          inputClassName={isPasswordInputValid ? "auth-form-label__input" : "auth-form-label__input error"}
        />
      </AuthForm>
      <RedirectionLinkArea
        question="Уже зарегистрированы?"
        linkTitle="Войти"
        to="/signin"
      />
    </div>
  )
}

export default Register
