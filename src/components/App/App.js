import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
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
import * as MainApi from '../../utils/MainApi'
import * as MoviesApi from '../../utils/MoviesApi'
import * as Info from '../../utils/constants'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import InfoPopup from '../InfoPopup/InfoPopup'
import { CurrentUserContext } from '../Context/CurrentUserContext'

function App() {
  let location = useLocation()
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' })
  const [burgerClicked, setBurgerClicked] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState(false)

  //for InfoPopup
  const [infoPopupShown, setInfoPopupShown] = React.useState(false)
  const [isActionSuccess, setIsActionSuccess] = React.useState(false)
  const [infoMessage, setInfoMessage] = React.useState('')

  //for movies
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLoadingSaved, setIsLoadingSaved] = React.useState(false)
  const [wasSearched, setWasSearched] = React.useState(false)
  const [wasSearchedSaved, setWasSearchedSaved] = React.useState(false)
  const [renderedListMovies, setRenderedListMovies] = React.useState([])
  const [savedMovies, setSavedMovies] = React.useState([])
  const [renderedListSavedMovies, setRenderedListSavedMovies] = React.useState(
    [],
  )

  function handleBurgerIconClick() {
    setBurgerClicked(true)
  }

  function handleCloseBurgerMenuPopup() {
    setBurgerClicked(false)
  }

  function handleCloseInfoPopup() {
    setInfoPopupShown(false)
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((data) => {
        if (data.token) {
          setIsActionSuccess(true)
          setLoggedIn(true)
          navigate('/movies')
        }
      })
      .then(() => {
        MainApi.getUserInfo().then((data) => {
          setCurrentUser({ name: data.name, email: data.email })
        })
        localStorage.setItem(
          'onlyShortFilms',
          JSON.stringify({
            onlyShortFilms: false,
          }),
        )
        handleDownloadSavedMovies()
      })
      .catch((err) => {
        if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_LOGIN_UNAUTHORISED)
          setInfoPopupShown(true)
        } else if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_TOKEN_ERROR)
          setInfoPopupShown(true)
        } else {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_SERVER_ERROR)
          setInfoPopupShown(true)
        }
      })
  }

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        if (res.status !== 400) {
          setLoggedIn(true)
          setIsActionSuccess(true)
          setInfoMessage(Info.MESSAGE_REGISTOR_SUCCESS)
          setInfoPopupShown(true)
          setCurrentUser({ name: name, email: email })
          navigate('/movies')
          return { ...res, password }
        }
      })
      .then((data) => {
        MainApi.login(data.email, data.password)
        localStorage.setItem(
          'SavedMoviesList',
          JSON.stringify({
            savedMovies: savedMovies,
          }),
        )
        localStorage.setItem(
          'onlyShortFilms',
          JSON.stringify({
            onlyShortFilms: false,
          }),
        )
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_CONFLICT)
          setInfoPopupShown(true)
        } else if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_TOKEN_ERROR)
          setInfoPopupShown(true)
        } else {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_SERVER_ERROR)
          setInfoPopupShown(true)
        }
      })
  }

  React.useEffect(() => {
    handleCheckToken()
  }, [])

  function handleCheckToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      MainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true)
          }
        })
        .then(() => {
          MainApi.getUserInfo().then((data) => {
            setCurrentUser({ name: data.name, email: data.email })
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  function handleUpdateUserInfo(name, email) {
    MainApi.updateUserData(name, email)
      .then(() => {
        setInfoMessage(Info.MESSAGE_PROFILE_SUCCESS)
        setIsActionSuccess(true)
        setInfoPopupShown(true)
        setCurrentUser({ name: name, email: email })
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_CONFLICT)
          setInfoPopupShown(true)
        } else if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_TOKEN_INCORRECT)
          setInfoPopupShown(true)
        } else {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_PROFILE_ERROR)
          setInfoPopupShown(true)
        }
      })
  }

  function handleLogOut() {
    localStorage.removeItem('jwt')
    localStorage.removeItem('MoviesList')
    localStorage.removeItem('SavedMoviesList')
    localStorage.removeItem('onlyShortFilms')
    localStorage.removeItem('onlyShortSavedFilms')
    localStorage.removeItem('movieRequest')
    setSavedMovies([])
    setRenderedListMovies([])
    setRenderedListSavedMovies([])
    setWasSearched(false)
    setWasSearchedSaved(false)
    setLoggedIn(false)
  }

  function handleDownloadSavedMovies() {
    MainApi.getSavedMovies()
      .then((savedMovies) => {
        localStorage.setItem(
          'SavedMoviesList',
          JSON.stringify({
            savedMovies: savedMovies,
          }),
        )
        setRenderedListSavedMovies(savedMovies)
      })
      .catch((err) => {
        if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_TOKEN_INCORRECT)
          setInfoPopupShown(true)
        } else {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_LOADING_ERROR)
          setInfoPopupShown(true)
        }
      })
  }

  React.useEffect(() => {
    handleDownloadSavedMovies()
  }, [])

  function handleDownloadFilms(movieRequest) {
    setIsLoading(true)
    setWasSearched(true)
    MoviesApi.getAllMovies()
      .then((movies) => {
        localStorage.setItem(
          'movieRequest',
          JSON.stringify({
            movieRequest: movieRequest,
          }),
        )
        const filteredMovies = movies.filter((item) =>
          item.nameRU.toLowerCase().includes(movieRequest.toLowerCase()),
        )
        localStorage.setItem(
          'MoviesList',
          JSON.stringify({
            filteredMovies: filteredMovies,
          }),
        )
        localStorage.setItem(
          'onlyShortSavedFilms',
          JSON.stringify({
            onlyShortFilms: false,
          }),
        )
        handleToggleSearchShortFilms()
      })
      .catch((err) => {
        if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_TOKEN_INCORRECT)
          setInfoPopupShown(true)
        } else {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_LOADING_ERROR)
          setInfoPopupShown(false)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleToggleSearchShortFilms() {
    if (JSON.parse(localStorage.getItem('onlyShortFilms')).onlyShortFilms) {
      setRenderedListMovies(
        JSON.parse(localStorage.getItem('MoviesList')).filteredMovies.filter(
          (item) => item.duration < 40,
        ),
      )
    } else {
      setRenderedListMovies(
        JSON.parse(localStorage.getItem('MoviesList')).filteredMovies,
      )
    }
  }

  function handleToggleSearchOnlyShortShortFilms() {
    if (
      JSON.parse(localStorage.getItem('onlyShortSavedFilms')).onlyShortFilms
    ) {
      setRenderedListSavedMovies(
        JSON.parse(localStorage.getItem('SavedMoviesList')).savedMovies.filter(
          (item) => item.duration < 40,
        ),
      )
    } else {
      setRenderedListSavedMovies(
        JSON.parse(localStorage.getItem('SavedMoviesList')).savedMovies,
      )
    }
  }

  function handlePutLiked(movie) {
    MainApi.saveLikedMovie(movie)
      .then(() => {
        MainApi.getSavedMovies()
          .then((savedMovies) => {
            setSavedMovies(savedMovies)
            return savedMovies
          })
          .then((savedMovies) => {
            localStorage.setItem(
              'SavedMoviesList',
              JSON.stringify({
                savedMovies: savedMovies,
              }),
            )
            setRenderedListSavedMovies(
              JSON.parse(localStorage.getItem('SavedMoviesList')).savedMovies,
            )
          })
      })
      .catch((err) => {
        if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_TOKEN_INCORRECT)
          setInfoPopupShown(true)
        } else {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_SERVER_ERROR)
          setInfoPopupShown(false)
        }
      })
  }

  function handleRemoveLiked(movieId) {
    MainApi.deleteSavedMovie(movieId).then(() => {
      MainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies)
          return savedMovies
        })
        .then((savedMovies) => {
          localStorage.setItem(
            'SavedMoviesList',
            JSON.stringify({
              savedMovies: savedMovies,
            }),
          )
          setRenderedListSavedMovies(
            JSON.parse(localStorage.getItem('SavedMoviesList')).savedMovies,
          )
        })
        .catch((err) => {
          if (err.status === 401) {
            setIsActionSuccess(false)
            setInfoMessage(Info.MESSAGE_TOKEN_INCORRECT)
            setInfoPopupShown(true)
          } else {
            setIsActionSuccess(false)
            setInfoMessage(Info.MESSAGE_SERVER_ERROR)
            setInfoPopupShown(false)
          }
        })
    })
  }

  function handleDownloadFilteredSavedMovies(savedMovieRequest) {
    setIsLoadingSaved(true)
    setWasSearchedSaved(true)
    MainApi.getSavedMovies()
      .then((savedMovies) => {
        const result = savedMovies.filter((item) =>
          item.nameRU.toLowerCase().includes(savedMovieRequest.toLowerCase()),
        )
        return result
      })
      .then((result) => {
        localStorage.setItem(
          'SavedMoviesList',
          JSON.stringify({
            savedMovies: result,
          }),
        )
        setRenderedListSavedMovies(result)
      })
      .then(() => {
        setIsLoadingSaved(false)
      })
      .catch((err) => {
        if (err.status === 401) {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_TOKEN_INCORRECT)
          setInfoPopupShown(true)
        } else {
          setIsActionSuccess(false)
          setInfoMessage(Info.MESSAGE_LOADING_ERROR)
          setInfoPopupShown(false)
        }
      })
      .finally(() => {
        setIsLoadingSaved(false)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className={
          burgerClicked || infoPopupShown ? 'app app_fixed-height' : 'app'
        }
      >
        {location.pathname === '/' ||
        location.pathname === '/movies' ||
        location.pathname === '/saved-movies' ||
        location.pathname === '/profile' ? (
          <Header
            onBurgerButtonClick={handleBurgerIconClick}
            loggedIn={loggedIn}
          />
        ) : (
          ''
        )}
        <main className="app__content">
          <Routes>
            <Route
              path="/signup"
              element={
                <Register handleRegister={handleRegister} loggedIn={loggedIn} />
              }
            />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    downloadFilms={handleDownloadFilms}
                    isLoading={isLoading}
                    putLiked={handlePutLiked}
                    removeLiked={handleRemoveLiked}
                    list={renderedListMovies}
                    toggleSearchShortFilms={handleToggleSearchShortFilms}
                    wasSearched={wasSearched}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    list={renderedListSavedMovies}
                    wasSearched={wasSearchedSaved}
                    removeLiked={handleRemoveLiked}
                    isLoading={isLoadingSaved}
                    toggleSearchShortFilms={
                      handleToggleSearchOnlyShortShortFilms
                    }
                    downloadFilms={handleDownloadFilteredSavedMovies}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    handleUpdateUserInfo={handleUpdateUserInfo}
                    handleLogOut={handleLogOut}
                  />
                </ProtectedRoute>
              }
            />
            <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
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
          onCloseIconClick={handleCloseBurgerMenuPopup}
          className={
            !burgerClicked ? 'burger-popup' : 'burger-popup burger-popup_opened'
          }
        />
        <InfoPopup
          className={
            !infoPopupShown ? 'info-popup' : 'info-popup info-popup_shown'
          }
          isActionSuccess={isActionSuccess}
          onCloseIconClick={handleCloseInfoPopup}
          infoMessage={infoMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
