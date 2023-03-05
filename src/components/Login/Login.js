import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel';
import RedirectionLinkArea from '../RedirectionLinkArea/RedirectioLinkArea';

function Login() {
  return (
    <div className="login">
      <Logo />
      <AuthForm formTitle="Рады видеть!" buttonTitle="Войти">
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
      <RedirectionLinkArea question="Ещё не зарегистрированы?" linkTitle="Регистрация" to="/signup"/>
    </div>
  );
}
  
export default Login;
