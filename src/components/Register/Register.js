import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel';
import RedirectionLinkArea from '../RedirectionLinkArea/RedirectioLinkArea';

function Register() {
  return (
    <div className="register">
      <Logo />
      <AuthForm formTitle="Добро пожаловать!" buttonTitle="Зарегистрироваться">
        <AuthFormLabel
          labelText="Имя"
          type="text"
          name="name"
          id="name"
        />
        <AuthFormLabel
          labelText="E-mail"
          type="email"
          name="email"
          id="email"
        />
        <AuthFormLabel
          labelText="Пароль"
          type="password"
          name="password"
          id="password"
        />
      </AuthForm>
      <RedirectionLinkArea question="Уже зарегистрированы?" linkTitle="Войти" to="/signin" />
    </div>
  );
}
  
export default Register;
