import React from 'react'
import './AuthForm.css'

function Auth(props) {
  return (
    <div className="auth">
      <h2 className="auth__title">{props.formTitle}</h2>
      <form className="auth__form" onSubmit={props.onSubmitFunction}>
        <fieldset className="auth__fieldset">{props.children}</fieldset>
        <button
          className={props.className}
          type="submit"
          disabled={props.disabled}
        >
          {props.buttonTitle}
        </button>
      </form>
    </div>
  )
}

export default Auth
