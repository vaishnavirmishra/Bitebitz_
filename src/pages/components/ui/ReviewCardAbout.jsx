import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Card({ review }){
    const totalStars = 5;
    return (
      <div className="bg-white p-4 rounded-lg flex gap-6 h-full">
        <div className="flex flex-col justify-center items-center gap-2">
            <img
            src={review.image}
            alt={review.name}
            className="h-64 object-cover rounded-md"
            />
            <div className='flex justify-center'>
                {Array(review.rating)
                .fill()
                    .map((_, index) => (
                    <FaStar key={`filled-${index}`} style={{ color: "#ff6443" }} />
                ))}

                {Array(totalStars - review.rating)
                    .fill()
                    .map((_, index) => (
                    <FaRegStar key={`blank-${index}`} style={{ color: "#ff6443" }} />
                ))}
            </div>
            <p>{review.date}</p>
        </div>
        <div>
            <h3 className="mt-2 text-xl font-semibold">{review.name}</h3>
            <p className="text-gray-500 mt-2">{review.line1}</p>
            <p className="text-gray-500 -mt-2">{review.line2}</p>
            <p className="mt-2 text-gray-500 text-sm">{review.text}</p>
        </div>
      </div>
    );
  };
  
  export default Card;  