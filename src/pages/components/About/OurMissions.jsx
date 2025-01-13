import React from 'react'

function OurMissions() {
  return (
    <div className='p-12'>
        <div>
            <h1 className='text-5xl text-center text-[#ff6443] font-bold'>Our Missions & Values</h1>
            <p className='text-xl text-gray-500 text-center mt-2'>"Driving Excellence with Purpose: Our Mission & <br /> Core Values"</p>
        </div>
        <div className='flex gap-10'>
            <div className='pl-24 w-[50%] pt-12'>
                <img src="/About/Rectangle 5320.png" alt="" className='h-64 ml-12 mt-24' />
                <div className='flex gap-16 -mt-80'>
                    <img src="/About/Star 13.png" alt="" className='h-40' />
                    <img src="/About/Ellipse 1821.png" alt="" className='h-40 -mt-8' />
                </div>
                <div className='flex mt-24 gap-40'>
                    <img src="/About/Polygon 3.png" alt="" className='h-40 -mt-16' />
                    <img src="/About/Ellipse 1822.png" alt="" className='h-40 -mt-24 -ml-8' />
                </div>   
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-[50%]'>
                <h2 className='text-4xl font-poppins'>Our Mission</h2>
                <p className='text-2xl text-gray-500'>
                To deliver fresh and delicious meals to <br /> your doorstep, whether you're at home <br /> or on a train, with exceptional service <br /> and reliability.
                </p>
            </div>
        </div>
        <div className='flex gap-10 justify-around'>
            <div className='flex flex-col gap-4 justify-center items-center w-[50%] mt-12'>
                <h2 className='text-4xl font-poppins'>Our Values</h2>
                <p className='text-2xl text-gray-500'>
                We prioritize eco-friendly practices, from packaging to delivery, minimizing our environmental impact. <br />
                Our goal is to deliver exceptional service and ensure every customer has a delightful experience. <br /> Our goal is to deliver exceptional service and ensure every customer has a delightful experience. <br />
                We ensure only the freshest and highest-quality food reaches our customers. <br />
                We continuously evolve, using the latest technology to enhance user experience and streamline food delivery processes.
                </p>
            </div>
            <div className='flex justify-end'>
                <img src="/About/Frame 1000004317.png" alt="" className='h-72' />
                <img src="/About/Frame 1000004318.png" alt="" className='h-72 -ml-4 mt-32' />
            </div>
        </div>
    </div>
  )
}

export default OurMissions