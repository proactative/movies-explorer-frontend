import React from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies(props) {
  return (
    <section className="saved-movies" aria-label="сохранённые фильмы">
      <SearchForm
        toggleSearchShortFilms={props.toggleSearchShortFilms}
        downloadFilms={props.downloadFilms}
      />
      <Preloader isLoading={props.isLoading} />
      {props.list.length === 0 && props.wasSearched && !props.isLoading && (
        <p className="saved-movies__warning">Ничего не найдено</p>
      )}
      <MoviesCardList
        list={props.list}
        removeLiked={props.removeLiked}
        toggleSearchShortFilms={props.toggleSearchShortFilms}
      />
    </section>
  )
}

export default SavedMovies
