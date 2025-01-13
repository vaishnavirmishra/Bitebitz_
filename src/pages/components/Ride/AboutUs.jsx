import React from 'react'
import Card from '../ui/PartnerFeatureCard'

function AboutUs() {
    const features = [
      {image: '/Partner/Frame 1000004366.png', title: 'Trucking', para: 'With a dedicated fleet and epert drivers, we maintain a smooth supply chain from start to finish'},
      {image: '/Partner/package.png', title: 'Packaging', para: 'With a dedicated fleet and epert drivers, we maintain a smooth supply chain from start to finish'}
  ]
  return (
    <div className='px-20 py-12 flex flex-col items-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] z-30'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='font-roboto-serif font-medium'>
            <p className='text-[#19baab] text-xl'>Mission</p>
            <p className='text-[#ff6443] text-2xl mt-4'>About Us</p>
            <p className='text-[#ff6443] text-4xl mt-4 captialize'>Delivering More than just Food</p>
          </div>
          <p className='text-3xl mt-4 text-gray-500'>Together we're not just delivering food; <br /> we're delivering one meal at a time.</p>
          <div className='flex flex-col gap-12 mt-12'>
            {features.map((feat, index) => (
                <Card 
                    key={index} 
                    image={feat.image} 
                    title={feat.title} 
                    para={feat.para}
                    className='w-[70%]'
                />
            ))}
          </div>
        </div>
        <div className='w-[55%]'>
          <img src="/Partner/Frame 1000004382.png" alt="" />
        </div>
      </div>
      <button className='bg-[#ff6443] px-6 py-1 rounded-full text-white hover:bg-orange-600 transition-all duration-200 shadow-md mt-8'>Get Started</button>
    </div>
  )
}

export default AboutUs