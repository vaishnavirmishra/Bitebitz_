import React from 'react'
import { BsHouseLockFill } from "react-icons/bs";
import { FaHeadSideMask, FaTrain, FaRoute } from "react-icons/fa";
import { MdDeliveryDining, MdOutlinePayments } from "react-icons/md";
import FeaturesCard from '../ui/FeaturesCard';

function Features() {
    const features = [
        {icon: FaTrain, title: 'Train Delivery Service', desc: 'Enjoy meals directly delivered to your train berth at any station'},
        {icon: FaRoute, title: 'Real-Time Tracking', desc: 'Track your order in real time from preparation to delivery'},
        {icon: MdOutlinePayments, title: 'Easy Payment Options', desc: 'Convenient payment options including cards, banking and more'},
        {icon: MdDeliveryDining, title: 'Safe Delivery', desc: 'Convenient delivery options including cards, banking and more'}
    ]
  return (
    <div className='p-12 pb-0 bg-[#faf8fa]'>
        <div className='flex justify-center gap-12'>
            <div className='w-[40%]'>
                <img src="/Frame 1000004281.png" alt="" className='h-128' />
                <img src="/Frame 1000004282.png" alt="" className='absolute h-128 -mt-96 ml-24' />
            </div>
            <div className='w-[40%] bg-[#f4f4f4] rounded-xl p-12 ml-24'>
                <p className='text-sm text-[#ff6443] font-semibold'>Why Choose Us?</p>
                <h1 className='text-3xl mt-4 font-poppins'>Real people delivering real results.</h1>
                <p className='text-gray-600 text-lg'>Our meals are prepared with the highest <br /> hygiene standards, ensuring cleanliness and <br /> safety. Enjoy nutritious, home-style food that <br /> supports your healthy lifestyle</p>
                <div className='mt-6'>
                    <p className='font-bold font-poppins flex items-center gap-2 -ml-8'>
                        <img src="/Group 1000009732.png" alt="" className='h-8' />Unrivaled Quality
                    </p>
                    <p className='text-lg text-gray-600'>Excellence Beyond Compare. <br /> Delivering Superior Standards in Every <br /> Detail.</p>
                </div>
                <div className='mt-4'>
                    <p className='font-bold font-poppins flex items-center gap-2 -ml-8'>
                        <img src="/Vector (8).png" alt="" className='h-8' />Marketing Agency
                    </p>
                    <p className='text-lg text-gray-600 capitalize'>Crafting Strategies that Drive Success <br /> your vision, our expertise - unleashing <br /> potential</p>
                </div>
            </div>
        </div>
        <div>
            <h1 className='w-full text-center text-2xl font-poppins font-bold mt-8'>Featured Service</h1>
            <div className='grid grid-cols-4 grid-rows-1 gap-8'>
                {features.map((feature, index) => (
                    <FeaturesCard 
                        key={index}
                        title={feature.title}
                        icon={feature.icon}
                        desc={feature.desc}
                    />
                ))}
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='bg-[#f4f4f4] rounded-md flex justify-between w-[90%] h-24 items-center pl-12'>
                <h1 className='text-4xl font-poppins text-[#ff6443] font-semibold'>
                    Healthy & <br /> <span className='text-green-500'>Hygienic</span>
                </h1>
                <p className='text-gray-600 font-semibold'>
                    "Craving something delicious? Order now <br /> and lets us bring your favorites to your <br /> doorstep, fast and fresh!"
                </p>
                <img src="/Frame 1000004406.png" alt="" className='h-full rounded-r-md' />
            </div>
        </div>
        
    </div>
  )
}

export default Features