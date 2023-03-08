import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
      <div className="nav-tab">
        <ul className="nav-tab__links">
          <li><a className="nav-tab__link" href="#about-project">О проекте</a></li>
          <li><a className="nav-tab__link" href="#techs">Технологии</a></li>
          <li><a className="nav-tab__link" href="#about-me">Студент</a></li>
        </ul>
      </div>
    );
}
  
export default NavTab;
