import React from 'react'
import ReviewCard from '../ui/ReviewCard'

function Reviews() {
    const userReviews = [
        {image: '/Rectangle 158.png', subject: 'Train Delivery Service', name: 'John Doe', rating: 5, review: 'I was amazed by how convenient BiteBlitz made my train journey. The food was delivered right to my seat, hot and delicious! I will definitely use this service again on my trip.'},
        {image: '/Rectangle 162.png', subject: 'Town Wide Delivery', name: 'Oliver Smith', rating: 3, review: 'BiteBlitz is my go-to app for food delivery in town. The service is fast, reliable, and the food always arrives fresh. Highly recommend it to anyone looking for a hassle-free food delivery experience.'},
        {image: '/Rectangle 160 (1).png', subject: 'Overall User Satisfaction', name: 'Ella Lewis', rating: 4, review: "I've tried many food delivery apps, but BiteBlitz stands out for its exceptional service and user-friendly interface. Whether I'm at home or on a train, I know I can count on BiteBlitz for a great meal."}
    ]
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='capitalize font-bold text-5xl text-center p-12'>What our Happy user's say</h1>
        <div className='w-[15%] h-8 rounded-xl bg-[#ff6443]'></div>
        <div className='flex gap-6 justify-center mt-28 mb-24'>
            {userReviews.map((reviews, index) => (
                <ReviewCard 
                    key={index}
                    image={reviews.image}
                    name={reviews.name}
                    rating={reviews.rating}
                    review={reviews.review}
                    subject={reviews.subject}
                    className='w-[25%]'
                />
            ))}
        </div>
    </div>
  )
}

export default Reviews