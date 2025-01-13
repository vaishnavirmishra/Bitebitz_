import React from 'react';
import TeamCard from '../ui/TeamCard';

function TeamMembers() {
    const team = [
        {image: '/About/Ellipse 1826.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
        {image: '/About/Ellipse 1827.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
        {image: '/About/Ellipse 1828.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
        {image: '/About/Ellipse 1829.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
        {image: '/About/1.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
        {image: '/About/Ellipse 1826.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
        {image: '/About/Ellipse 1827.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
        {image: '/About/Ellipse 1828.png', name: 'Wade Warren', post: 'President of Sales', company: 'Ferrari'},
    ]
  return (
    <div className='p-12'>
        <div>
            <h1 className='text-5xl text-center text-[#ff6443] font-semibold'>Our Team Members</h1>
            <p className='text-xl text-gray-500 text-center mt-2'>"Meet the Passionate Team Behind BiteBlitz"</p>
        </div>
        <div className='grid grid-cols-4 grid-rows-2 gap-6 mt-12'>
            {team.map((member, index) => (
                <TeamCard
                    key={index}
                    image={member.image}
                    name={member.name}
                    post={member.post}
                    company={member.company}
                />
            ))}
        </div>
    </div>
  )
}

export default TeamMembers