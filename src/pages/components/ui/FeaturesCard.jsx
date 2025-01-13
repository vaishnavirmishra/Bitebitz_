import React from 'react'

function FeaturesCard({icon, title, desc, className}) {
  return (
    <div className={`flex flex-col gap-2 p-8 ${className}`}>
        <div className='text-2xl text-[#ff6443]'>{icon && React.createElement(icon)}</div>
        <h1 className='text-2xl font-bold font-poppins'>{title}</h1>
        <p className='text-gray-500'>{desc}</p>
    </div>
  )
}

export default FeaturesCard