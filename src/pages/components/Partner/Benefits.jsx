import React from 'react'

function Benefits() {
  return (
    <div className='p-12'>
        <h1 className='text-3xl font-poppins text-[#ff6443] tracking-widest font-semibold text-center'>Benefits of Partnering</h1>
        <div className='flex justify-center gap-24 mt-12 items-center'>
            <div className='w-[45%] flex justify-end'>
                <img src="/Partner/Frame 1000004298.png" alt="" className='h-[25rem]' />
            </div>
            <ul className='list-disc marker:text-[#6CA792] w-[55%] ml-5 text-2xl font-semibold flex flex-col gap-12'>
                <li>Increased Reach: Access to more customers.</li>
                <li>Delivery Solutions: Handling delivery logistics.</li>
                <li>Marketing Support: Promoting the partner's business through marketing campaigns.</li>
                <li>Real-Time Data & Insights: Offering analytics on customer behavior and sales.</li>
            </ul>
        </div>
        <div className='flex justify-center'>
            <button className='bg-[#ff6443] px-4 py-1 rounded-full text-white hover:bg-orange-600 transition-all duration-200'>Read More</button>
        </div>
    </div>
  )
}

export default Benefits