import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <nav className="portfolio__links">
        <a
          href="https://proactative.github.io/how-to-learn/"
          rel="noreferrer"
          className="portfolio__link"
          target="_blank"
        >
          <p className="portfolio__link-text">Статичный сайт</p>
          <span className="portfolio__link-span" />
        </a>
        <a
          href="https://proactative.github.io/russian-travel/index.html"
          rel="noreferrer"
          className="portfolio__link"
          target="_blank"
        >
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <span className="portfolio__link-span" />
        </a>
        <a
          href="https://proactative.mesto.front.nomoredomainsclub.ru"
          rel="noreferrer"
          className="portfolio__link"
          target="_blank"
        >
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <span className="portfolio__link-span" />
        </a>
      </nav>
    </div>
  )
}

export default Portfolio
