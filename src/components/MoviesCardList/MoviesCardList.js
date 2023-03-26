import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {
  const storageSavedMovies = JSON.parse(localStorage.getItem('SavedMoviesList'))
    ?.savedMovies

  return (
    <ul className="movies-card-list">
      {props.list.map((item, index) => (
        <MoviesCard
          key={index}
          movie={item}
          isSaved={
            !storageSavedMovies?.some((movie) => movie.nameRU === item.nameRU)
              ? false
              : true
          }
          putLiked={props.putLiked}
          removeLiked={props.removeLiked}
        />
      ))}
    </ul>
  )
}

export default MoviesCardList
