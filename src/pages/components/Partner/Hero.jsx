import React from 'react'
import { LuMoveDown } from "react-icons/lu";

function Hero() {
  return (
    <div className='px-20 py-12'>
        <h1 className='text-4xl font-poppins text-[#ff6443] tracking-widest font-semibold text-center'>Partnering with <br /> BiteBlitz Made Easy</h1>
        <p className='text-lg text-gray-500 mt-4 text-center'>"Simple Steps to Start GrowingYour Business with BiteBlitz"</p>
        <div className='flex'>
            <div className='flex flex-col items-center'>
                <div>
                    <div></div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-2xl w-full font-semibold text-[#346E6A] mt-8'>Registration</h1>
                        <p>To register with BiteBlitz, simply fill out a short form with your business details, contact information, and menu. Once submitted, you'll receive confirmation and can proceed to the onboarding process. It's quick and hassle-free!</p>
                        <LuMoveDown className='text-3xl m-4 mb-0' />
                    </div>
                </div>
                <div>
                    <div></div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-2xl w-full font-semibold text-[#346E6A] mt-8'>Onboarding</h1>
                        <p>During onboarding, you'll easily set up your menu by adding food items, descriptions, and photos. You can customize pricing for each item and adjust based on demand. Additionally, you'll define your delivery preferences, such as operating hours and delivery zones, ensuring a smooth order process.</p>
                        <LuMoveDown className='text-3xl m-4 mb-0' />
                    </div>
                </div>
                <div>
                    <div></div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-2xl w-full font-semibold text-[#346E6A] mt-8'>Manage Orders & Consultations</h1>
                        <p>Seamlessly handle orders through the platform. Schedule consultations (virtual or in-person), collaborate on meals details, and track the progress of each project.</p>
                    </div>
                </div>
                <button className='bg-[#ff6443] px-6 py-1 rounded-full text-white hover:bg-orange-600 transition-all duration-200 shadow-md mt-8'>Get Started</button>
            </div>
            <div className='w-[75%] ml-28 flex items-center'>
                <img src="/Partner/Ellipse 8.png" alt="" className='relative h-80 object-cover -mt-32' />
                <div className='w-[40rem] -ml-24'>
                    <img src="/Partner/Group 1000004117.png" alt="" className='h-80 object-cover' />
                    <img src="/Partner/Group 1000004116.png" alt="" className='relative -z-50 h-80 object-cover -mt-12 -ml-16' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero