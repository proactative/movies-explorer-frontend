import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Main from '../Main/Main'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Footer from '../Footer/Footer'
import BurgerPopup from '../BurgerPopup/BurgerPopup'

function App() {
  let location = useLocation()
  const [burgerClicked, setBurgerClicked] = React.useState(false)

  function handleBurgerIconClick() {
    setBurgerClicked(true)
  }

  function handleCloseIconClick() {
    setBurgerClicked(false)
  }

  return (
    <div className={burgerClicked ? 'app app_fixed-height' : 'app'}>
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ||
      location.pathname === '/profile' ? (
        <Header onBurgerButtonClick={handleBurgerIconClick}/>
      ) : (
        ''
      )}
      <main className="app__content">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Main />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ? (
        <Footer />
      ) : (
        ''
      )}
      <BurgerPopup
        onCloseIconClick={handleCloseIconClick}
        className={
          !burgerClicked ? 'burger-popup' : 'burger-popup burger-popup_opened'
        }
      />
    </div>
  )
}

export default App
