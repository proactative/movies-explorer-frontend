import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function Movies() {
    return (
      <div className="movies">
        <Header />
        <SearchForm />
        <Preloader />
        <MoviesCardList />
        <MoviesCard />
        <Footer />
      </div>
    );
}
  
export default Movies;
