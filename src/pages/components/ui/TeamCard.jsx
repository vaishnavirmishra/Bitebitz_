import React from 'react'
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";

function TeamCard({image, name, post, company}) {
  return (
    <div className={`rounded-md shadow-md h-68 bg-gray-100 mb-12`}>
        <img src={image} alt="" className='rounded-b-md shadow-md' />
        <div className='flex flex-col justify-center items-center -mt-40'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <p>{post}</p>
            <p className='text-sm text-gray-600'>{company}</p>
            <div className='flex gap-2 mt-4'>
                <LuFacebook className='bg-[#ff6443] p-2 text-white text-3xl rounded-full' />
                <IoLogoInstagram className='bg-[#ff6443] p-2 text-white text-3xl rounded-full' />
                <LuTwitter className='bg-[#ff6443] p-2 text-white text-3xl rounded-full' />
            </div>
        </div>
        
    </div>
  )
}

export default TeamCard