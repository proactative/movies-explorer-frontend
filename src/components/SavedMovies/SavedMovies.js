import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
      <div className="saved-movies">
        <Header />
        <MoviesCardList />
        <MoviesCard />
        <Footer />
      </div>
    );
}
  
export default SavedMovies;
