import React from 'react'
import { PiQuotesBold } from "react-icons/pi";

function PartnerCard({image, name, post, remarks, className}) {
  return (
    <div className={`py-8 bg-white shadow-lg px-16 rounded-2xl ${className}`}>
        <p className='mb-4 leading-loose text-gray-600'>"{remarks}"</p>
        <div className='flex items-center'>
            <img src={image} alt={name} className='h-20 mr-4' />
            <div>
                <p className='text-[#064F48] font-bold mb-1'>{name}</p>
                <p>{post}</p>
            </div>
        </div>
    </div>
  )
}

export default PartnerCard