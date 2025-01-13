import React from 'react'

function Hero() {
  return (
    <div className='h-[calc(100vh-1.5rem)] flex mt-24 overflow-hidden'>
      <div className='w-[50%] p-12'>
        <p className='text-5xl leading-snug capitalize font-bold font-poppins text-[#66c06d]'>Download <br /> our app and <br /> enjoy testy food</p>
        <p className='text-2xl mt-12'>"A modern hub for food and more"</p>
        <p className='text-gray-600 text-lg leading-tight mt-4'>"Craving a healthy home style meal while travelling by train? <br /> Visit our website or app and order now for a delicious, <br /> hygienic experience!"</p>
        <button className='text-white py-2 px-4 bg-[#ff6443] text-lg font-semibold mt-4 rounded-lg'>Download Now</button>
        <div className='h-44 flex'>
          <div>
            <img src="/Arrow 2.png" alt="" className='ml-96 z-20 absolute h-40 mt-3' />
            <img src="/scooter.png" alt="" className='h-48 transform scale-x-[-1] -rotate-12 ml-64' />
          </div>
          <img src="/watch.png" alt="" className='-mt-24 h-24' />
        </div>
        
      </div>
      <div className='w-[50%]'>
        <img src="/Ellipse 26 (2).png" alt="" className=' transform -rotate-12 -mt-24' />
        <img src="/Ellipse 23.png" alt="" className='absolute top-12 z-20 -ml-16 h-[55%]' />
        <img src="/Ellipse 22.png" alt="" className='absolute bottom-0 h-[70%]' />
        <img src="/Ellipse 21.png" alt="" className='absolute right-2 bottom-0 h-[50%]' />
      </div>
    </div>
  )
}

export default Hero