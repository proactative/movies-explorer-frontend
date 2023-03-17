import React from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
// import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies() {
  return (
    <section className="saved-movies" aria-label="сохранённые фильмы">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </section>
  )
}

export default SavedMovies
