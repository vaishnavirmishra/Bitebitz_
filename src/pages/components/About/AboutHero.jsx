import React from 'react'

function AboutHero() {
  return (
    <div className='mt-24 p-12 flex justify-around'>
      <div className='w-[60%]'>
        <h1 className='text-5xl font-poppins font-semibold'>Welcome to BiteBlitz</h1>
        <p className='text-2xl text-gray-500 mt-4'>
        BiteBlitz's mission is to deliver fresh, high-quality meals <br /> quickly and reliably, while supporting local restaurants <br /> and promoting sustainability. Our vision is to be the top <br /> choice for food lovers seeking convenience without <br /> sacrificing quality.
        </p>
        <button className='text-white py-2 px-4 bg-[#ff6443] text-lg font-semibold mt-4 rounded-full'>Read More</button>
      </div>
      <div className='w-[45%] flex justify-around'>
        <img src="/About/Frame 1000004341.png" alt="" className='h-72' />
        <img src="/About/Image (1).png" alt="" className='h-72' />
      </div>
    </div>
  )
}

export default AboutHero