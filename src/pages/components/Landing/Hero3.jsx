import React from 'react'
import { FaArrowTurnUp, FaPlay } from "react-icons/fa6";

function Hero3() {
  return (
    <div className='p-20 pb-0 h-screen bg-[#eee4e1] flex justify-between gap-12 overflow-hidden'>
        <div className='w-[50%]'>
            <h1 className='text-5xl text-[#ff6443] font-poppins font-bold leading-relaxed capitalize'>The best <br /> quality & <br /> fresh to choose.</h1>
            <p className='text-gray-500 text-lg'>"Looking for a healthy and hygienic meal while travelling <br /> by a train? Look no further! Visit our website or app and <br /> order now. We provide delicious, home-style meals that <br /> will make you feel right at home"</p>
            <div className='flex gap-3 py-4'>
                <img src="/Ellipse 14.png" alt="" className='h-10' />
                <img src="/Ellipse 15.png" alt="" className='h-10' />
                <img src="/Ellipse 16.png" alt="" className='h-10' />
                <img src="/Ellipse 17.png" alt="" className='h-10' />
                <div className='h-10 w-10 bg-[#346e6a] rounded-full text-white flex justify-center items-center'><FaArrowTurnUp /></div>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-[#ff6443] text-white px-4 py-2 rounded-lg shadow-md'>Order Now!</button>
                <button className='font-semibold flex items-center gap-2'>
                    <div className='h-12 w-12 flex justify-center items-center bg-white rounded-full'><FaPlay /></div>
                    <p className='text-[#346e6a]'>Order Process</p>
                </button>
            </div>
        </div>
        
        <div className=''>
            <div className='ml-36'>
                <img src="/Ellipse 11.png" alt="" className='h-52 ml-24 mt-44' />
                <img src="/Ellipse 12.png" alt="" className='h-80 -mt-96 ml-32' />
                <img src="/Frame 1000004459.png" alt="" className='h-72 -mt-96 ml-32' />
            </div>
            
            <img src="Coca cola bottle.png" alt="" className='h-40 ml-44' />
            <img src="Group 1000004083.png" alt="" className='h-60 ml-68 -mt-8' />
            <img src="/scooter.png" alt="" className='h-80 -ml-32 -mt-80' />

            <div className='transform rotate-12 -mt-44 flex relative -top-8 left-[95%]'>
                <img src="/Vector 5.png" alt="" className='h-8 transform scale-[-1]' />
                <img src="/Vector 5.png" alt="" className='-ml-4 h-8' />
                <img src="/Vector 5.png" alt="" className='-ml-4 h-8' />
            </div>
            
        </div>
    </div>
  )
}

export default Hero3