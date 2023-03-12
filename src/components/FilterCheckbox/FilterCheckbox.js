import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setIsChecked] =React.useState(false);

  function onChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="filter-checkbox">
      <input type="checkbox" onChange={onChange} className="filter-checkbox__input" id="filter" />
      <label for="filter" className="filter-checkbox__label" >
	      <div className={isChecked ? "filter-checkbox__circle filter-checkbox__circle_checked" : "filter-checkbox__circle"}></div>
      </label>
			<p className="filter-checkbox__subtitle">Короткометражки</p>
    </div>
  );
}
  
export default FilterCheckbox;
