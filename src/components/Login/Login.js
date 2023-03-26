import React from 'react'
import './Login.css'
import Logo from '../Logo/Logo'
import AuthForm from '../AuthForm/AuthForm'
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel'
import RedirectionLinkArea from '../RedirectionLinkArea/RedirectioLinkArea'

function Login(props) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false)

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsFormValid(target.closest("form").checkValidity());
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
      props.handleLogin(values.email, values.password)
    } else {
      console.log('error')
    }
  }

  return (
    <section className="login" aria-label="логин">
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
          value={values.email || ''}
          onChancheHandler={handleInputChange}
          errorMessage={errors.email || ''}
          inputClassName={errors.email==="" ? "auth-form-label__input" : "auth-form-label__input error"}
          pattern='^.*@.+$'
        />
        <AuthFormLabel
          labelText="Пароль"
          type="password"
          name="password"
          id="password"
          value={values.password || ''}
          onChancheHandler={handleInputChange}
          errorMessage={errors.password || ''}
          inputClassName={errors.password==="" ? "auth-form-label__input" : "auth-form-label__input error"}
        />
      </AuthForm>
      <RedirectionLinkArea
        question="Ещё не зарегистрированы?"
        linkTitle="Регистрация"
        to="/signup"
      />
    </section>
  )
}

export default Login
