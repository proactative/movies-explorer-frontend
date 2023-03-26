import React from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import LazyLoading from '../LazyLoading/LazyLoading'

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
      return 12
    } else if (window.innerWidth >= 768) {
      return 8
    } else {
      return 5
    }
  }

  function handleMoreFilms() {
    if (window.innerWidth < 769) {
      setNumber((number += 2))
    } else {
      setNumber((number += 3))
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
