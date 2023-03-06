import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LazyLoadingButton from '../LazyLoadingButton/LazyLoadingButton';
import Footer from '../Footer/Footer';
import BurgerPopup from '../BurgerPopup/BurgerPopup';

function Movies() {
  const [burgerClicked, setBurgerClicked] = React.useState(false);

  function handleBurgerIconClick() {
    setBurgerClicked(true);
  }

  function handleCloseIconClick() {
    setBurgerClicked(false);
  }

  return (
    <div className="movies">
      <Header>
        <Navigation onBurgerButtonClick={handleBurgerIconClick} />
      </Header>
      <div className="movies__content">
        <SearchForm />
        <Preloader />
        <MoviesCardList />
        <LazyLoadingButton />
      </div>
      <Footer />
      { burgerClicked && <BurgerPopup onCloseIconClick={handleCloseIconClick} /> }
    </div>
  );
}
  
export default Movies;
