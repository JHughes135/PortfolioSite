import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

var count;

const App = () => {

  updateVisitCount();
  return (
    <>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer  />



    </>

    
  )

  function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/JHughes135/Portfolio/?amount=1')
      .then(res => res.json())
      .then(res => {
        console.log(res.value);
      });

      
  }
}

export default App