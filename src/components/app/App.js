import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup"><Register /></Route>
        <Route path="/signin"><Login /></Route>
        <Route path="/movies"><Movies /></Route>
        <Route path="/saved-movies"><SavedMovies /></Route>
        <Route path="/profile"><Profile /></Route>
        <Route exact path="/"><Main /></Route>
      </Routes>
    </div>
  );
}

export default App;
