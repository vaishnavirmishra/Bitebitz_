import React from 'react'
import ContactCard from '../ui/ContactCard'
import { HiPhoneMissedCall } from "react-icons/hi";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";

function DetailCard() {
    const details = [
        {symbol: HiPhoneMissedCall, title: 'Have any question?', desc: 'Free + 19 (078) - 0496'},
        {symbol: CiMail, title: 'Write Mail', desc: 'kenzi.lawson@example.com'},
        {symbol: CiLocationOn, title: 'Visit anytime', desc: '8080 Railroad St.'},
        {symbol: FaClockRotateLeft, title: 'Have any question?', desc: 'Mon - Sat (9.00 to 7.00)', desc2: 'Sunday Closed'},  
    ]
  return (
    <div className='ml-20 my-12 px-8 py-4 border -mt-4 border-gray-700 rounded-xl'>
        <p className='text-[#19baab] capitalize'>Need any help?</p>
        <h1 className='capitalize text-[#ff6443] mt-2 text-4xl font-medium'>How can we assist you?</h1>
        <p className='capitalize text-2xl text-gray-400 mt-2'>Our team is ready to help you with any questions <br /> or inquiries. Just fill out the form below</p>
        <div className="p-8 flex flex-col gap-4">
            {details.map((detail, index) => (
                <ContactCard 
                    key={index}
                    symbol={detail.symbol}
                    title={detail.title}
                    desc={detail.desc}
                    desc2={detail.desc2}
                />
            ))}
        </div>
    </div>
  )
}

export default DetailCard