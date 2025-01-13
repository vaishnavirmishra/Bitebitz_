import React from 'react'
import { FaCaretRight, FaChevronRight, FaChevronDown } from "react-icons/fa";
import LocationButton from '../ui/LocationButton';

function Collections() {
    const places = [
        {title: 'Fraser Road Area', sub: '142 places'},
        {title: 'Golamber', sub: '180 places'},
        {title: 'Shree Rathnapura', sub: '210 places'},
        {title: 'Kankarbagh', sub: '110 places'},
        {title: 'Lalitpur Colony', sub: '240 places'},
        {title: 'Lodipur', sub: '170 places'},
        {title: 'Khajpura', sub: '203 places'},
        {title: 'Boring Road', sub: '111 places'},
    ]
  return (
    <div className='px-12'>
        <h1 className='font-poppins font-semibold text-2xl'>Collections</h1>
        <div className='flex justify-between pb-6'>
            <p>Explore curated list of top restaurants, cafes, pubs and bars.</p>
            <button className='flex text-[#ff6443] text-sm items-center gap-2'>All collections in current location <FaCaretRight /></button>
        </div>
        <div className='flex h-72 gap-6 pb-20 w-[calc(100vw-5rem)]'>
            <img src="/Card1.png" alt="" className='h-64 w-full object-contain' />
            <img src="/Card2.png" alt="" className='h-64 w-full object-contain' />
            <img src="/Card3.png" alt="" className='h-64 w-full object-contain' />
            <img src="/Card4.png" alt="" className='h-64 w-full object-contain' />
            <img src="/Card5.png" alt="" className='h-64 w-full object-contain' />
        </div>
        <div className='w-full'>
            <h1 className='text-2xl font-poppins font-semibold'>Popular localities in and around Patna</h1>
            <p className='text-[#ff6443]'>Popular localities in and around</p>
            <div className='grid grid-rows-3 grid-cols-3 gap-6 mt-6 mb-24'>
                {places.map((place, index) => (
                    <LocationButton
                        key={index}
                        title={place.title}
                        sub={place.sub}
                        symbol={FaChevronRight}
                    />
                ))}
                <LocationButton 
                    title='See More'
                    symbol={FaChevronDown}
                />
            </div>
        </div>
    </div>
  )
}

export default Collections