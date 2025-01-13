import React from 'react';
import Carousel from '../ui/Carousel';

function Reviews(){
  const reviews = [
    { id: 1, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825 (2).png', name: 'John Doe', rating: 5, text: 'Great product!' },
    { id: 2, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825.png', name: 'Jane Smith', rating: 4, text: 'Very useful, would recommend.' },
    { id: 3, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825 (3).png', name: 'Mark Johnson', rating: 3, text: 'It works okay.' },
    { id: 4, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825 (1).png', name: 'Emma Brown', rating: 5, text: 'Loved it, excellent quality!' },
    { id: 5, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825 (3).png', name: 'John Doe', rating: 5, text: 'Great product!' },
    { id: 6, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825 (2).png', name: 'Jane Smith', rating: 4, text: 'Very useful, would recommend.' },
    { id: 7, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825 (1).png', name: 'Mark Johnson', rating: 3, text: 'It works okay.' },
    { id: 8, date: '12/04/2024', line1: '6391 Elin St. Celina', line2: 'Delaware 10299', image: '/About/Ellipse 1825.png', name: 'Emma Brown', rating: 5, text: 'Loved it, excellent quality!' }
  ];

  return (
    <div className="w-full p-12">
        <div className='mb-24'>
            <h1 className='text-5xl text-center text-[#ff6443] font-bold capitalize'>Hear from our Happy customers</h1>
            <p className='text-xl text-center mt-2'>Voices of Satisfaction: <span className="capitalize"> Real Stories, real customers see what our customers love about us</span></p>
        </div>
      <Carousel reviews={reviews} />

      <div className='mt-36 flex gap-24 items-center'>
        <div className='w-[75%]'>
          <h1 className='text-3xl font-semibold text-[#ff6443] font-poppins'>Join Us and <span className="capitalize"> discover fresh meals & great offers!</span></h1>
          <p className='text-xl font-semibold mt-4'>And explore our meals and goods, reliving more ordering offers some % of discount on next with providing healthy and fresh of your choice.</p>
          <p className='mt-4 text-lg text-gray-500'>
            Invite visitors to join the platform, whether as clients, family and friends highlighting the benefits of becoming part of the community. Enjoy exclusive discounts on your next order while savoring healthy and freshly prepared meals tailored to your preferences.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <button className='text-2xl font-semibold py-2 px-10 bg-[#ff6443] text-white shadow-md rounded-full hover:bg-orange-700 transition-all duration-200'>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;