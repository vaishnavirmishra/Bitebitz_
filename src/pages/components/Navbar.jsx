import React from 'react';
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between px-8 z-40 bg-white py-6 items-center fixed w-full'>
      <div className='flex justify-between w-[25%]'>
        <img src="/logo.png" alt="" className='h-12' />
        <button className='text-gray-600 border flex items-center gap-2 border-gray-600 px-4 rounded-full font-bold font-poppins'>Deliver To: <FaChevronDown className='text-gray-400' /></button>
      </div>
      
      <ul className='flex justify-between w-[33%] text-lg font-semibold text-gray-600'>
      <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-[#ff6443]' : 'hover:text-[#ff6443] transition-all duration-200'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'text-[#ff6443]' : 'hover:text-[#ff6443] transition-all duration-200'
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? 'text-[#ff6443]' : 'hover:text-[#ff6443] transition-all duration-200'
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/offers"
            className={({ isActive }) =>
              isActive ? 'text-[#ff6443]' : 'hover:text-[#ff6443] transition-all duration-200'
            }
          >
            Offers
          </NavLink>
        </li>
      </ul>

      <div className='flex justify-end gap-8 text-lg w-[33%] text-gray-600 font-semibold'>
        <button className='flex items-center gap-2'><FaSearch />Search</button>
        <button className='border border-black text-black px-4 py-2 rounded-full'>Login</button>
        <button className='border-[#ff6443] text-white bg-[#ff6443] py-2 px-4 rounded-full'>Register</button>   
      </div>
      
    </div>
  )
}

export default Navbar