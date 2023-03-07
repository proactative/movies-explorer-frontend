import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';

function Header(props) {
  const location = useLocation();
  return (
    <div className={location.pathname === "/" ? "header header_promo" : "header"}>
      <div className={location.pathname === "/" ? "header__container header__container_promo" : "header__container"}>
        <Logo />
        {props.children}    
      </div>
    </div>
  );
}
  
export default Header;
