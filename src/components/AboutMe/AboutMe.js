import React from 'react'
import './AboutMe.css'
import SectionContainer from '../SectionContainer/SectionContainer'
import frontenderPhoto from '../../images/frontenderPhoto.jpg'
import Portfolio from '../Portfolio/Portfolio'

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <SectionContainer title="Студент">
        <div className="about-me__profile">
          <div className="about-me__info">
            <div className="about-me__personal-data">
              <h2 className="about-me__title">Татьяна Парфенюк</h2>
              <p className="about-me__subtitle">Junior Фронтенд-разработчик</p>
              <p className="about-me__report">
                Я с большим удовольствием прошла курс "Web-разрабочик" в
                Yandex.Practicum. После этого мир IT заиграл для меня новыми
                красками. У меня техническое образование и десятилетний опыт
                преподавания. Свободно владею английским языком. Люблю природу,
                здоровый образ жизни и изучение всего нового.
              </p>
            </div>
            <a
              className="about-me__github-link"
              href="https://github.com/proactative"
            >
              GitHub
            </a>
          </div>
          <img
            className="about-me__image"
            alt="моя фотография"
            src={frontenderPhoto}
          />
        </div>
        <Portfolio />
      </SectionContainer>
    </div>
  )
}

export default AboutMe
