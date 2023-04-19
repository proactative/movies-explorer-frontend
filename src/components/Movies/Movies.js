import React from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
// import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import LazyLoading from '../LazyLoading/LazyLoading'

function Movies() {
  return (
    <section className="movies" aria-label="фильмы">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <LazyLoading />
    </section>
  )
}

export default Movies
