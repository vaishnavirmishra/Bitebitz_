import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Partner/Header'
import Benefits from './components/Partner/Benefits'
import Hero from './components/Partner/Hero'
import Cafe from './components/Partner/Cafe'
import FAQ from './components/Partner/FAQ'
import GetInTouch from './components/Partner/GetInTouch'

function Partner() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Header />
        <Benefits />
        <Hero />
        <Cafe />
        <FAQ />
        <GetInTouch />
        <Footer />
    </div>
  )
}

export default Partner