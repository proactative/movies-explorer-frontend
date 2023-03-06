import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
      <div className="saved-movies">
        <Header>
          <Navigation />
        </Header> 
        <div className="saved-movies__content">
          <SearchForm />
          {/* <MoviesCardList />*/}
        </div>
        <Footer />
      </div>
    );
}
  
export default SavedMovies;
