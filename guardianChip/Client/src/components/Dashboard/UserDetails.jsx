import React from 'react'

function UserDetails() {
    return (
        // Main Cover
        <section className='bg-[#000000] border-4 flex flex-row rounded-tl-[30%] rounded-br-[30%] rounded-tr-3xl rounded-bl-3xl h-full'>
          {/* Image */}
    
            <div className='m-auto mr-0 border-2 shadow-2xl shadow-gray-400 rounded-full '>
                <img
                    src="/assets/image/WhatsApp Image 2023-10-02 at 11.06.03 PM.jpeg" // Replace with the actual image URL
                    alt="User Profile"
                    className="w-80 h-80 rounded-full"
                />
            </div>
    
          {/* Details Part */}
          <div className='m-auto flex flex-col gap-10'>
            <div  className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl text-gray-300'>Phone No.</h3>
              <p className='font-bold text-3xl text-[#89e7fa] p-4 flex max-w-xs border'>91XXXXXXXXXX</p>
            </div>
    
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl text-gray-300'>Address:  </h3>
              <p className='font-bold text-3xl text-[#89e7fa] p-4 flex max-w-xs border'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eos</p>
            </div>
          </div>
          
        </section>
      )
}

export default UserDetails