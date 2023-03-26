import React from 'react'
import './Register.css'
import Logo from '../Logo/Logo'
import AuthForm from '../AuthForm/AuthForm'
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel'
import RedirectionLinkArea from '../RedirectionLinkArea/RedirectioLinkArea'

function Register(props) {
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
    e.preventDefault()
    if (isFormValid) {
      props.handleRegister(values.user, values.email, values.password)
    } else {
      console.log('error')
    }
  }

  return (
    <section className="register" aria-label="регистрация">
      <Logo />
      <AuthForm
        formTitle="Добро пожаловать!"
        buttonTitle="Зарегистрироваться"
        className={
          isFormValid
            ? 'auth__form-button'
            : 'auth__form-button auth__form-button_disabled'
        }
        disabled={isFormValid ? '' : 'disabled'}
        onSubmitFunction={handleSubmit}
      >
        <AuthFormLabel
          labelText="Имя"
          type="text"
          name="user"
          id="user"
          minLength="2"
          maxLength="30"
          pattern="^[a-zA-Zа-яА-Я -]+$"
          value={values.user || ''}
          onChancheHandler={handleInputChange}
          errorMessage={errors.user || ''}
          inputClassName={
            errors.user===""
              ? 'auth-form-label__input'
              : 'auth-form-label__input error'
          }
        />
        <AuthFormLabel
          labelText="E-mail"
          type="email"
          name="email"
          id="email"
          value={values.email || ''}
          onChancheHandler={handleInputChange}
          errorMessage={errors.email || ''}
          inputClassName={
            errors.email===""
              ? 'auth-form-label__input'
              : 'auth-form-label__input error'
          }
          pattern="^.*@.+$"
        />
        <AuthFormLabel
          labelText="Пароль"
          type="password"
          name="password"
          id="password"
          value={values.password || ''}
          onChancheHandler={handleInputChange}
          errorMessage={errors.pasword || ''}
          inputClassName={
            errors.password===""
              ? 'auth-form-label__input'
              : 'auth-form-label__input error'
          }
        />
      </AuthForm>
      <RedirectionLinkArea
        question="Уже зарегистрированы?"
        linkTitle="Войти"
        to="/signin"
      />
    </section>
  )
}

export default Register
