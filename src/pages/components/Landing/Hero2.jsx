import React from 'react'
import Tag from '../ui/Tag'
import { GiScooter } from "react-icons/gi";
import { IoBagHandle } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";

function Hero2() {
  return (
    <div className='h-[calc(100vh-2rem)] flex justify-between w-full'>
        <div className='p-12 w-[50%]'>
            <p className='text-5xl font-vold font-poppins font-bold leading-relaxed'>It's not just food; it's <br /> an unforgettable <br /> experience</p>
            <p className='text-[#346E6A] text-2xl mt-12 font-semibold'>"A modern hub for food and more"</p>
            <p className='text-2xl tracking-wider'>Indulge in flavors that tell a <br /> story. Create moments that <br /> linger beyond the meal</p>
            <button className='text-white py-2 px-4 bg-[#ff6443] text-lg font-semibold mt-4 rounded-lg'>Order Now</button>
        </div>
        <div className='w-[50%] flex flex-col items-center'>
            <img src="/Vector 18.png" alt="" className='w-96 z-10 object-contain relative top-12' />
            <div className='flex justify-center w-96'>
                <img src="/Frame 1000004450.png" alt="" className='h-96 w-full object-cover' />
                <img src="/Frame 1000004449.png" alt="" className='h-96 w-full object-cover' />
                <img src="/Frame 1000004451.png" alt="" className='h-96 w-full object-cover' />
            </div>
            <div>
                <img src="/logo.png" alt="" className='h-12 relative left-24 -top-96 z-10 -mt-12' />
                <Tag symbol={ImSpoonKnife} title="Dine In" description="Enjoy your food <br /> fresh crispy and hot" className='-mt-28 ml-28' />
                <Tag symbol={IoBagHandle} title="Pick Up" description="Pick up delivery at <br /> your doorstep" className='-mt-48 -ml-16 mr-44' />
                <Tag symbol={GiScooter} title="Fast Delivery" description="Promise to deliver <br /> within 30 minutes" className='-mt-48 mr-24' />
            </div>
        </div>
    </div>
  )
}

export default Hero2