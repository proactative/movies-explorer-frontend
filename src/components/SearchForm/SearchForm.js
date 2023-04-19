import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__search-area">
        <input className="search-form__input" type="text" required placeholder="Фильм" id="movie"></input>
        <button className="search-form__button"></button>
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
