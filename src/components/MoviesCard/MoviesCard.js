import React from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

function MoviesCard(props) {
  const location = useLocation()
  const storageSavedMovies = JSON.parse(localStorage.getItem('SavedMoviesList'))
    ?.savedMovies

  const movieImage =
  location.pathname === '/saved-movies'
    ? props.movie.image
    : 'https://api.nomoreparties.co/' + props.movie.image.url

  const handleMoviePageButtonrender = props.isSaved
    ? 'movies-card__button movies-card__button_select movies-card__button_chosen'
    : 'movies-card__button movies-card__button_select'

  const movieButton =
    location.pathname === '/saved-movies'
      ? 'movies-card__button movies-card__button_delete'
      : handleMoviePageButtonrender

  const ariaLabel =
    location.pathname === '/saved-movies'
      ? 'кнопка удаления из избранного'
      : 'кнопка сохранения в избранное'

  function toggleLiked(e) {
    if (
      !storageSavedMovies.some((item) => item.nameEN === props.movie.nameEN)
    ) {
      props.putLiked(props.movie)
      e.target.classList.add('movies-card__button_chosen')
    } else {
      const item = storageSavedMovies.find(
        (item) => item.nameEN === props.movie.nameEN,
      )
      props.removeLiked(item._id)
      e.target.classList.remove('movies-card__button_chosen')
    }
  }

  function formatDuration(duration) {
    if (duration > 60) {
      let hours, minutes
      hours = Math.floor(duration / 60)
      minutes = duration - hours * 60
      return `${hours}ч ${minutes}м`
    }
    return `${duration}м`
  }

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__about">
          <h2 className="movies-card__title">{props.movie.nameRU}</h2>
          <p className="movies-card__duration">
            {formatDuration(props.movie.duration)}
          </p>
        </div>
        <button
          className={movieButton}
          aria-label={ariaLabel}
          type="button"
          onClick={toggleLiked}
        />
      </div>
      <a
        href={props.movie.trailerLink}
        className="movie-card__link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={movieImage}
          className="movies-card__image"
          alt={'постер фильма' + props.movie.nameRU}
        />
      </a>
    </article>
  )
}

export default MoviesCard
