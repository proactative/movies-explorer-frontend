import React from 'react'
import './InfoPopup.css'

function InfoPopup(props) {
  return (
    <div className={props.className}>
      <div className="info-popup__text-area">
        <h2 className={props.isActionSuccess ? "info-popup__text success" : "info-popup__text error" }>{props.infoMessage}</h2>
        <button
          type="button"
          onClick={props.onCloseIconClick}
          className="info-popup__close-button"
          aria-label="кнопка закрытия"
        />
      </div>
    </div>
  )
}

export default InfoPopup
