import React from 'react'

function LocationButton({symbol, title, sub= null, className}) {
  return (
    <button className={`flex justify-between p-4 rounded-lg items-center bg-gray-50 shadow-right-heavy ${className}`}>
        <div className='w-full'>
            <h1 className={`text-lg font-poppins font-semibold ${sub ? 'text-left' : 'text-center'}`}>{title}</h1>
            {sub && <p className='text-gray-500 text-left'>{sub}</p>}
        </div>
        <div className='text-lg text-gray-500'>
            {symbol && React.createElement(symbol)}
        </div>
    </button>
  )
}

export default LocationButton