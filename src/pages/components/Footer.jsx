import React from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='flex flex-col py-8 px-16 items-center bg-gray-200'>
        <div className='flex justify-center gap-8 items-center -ml-24'>
            <p className='font-poppins font-bold text-lg'>For better experience, download the BiteBlitz app now</p>
            <div className='flex gap-4'>
                <img src="/google.png" alt="" className='h-12' />
                <img src="/apple.png" alt="" className='h-12' />
            </div>
        </div>
        <div className='flex justify-evenly gap-20 mt-12 ml-16'>
            <ul className='flex flex-col gap-2 text-sm'>
                <li className='font-semibold text-lg pb-4'>Company</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Teams</li>
                <li>BiteBlitz Instacart</li>
            </ul>
            <ul className='flex flex-col gap-2 text-sm'>
                <li className='font-semibold text-lg pb-4'>Available in:</li>
                <li>Bangalore</li>
                <li>Hyederabad</li>
                <li>Gurgaon</li>
                <li>Delhi</li>
                <li>Pune</li>
                <li>Mumbai</li>
                <li className='flex gap-1 bg-white border items-center justify-center rounded-md font-semibold '>699 cities <IoChevronDownOutline /></li>
            </ul>
            <ul className='flex flex-col gap-2 text-sm'>
                <li className='font-semibold text-lg pb-4'>Support</li>
                <li>FAQ</li>
                <li>Help Center</li>
                <Link to="/contact-us">
                    <li>Contact Us</li>
                </Link>
            </ul>
            <ul className='flex flex-col gap-2 text-sm'>
                <li className='font-semibold text-lg pb-4'>Legal</li>
                <Link to="/privacy-policy">
                    <li>Privacy Policy</li>
                </Link>
                <Link to="/terms-of-use">
                    <li>Terms and <br /> Conditions</li>
                </Link>
                <li>Cookie Policy</li>
                <li>Investor Relations</li>
            </ul>
            <ul className='flex flex-col gap-2 text-sm'>
                <li className='font-semibold text-lg pb-4'>Contact Us</li>
                <li>support@biteblitz.com</li>
                <Link to='/partner-with-us'>
                    <li>Partner with us</li>
                </Link>
                <Link to='/ride-with-us'>
                    <li>Ride with us</li>
                </Link>
                <li>+1 (800) 123-4567</li>
                <li>123 Foodie Lane, Gourmet City, FL 12345</li>
            </ul>
        </div>
        <div className='flex flex-col justify-start border-b border-gray-600 w-[85%] ml-12'>
            <img src="/logo.png" alt="" className='h-12 object-contain w-36'/>
        </div>
        <div className='flex justify-between w-[85%] ml-12 mt-2'>
            <div className='text-sm font-semibold'>Privacy Policy | Terms of Service | © 2024 BiteBlitz</div>
            <div className='flex gap-2'>
               <FiFacebook />
               <FiInstagram />
               <FiTwitter />
               <FiLinkedin />
            </div>
        </div>
    </div>
  )
}

export default Footer