import React from 'react';
import './AuthFormLabel.css';

function AuthFormLabel(props) {
  return (
    <label className="auth-form-label">
     {props.labelText}
      <input 
        className={props.inputClassName}
        name={props.name}
        type={props.type}
        id={props.id}
        value={props.value}
        required
        minLength={props.minLength}
        maxLength={props.gmaxLength}
        onChange={props.onChancheHandler}
        pattern={props.pattern}
      />
      <span id={props.spanId} className="auth-form-label__span">{props.errorMessage}</span>
    </label>
  );
}
  
export default AuthFormLabel;
