import React from 'react'
import { Link } from 'react-router-dom'

function End() {
  return (
    <div className='w-full flex justify-center gap-8 mb-12'>
        <Link to="/"><button className='bg-gray-100 px-4 py-1 border-[#ff6443] border-2 rounded-full hover:bg-gray-200 transition-all duration-200'>Decline</button></Link>
        <Link to="/"><button className='border-2 border-[#ff6443] rounded-full px-4 py-1 bg-[#ff6443] hover:bg-orange-600 shadow-lg text-white transition-all duration-200 hover:border-orange-600'>Accept</button></Link>
    </div>
  )
}

export default End