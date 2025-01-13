import React from 'react'
import Footer from './components/Footer'
import Header from './components/Contact/Header'
import FormCard from './components/Contact/FormCard'
import DetailCard from './components/Contact/DetailCard'

function ContactUs() {
  return (
    <div className='flex flex-col'>
        <Header />
        <div className='flex'>
            <div className='w-[60%]'>
                <FormCard />
                <DetailCard />
            </div>
            <div className='w-[40%]'>
                <img src="/Contact/Frame 1000009826 (1).png" alt="" />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs