import React from 'react';
import './AuthFormLabel.css';

function AuthFormLabel(props) {
  return (
    <label className="auth-form-label">
     {props.labelText}
      <input 
        className="auth-form-label__input"  
        name={props.name}
        type={props.type}
        id={props.id}
        required
      />
      <span id={props.spanId} className="auth-form-label__span">{props.errorMessage}</span>
    </label>
  );
}
  
export default AuthFormLabel;
