import React from 'react'
import SectionContainer from '../SectionContainer/SectionContainer'
import './AboutProject.css'

function AboutProject() {
  return (
    <div className="about-project" id="about-project">
      <SectionContainer title="O прoекте">
        <ul className="about-project__info">
          <li>
            <h4 className="about-project__title">
              Дипломный проект включал 5 этапов
            </h4>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li>
            <h4 className="about-project__title">
              На выполнение диплома ушло 5 недель
            </h4>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="about-project__scheme">
          <li className="about-project__part">
            <p className="about-project__duration about-project__duration_accent">
              1 неделя
            </p>
            <p className="about-project__work-type">Back-end</p>
          </li>
          <li className="about-project__part">
            <p className="about-project__duration">4 недели</p>
            <p className="about-project__work-type">Front-end</p>
          </li>
        </ul>
      </SectionContainer>
    </div>
  )
}

export default AboutProject
