import React from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import LazyLoading from '../LazyLoading/LazyLoading'
import * as Info from '../../utils/constants'

function Movies(props) {
  let [number, setNumber] = React.useState(getInitialNumber())
  let countedList = props.list.slice(0, number)
  let resizeTimeout;

  React.useEffect(() => {
    window.addEventListener("resize", resizeThrottler)
  })

  const resizeThrottler = ()  => {
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        setNumber(getInitialNumber())
      }, 2000);
    }
  }

  function getInitialNumber() {
    if (window.innerWidth >= 1201) {
      return Info.INITIAL_CARD_NUMBER_LARGE_SCREEN
    } else if (window.innerWidth >= 768) {
      return Info.INITIAL_CARD_NUMBER_MID_SCREEN
    } else {
      return Info.INITIAL_CARD_NUMBER_SMALL_SCREEN
    }
  }

  function handleMoreFilms() {
    if (window.innerWidth < 769) {
      setNumber((number += Info.ADDITIONAL_CARD_NUMBER_MID_AND_SMALL_SCREEN))
    } else {
      setNumber((number += Info.ADDITIONAL_CARD_NUMBER_LARGE_SCREEN))
    }
    countedList = props.list.slice(0, number)
  }

  return (
    <section className="movies" aria-label="фильмы">
      <SearchForm
        downloadFilms={props.downloadFilms}
        toggleSearchShortFilms={props.toggleSearchShortFilms}
      />
      <Preloader isLoading={props.isLoading} />
      {props.list.length === 0 && props.wasSearched && !props.isLoading && <p className="movies__warning">Ничего не найдено</p>}
      <MoviesCardList
        list={countedList}
        putLiked={props.putLiked}
        removeLiked={props.removeLiked}
      />
      {props.list.length > countedList.length ? (
        <LazyLoading handleMoreFilms={handleMoreFilms} />
      ) : (
        ''
      )}
      
    </section>
  )
}

export default Movies
