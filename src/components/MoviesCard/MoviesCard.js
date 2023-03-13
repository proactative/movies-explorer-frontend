import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import moviesCardImage from '../../images/movieCardImage.jpg';

function MoviesCard() {
  const location = useLocation();

  const movieButton = location.pathname === '/saved-movies'
  ? "movies-card__button movies-card__button_delete"
  : "movies-card__button movies-card__button_select";

  const ariaLabel = location.pathname === '/saved-movies'
  ? "кнопка удаления из избранного"
  : "кнопка сохранения в избранное";

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__about">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        <button className={movieButton} aria-label={ariaLabel} type="button" />
      </div>
      <img src={moviesCardImage} className="movies-card__image" alt="постер фильма" />
    </article>
  );
}
  
export default MoviesCard;
