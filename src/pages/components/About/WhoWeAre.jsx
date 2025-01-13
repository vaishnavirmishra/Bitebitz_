import React from 'react'

function WhoWeAre() {
  return (
    <div className="relative h-auto bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/About/bgimg.jpg")' }}>
  {/* Overlay for Blur */}
  <div className="absolute inset-0 backdrop-blur-md bg-white/5"></div>

  <div className="relative p-12 flex gap-10 justify-around">
    {/* Left Content */}
    <div>
      <h1 className="text-5xl font-semibold text-[#ff6443]">Who We Are</h1>
      <p className="text-xl mt-4 text-gray-500">"From Vision to Reality: The Journey of BiteBlitz"</p>
      <p className="text-2xl mt-4 text-gray-700">
        BiteBlitz was founded with the vision to revolutionize <br /> food delivery. From humble beginnings, we've grown into <br /> a trusted name in food delivery, known for our <br /> commitment to quality and customer satisfaction.
      </p>
      <p className="text-2xl mt-4 text-gray-700">
        It all started with a small team of food enthusiasts who <br /> believed that great food should be accessible to <br /> everyone, anywhere. Today, BiteBlitz is a vibrant <br /> community of food lovers. We are proud of our journey <br /> and excited about what the future holds.
      </p>
    </div>

    {/* Right Content */}
    <div className=''>
      {/* Overlapping Images */}
      <div className="absolute top-96 -mt-64 ml-12">
        <img src="/About/Rectangle 59.png" alt="" className="h-64" />
        <img src="/About/Rectangle 57.png" alt="" className="h-60 -mt-62 ml-4" />
      </div>
      <div className="relative">
        <img src="/About/Rectangle 58.png" alt="" className="h-60" />
        <img src="/About/Rectangle 59.png" alt="" className="h-64 -mt-62 -ml-2" />
      </div>
    </div>
  </div>
    </div>
  )
}

export default WhoWeAre