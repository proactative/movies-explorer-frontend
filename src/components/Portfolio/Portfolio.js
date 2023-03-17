import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a
            href="https://proactative.github.io/how-to-learn/"
            rel="noreferrer"
            className="portfolio__link"
            target="_blank"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <span className="portfolio__link-span" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://proactative.github.io/russian-travel/index.html"
            rel="noreferrer"
            className="portfolio__link"
            target="_blank"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <span className="portfolio__link-span" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://proactative.mesto.front.nomoredomainsclub.ru"
            rel="noreferrer"
            className="portfolio__link"
            target="_blank"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <span className="portfolio__link-span" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
