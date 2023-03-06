import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__bottom">
          <p className="footer__copyright">&copy;2023</p>
          <nav className="footer__links">
            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
            <a href="https://github.com/proactative" target="_blank" rel="noreferrer" className="footer__link">Github</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
  
export default Footer;
