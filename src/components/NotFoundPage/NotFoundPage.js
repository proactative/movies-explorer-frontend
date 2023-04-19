import React from 'react'
import './NotFoundPage.css'
import RedirectionLink from '../RedirectionLink/RedirectionLink'

function PageNotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <div className="not-found__bottom"><RedirectionLink to="./" linkTitle="Назад" /></div>
    </div>
  )
}

export default PageNotFound
