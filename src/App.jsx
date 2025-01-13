import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Partner from './pages/Partner';
import Ride from './pages/Ride';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './pages/components/ui/Scroll';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-of-use' element={<Terms />} />
        <Route path='/partner-with-us' element={<Partner />} />
        <Route path='/ride-with-us' element={<Ride />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
