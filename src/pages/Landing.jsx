import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Landing/Hero'
import Footer from './components/Footer'
import Hero2 from './components/Landing/Hero2'
import Collections from './components/Landing/Collections'
import Features from './components/Landing/Features'
import Hero3 from './components/Landing/Hero3'
import Reviews from './components/Landing/Reviews'
import GetInTouch from './components/Landing/GetInTouch'
import FAQSection from './components/Landing/FAQ'

function Landing() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Hero />
        <Hero2 />
        <Collections />
        <Features />
        <Hero3 />
        <Reviews />
        <GetInTouch />
        <FAQSection />
        <Footer />
    </div>
  )
}

export default Landing