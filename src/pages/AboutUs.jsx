import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutHero from './components/About/AboutHero'
import WhoWeAre from './components/About/WhoWeAre'
import OurMissions from './components/About/OurMissions'
import Reviews from './components/About/ReviewCarousel'
import TeamMembers from './components/About/TeamMembers'

function AboutUs() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <AboutHero />
        <WhoWeAre />
        <OurMissions />
        <TeamMembers />
        <Reviews />
        <Footer />
    </div>
  )
}

export default AboutUs