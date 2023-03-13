import React from 'react'
import './SectionContainer.css'

function SectionContainer(props) {
  return (
    <div className="section-container">
      <h3 className="section-container__title">{props.title}</h3>
      {props.children}
    </div>
  )
}

export default SectionContainer
