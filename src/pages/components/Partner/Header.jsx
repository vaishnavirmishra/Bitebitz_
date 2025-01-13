import React from 'react'

function Header() {
  return (
    <div className='mt-24 bg-[#f0eada] flex justify-between w-full items-center px-20 py-12'>
        <div className='w-[50%]'>
            <h1 className='text-2xl font-poppins text-[#ff6443] font-medium leading-relaxed'>
                "Partner with BiteBlitz - Elevate Your Brand, Reach Exclusive Clients. Grow Your Business with BiteBlitz."
            </h1>
            <p className='mt-4 text-gray-600'>Partnering with BiteBlitz platform allows business to reach a wide customer base, increasing their visibility and order volume. We focus on delivery logistics, enabling businesses and on food preparation while ensuring timely deliveries. Additionally, our team also focus on businesses benefit from marketing support through promotional campaigns, attracting more customers. And provides access to real-time data and insights helps optimize menu offerings and improve performance. Overall, our partnership creates a flexible revenue stream, driving growth and profitability.</p>
            <div className='flex gap-4 mt-8'>
                <button className='py-2 px-6 bg-[#ff6443] text-white rounded-full hover:bg-orange-600 transition-all duration-200'>Join Now</button>
                <div className='flex items-center'>
                    <img src="/Ellipse 14.png" alt="" className='h-10' />
                    <img src="/Ellipse 15.png" alt="" className='h-10 -ml-4' />
                    <img src="/Ellipse 16.png" alt="" className='h-10 -ml-4' />
                    <img src="/Ellipse 17.png" alt="" className='h-10 -ml-4' />
                    <p className=''>+99 Others</p>
                </div>
            </div>
        </div>
        <div className='w-[50%] flex flex-col'>
            <img src="/Partner/Frame 1000004296.png" alt="" className='h-[25rem] object-contain' />
            <img src="/Partner/Frame 1000004297.png" alt="" className='h-[25rem] object-contain -mt-44 ml-64' />
        </div>
    </div>
  )
}

export default Header