import React from 'react'
import { useLocation } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const location = useLocation()
  return (
    <div className="footer">
      <div
        className={
          location.pathname === '/'
            ? 'footer__container'
            : 'footer__container footer__container_movies'
        }
      >
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bottom">
          <p className="footer__copyright">&copy;2023</p>
          <nav className="footer__links">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/proactative"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Github
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
