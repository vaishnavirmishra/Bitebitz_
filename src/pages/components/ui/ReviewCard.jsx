import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

function ReviewCard({image, name, subject, rating, review, className}) {
    const totalStars = 5;
  return (
    <div className={`bg-[#f0f2f0] flex flex-col p-12 items-center rounded-xl text-center ${className}`}>
        <img src={image} alt={name} className='h-48 object-contain border-2 border-white rounded-full -mt-24' />
        <h2 className='text-xl font-bold font-poppins text-[#004942] pt-4 pb-2'>{name}</h2>
        <p className='text-gray-500'>"{subject}"</p>
        <div className='flex justify-center pb-4'>
            {Array(rating)
            .fill()
                .map((_, index) => (
                <FaStar key={`filled-${index}`} style={{ color: "#ff6443" }} />
            ))}

            {Array(totalStars - rating)
                .fill()
                .map((_, index) => (
                <FaRegStar key={`blank-${index}`} style={{ color: "#ff6443" }} />
            ))}
        </div>
        <p>{review}</p>
    </div>
  )
}

export default ReviewCard