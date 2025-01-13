import React, {useState} from 'react'
import PartnerCard from '../ui/PartnerCard'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Cafe() {
  const partner = [
    {image: '/Rectangle 160 (1).png', remarks: "BiteBlitz has been a game-changer for us. Before joining, we were struggling with managing our own delivery. Now, BiteBlitz handles all of that, and we're able to focus on making great food. Our sales have increased by 40%, and we've reached customers we couldn't before!", name: 'Bessie Cooper', post: 'Manager at Urban Bites Café'},
    {image: '/Rectangle 162.png', remarks: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum optio cum impedit ex hic delectus expedita velit deserunt, voluptatum corporis necessitatibus corrupti quia?", name: 'Minerva McGonagall', post: 'Headmaster at Hogwarts'}
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partner.length);
  };

  function handlePrev() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partner.length) % partner.length);
  };

  return (
    <div className='px-20 py-12 overflow-hidden'>
        <h1 className='text-3xl font-poppins text-[#ff6443] tracking-widest font-semibold text-center capitalize'>urban bites - Café success <br /> stories - how he transformed their business</h1>
        <div className='bg-contain mt-12 flex items-center w-[110%] ml-[10%] h-[32rem] bg-no-repeat bg-center' style={{backgroundImage: 'url("/Partner/Rectangle 5319.png")'}}>
            <PartnerCard 
                image={partner[currentIndex].image}
                remarks={partner[currentIndex].remarks}
                name={partner[currentIndex].name}
                post={partner[currentIndex].post}
                className='w-[50%]'
            />
            <div className='relative flex gap-6 -ml-40 mt-40'>
              <div className='text-2xl bg-gray-200 p-4 rounded-full hover:text-white hover:bg-[#19baab] cursor-pointer transition-all duration-200' onClick={handlePrev}><FaArrowLeft /></div>
              <div className='text-2xl bg-gray-200 p-4 rounded-full hover:text-white hover:bg-[#19baab] cursor-pointer transition-all duration-200' onClick={handleNext}><FaArrowRight /></div>
            </div>
        </div>
    </div>
  )
}

export default Cafe