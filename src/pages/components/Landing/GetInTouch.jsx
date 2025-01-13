import React from 'react'

function GetInTouch() {
  return (
    <div className='p-20 pt-0 flex justify-center items-center gap-24'>
        <div className='w-[40%]'>
            <h1 className='text-[#ff6443] font-semibold text-3xl font-poppins'>Get In Touch</h1>
            <p>"Our friendly team is love to hear from you."</p>
            <div className="py-4">
      <form className="space-y-4">
        {/* First Name and Last Name */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block font-semibold text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder=""
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block font-semibold text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder=""
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder=""
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block font-semibold text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder=""
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-semibold text-gray-700 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder=""
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 bg-[#ff6443] text-white py-2 rounded-md font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Send Message
        </button>
      </form>
    </div>
        </div>
        <div className='w-[50%]'>
            <img src="/touch.png" alt="" />
        </div>
    </div>
  )
}

export default GetInTouch