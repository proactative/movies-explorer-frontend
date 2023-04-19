import React from 'react'
import { useLocation } from 'react-router-dom'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
  const [isFormValid, setIsFormValid] = React.useState(false)
  const [movieRequest, setMovieRequest] = React.useState('')
  let location = useLocation()
  const inputValue = location.pathname === '/movies' ? JSON.parse(localStorage.getItem('movieRequest'))?.movieRequest : ''

  function handleInputChange(e) {
    localStorage.removeItem('movieRequest')
    setMovieRequest(e.target.value)

    if (e.target.validity.valid) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }

  function submit(e) {
    e.preventDefault()
    props.downloadFilms(movieRequest)
  }

  return (
    <form className="search-form" onSubmit={submit}>
      <div className="search-form__search-area">
        <input
          className="search-form__input"
          type="text"
          required
          placeholder="Фильм"
          id="movie"
          onChange={handleInputChange}
          value={inputValue || movieRequest} 
          name="movie"
        />
        <button
          className={
            isFormValid
              ? 'search-form__button'
              : 'search-form__button search-form__button_disabled'
          }
          type="submit"
        ></button>
      </div>
      <FilterCheckbox toggleSearchShortFilms={props.toggleSearchShortFilms} />
    </form>
  )
}

export default SearchForm
