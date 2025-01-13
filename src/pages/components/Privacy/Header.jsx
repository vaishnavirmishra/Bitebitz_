import React from 'react'
import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-col gap-12'>
        <Navbar />
        <div className='mt-24 flex flex-col items-center justify-center'>
            <h1 className='font-serif text-4xl text-[#ff6443]'>Privacy Statement</h1>

            <div className='mt-12 text-2xl flex justify-evenly w-full border-b border-b-black pb-4'>
                <NavLink
                    to="/privacy-policy"
                    className={({ isActive }) =>
                    isActive ? 'text-[#19BAAB]' : 'hover:text-[#19BAAB] transition-all duration-200'
                    }
                >
                Privacy Policy
                </NavLink>
                <NavLink
                    to="/terms-of-use"
                    className={({ isActive }) =>
                    isActive ? 'text-[#19baab]' : 'hover:text-[#19baab] transition-all duration-200'
                    }
                >
                Terms of use
                </NavLink>
            </div>
        </div>  
    </div>
  )
}

export default Header