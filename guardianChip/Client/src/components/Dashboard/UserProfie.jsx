import React from 'react'

function UserProfie() {
  return (
    // Main Cover
    <section className='bg-[#000000] border-4 flex flex-col rounded-tl-[30%] rounded-br-[30%] rounded-tr-3xl rounded-bl-3xl h-full'>
      {/* Image */}

        <div className='m-auto mb-5 border-2 shadow-2xl shadow-gray-400 rounded-full '>
            <img
                src="/assets/image/WhatsApp Image 2023-10-02 at 11.06.03 PM.jpeg" // Replace with the actual image URL
                alt="User Profile"
                className="w-80 h-80 rounded-full"
            />
        </div>

      {/* Details Part */}
      <div className='m-auto mt-16 mb-20 flex gap-52'>
        <div  className='flex flex-col gap-2'>
          <h3 className='font-bold text-xl text-gray-300'>Name: </h3>
          <p className='font-bold text-3xl text-[#89e7fa]'>User Name</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-xl text-gray-300'>Device Id: </h3>
          <p className='font-bold text-3xl text-[#89e7fa]'>ABC123@/,</p>
        </div>
      </div>
      
      {/* Button Section */}
      <div className='m-auto mt-5 text-white flex gap-20'>
        <button className='py-1 max-w-min font-semibold px-10 cursor-pointer bg-red-600 rounded-3xl text-xs'>Delete User</button>
        <button className='py-1 max-w-min font-semibold px-10 cursor-pointer bg-green-600 rounded-3xl text-xs'>Update User</button>
        <button className='py-1 max-w-min font-semibold px-10 cursor-pointer bg-blue-500 rounded-3xl text-xs'>Update Password</button>
      </div>
    </section>
  )
}

export default UserProfie