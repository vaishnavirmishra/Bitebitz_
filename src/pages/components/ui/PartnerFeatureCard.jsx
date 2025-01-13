import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function Card({image, title, para, className}) {
  return (
    <div className={`${className} flex gap-4`}>
        <img src={image} alt="" className='h-32 mr-2' />
        <div>
            <h1 className='text-xl font-roboto-serif font-semibold'>{title}</h1>
            <p className='text-sm text-gray-600'>{para}</p>
            <button className='text-xs mt-2 text-[#ff6443] flex items-center gap-2'>Read More <FaArrowTrendUp className='text-gray-500'/></button>
        </div>
    </div>
  )
}

export default Card