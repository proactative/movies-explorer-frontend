import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import NavigationPromo from '../NavigationPromo/NavigationPromo'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <div className="main">
      <Header>
        <NavigationPromo />
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default Main
