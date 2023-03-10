import React from 'react'
import './InfoPopup.css'

function InfoPopup() {
  return (
    <div className="info-popup">
      <div className="info-popup__text-area">
        <h2 className="info-popup__text">Что-то пошло не так...</h2>
        <button type="button" className="info-popup__close-button" />
      </div>
    </div>
  )
}

export default InfoPopup
