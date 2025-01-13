import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./ReviewCardAbout";

function Carousel({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 4; // 2x2 grid (4 cards per slide)
  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

  // Automatic slide movement
  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 5000); // Move every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Navigation Buttons */}
      <button
        onClick={movePrev}
        className="absolute -left-20 top-1/2 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full border border-black hover:bg-[#ff6443] transition-all duration-200"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 50}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {/* Slides */}
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid grid-cols-2 grid-rows-2 gap-4 w-full"
            >
              {reviews
                .slice(
                  slideIndex * cardsPerSlide,
                  slideIndex * cardsPerSlide + cardsPerSlide
                )
                .map((review) => (
                  <div key={review.id} className="w-full">
                    <Card review={review} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={moveNext}
        className="absolute -right-20 top-1/2 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full border border-black hover:bg-[#ff6443] transition-all duration-200"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Dotted Index */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;