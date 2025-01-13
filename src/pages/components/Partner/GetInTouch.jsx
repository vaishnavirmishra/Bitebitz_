import React from 'react'

function GetInTouch() {
  return (
    <div className='px-20 py-12 flex items-center justify-around shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] z-30'>
        <div className='w-[50%]'>
            <h1 className='text-[#ff6443] font-semibold text-3xl font-roboto-serif'>Get in touch</h1>
            <p>"Our friendly team is love to hear from you"</p>
            <div class="bg-white p-6 font-roboto-serif">
                <form>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-700">First Name</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label class="block text-gray-700">Last Name</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700">Email</label>
                        <input type="email" class="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700">Phone Number</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                        <div class="mt-4">
                        <label class="block text-gray-700">Your Message</label>
                        <textarea class="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                    </div>
                    <div class="mt-6">
                        <button type="submit" class="px-4 bg-[#ff6443] text-white p-2 rounded-lg hover:bg-[#e55a3c]">Send Message</button>
                    </div>
                </form>
            </div>

        </div>
        <div className='w-[50%]'>
            <img src="/Partner/Frame 1000004312.png" alt="" />
        </div>
    </div>
  )
}

export default GetInTouch