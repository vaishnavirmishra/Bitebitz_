import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function FormCard() {
    const [message, setMessage] = useState('');
    const maxLength = 200;

    function handleInputChange(e) {
        if (e.target.value.length <= maxLength) {
        setMessage(e.target.value);
        }
    };
  return (
    <div className='ml-20 my-12 px-8 py-4 border border-gray-700 rounded-xl'>
        <p className='text-[#19baab] capitalize'>Send us email</p>
        <h1 className='capitalize text-[#ff6443] mt-2 text-4xl font-medium'>Get in touch with us</h1>
        <p className='capitalize text-2xl text-gray-400 mt-2'>Feel free to reach out to us, and we'll respond <br /> as soon as possible</p>
        <form className='border border-gray-200 flex flex-col gap-8 p-8 mt-6 rounded-xl'>
            <div className='flex justify-between gap-8'>
                <input type="text" placeholder='First Name' className='border border-gray-200 p-3 placeholder-gray-600 rounded-xl placeholder:font-medium w-full' />
                <input type="text" placeholder='Last Name' className='border border-gray-200 p-3 placeholder-gray-600 rounded-xl placeholder:font-medium w-full' />
            </div>
            <input type="text" placeholder='Email Address' className='border border-gray-200 p-3 placeholder-gray-600 rounded-xl placeholder:font-medium w-full' />
            <input type="number" placeholder='Phone Number' className='border border-gray-200 p-3 placeholder-gray-600 rounded-xl placeholder:font-medium w-full' />
            <div className="relative">
                <textarea
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="border border-gray-200 p-6 placeholder-gray-600 rounded-xl placeholder:font-medium w-full h-40 resize-none"
                ></textarea>
                <div className="absolute bottom-2 right-4 text-gray-500 text-sm">
                    {message.length}/{maxLength}
                </div>
            </div>
            <button className='text-2xl text-white w-full bg-[#ff6443] py-3 shadow-md rounded-2xl'>Submit</button>
            <p className='-mt-4 text-gray-600'>By continuing you agree to our <Link to='/terms-of-use' className='text-[#ff6443] hover:border-b-2 hover:border-b-[#ff6443] transition-all duration-150'>Terms of service</Link> and <Link to='/privacy-policy' className='text-[#ff6443] hover:border-b-2 hover:border-b-[#ff6443] transition-all duration-150'>Privacy policy</Link></p>
        </form>
    </div>
  )
}

export default FormCard