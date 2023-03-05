import React from 'react';
import './AuthForm.css';

function AuthForm(props) {
  return (
    <div className="auth-form">
      <h2 className="auth-form__title">{props.formTitle}</h2>
			<fieldset className="auth-form__fieldset">{props.children}</fieldset>
			<button className="auth-form__button">{props.buttonTitle}</button>
    </div>
  );
}
  
export default AuthForm;
