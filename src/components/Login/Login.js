import React from 'react'
import './Login.css'
import Logo from '../Logo/Logo'
import AuthForm from '../AuthForm/AuthForm'
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel'
import RedirectionLinkArea from '../RedirectionLinkArea/RedirectioLinkArea'

function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isEmailInputValid, setIsEmailInputValid] = React.useState(false)
  const [isPasswordInputValid, setIsPasswordInputValid] = React.useState(false)
  const [emailInputErrorMessage, setEmailInputErrorMessage] = React.useState('')
  const [passwordInputErrorMessage, setPasswordInputErrorMessage] = React.useState('')
  const [isFormValid, setIsFormValid] = React.useState(false)

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
    setIsFormValid(isEmailInputValid && isPasswordInputValid)
  }, [isEmailInputValid, isPasswordInputValid])

  // alert is a temporary solution only for level-2
  function handleSubmit(e) {
    e.preventDefault();
    isFormValid && alert('Форма принята');
  }

  return (
    <div className="login">
      <Logo />
      <AuthForm
        formTitle="Рады видеть!" 
        buttonTitle="Войти"
        className={isFormValid ? "auth__form-button" : "auth__form-button auth__form-button_disabled"}
        disabled={isFormValid ? "" : "disabled"}
        onSubmitFunction={handleSubmit}
      >
        <AuthFormLabel
          labelText="E-mail"
          type="email"
          name="email"
          id="email"
          value={email || ''}
          onChancheHandler={handleEmailInputChange}
          errorMessage={emailInputErrorMessage || ''}
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
          errorMessage={passwordInputErrorMessage || ''}
          inputClassName={isPasswordInputValid ? "auth-form-label__input" : "auth-form-label__input error"}
        />
      </AuthForm>
      <RedirectionLinkArea
        question="Ещё не зарегистрированы?"
        linkTitle="Регистрация"
        to="/signup"
      />
    </div>
  )
}

export default Login
