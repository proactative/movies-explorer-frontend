import React from 'react'
import './LazyLoading.css'

function LazyLoading(props) {
  return (
    <div className="lazy-loading">
      <button
        className="lazy-loading__button"
        type="button"
        onClick={props.handleMoreFilms}
      >
        Ещё
      </button>
    </div>
  )
}

export default LazyLoading
