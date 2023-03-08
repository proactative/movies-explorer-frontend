import React from 'react'
import './SavedMovies.css'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import BurgerPopup from '../BurgerPopup/BurgerPopup'

function SavedMovies() {
  const [burgerClicked, setBurgerClicked] = React.useState(false)

  function handleBurgerIconClick() {
    setBurgerClicked(true)
  }

  function handleCloseIconClick() {
    setBurgerClicked(false)
  }

  return (
    <div
      className={burgerClicked ? 'saved-movies_fixed-height' : 'saved-movies'}
    >
      <Header>
        <Navigation onBurgerButtonClick={handleBurgerIconClick} />
      </Header>
      <div className="saved-movies__content">
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer />
      <BurgerPopup
        onCloseIconClick={handleCloseIconClick}
        className={
          !burgerClicked ? 'burger-popup' : 'burger-popup burger-popup_opened'
        }
      />
    </div>
  )
}

export default SavedMovies
