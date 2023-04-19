import React from 'react';
import {useLocation} from 'react-router-dom'
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const location = useLocation()
  const [onlyShortFilms, setOnlyShortFilms] = React.useState(false);
  const toggleView = location.pathname === '/movies' ? JSON.parse(localStorage.getItem('onlyShortFilms')).onlyShortFilms :  JSON.parse(localStorage.getItem('onlyShortSavedFilms')).onlyShortFilms

  function onChange() {
    if (location.pathname === '/movies') {
    setOnlyShortFilms(!onlyShortFilms)
    localStorage.setItem(
      'onlyShortFilms',
      JSON.stringify({
        onlyShortFilms: !onlyShortFilms,
      }),
    )
    } else {
      setOnlyShortFilms(!onlyShortFilms)
      localStorage.setItem(
        'onlyShortSavedFilms',
        JSON.stringify({
          onlyShortFilms: !onlyShortFilms,
        }),
      )
    }
    props.toggleSearchShortFilms();
  }

  return (
    <div className="filter-checkbox">
      <input type="checkbox" onChange={onChange} className="filter-checkbox__input" id="filter" />
      <label htmlFor="filter" className="filter-checkbox__label" >
	      <span className={toggleView ? "filter-checkbox__circle filter-checkbox__circle_checked" : "filter-checkbox__circle"}></span>
      </label>
			<p className="filter-checkbox__subtitle">Короткометражки</p>
    </div>
  );
}
  
export default FilterCheckbox;
