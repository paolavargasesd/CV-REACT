import React from 'react'
import Header from  './components/header/header'
import About from './components/about/about'

import Nav from './components/nav/nav'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Contact from './components/Contact/contact'
import Particle from './components/Particle'





const app = () => {
  return (
    <>
      <Header />
      <About/>
      <Contact/>
      <Particle/>
   
    <Experience/>
      <Footer/>
      <Nav/>
    

      


    </>
  )
}

export default app