import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Wallpaper from './components/Ride/Wallpaper'
import Features from './components/Ride/Features'
import AboutUs from './components/Ride/AboutUs'

function Ride() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Wallpaper />
        <Features />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Ride