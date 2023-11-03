import React from 'react'

function UserProfie() {
  return (
    // Main Cover
    <section className='bg-white flex flex-col text-white rounded-tl-[30%] rounded-br-[30%] rounded-tr-3xl rounded-bl-3xl h-full'>
      {/* Image */}

        <div className='m-auto mb-2'>
            <img
                src="/assets/image/WhatsApp Image 2023-10-02 at 11.06.03 PM.jpeg" // Replace with the actual image URL
                alt="User Profile"
                className="w-40 h-40 rounded-full"
            />
        </div>

      {/* Details Part */}
      <div className='m-auto mt-9 flex gap-52'>
        <div  className='flex flex-col gap-5'>
          <h3 className='font-semibold text-xl text-black'>Name: </h3>
          <p className='font-bold text-2xl text-red-800'>User Name</p>
        </div>

        <div className='flex flex-col gap-5'>
          <h3 className='font-semibold text-xl text-black'>Device Id: </h3>
          <p className='font-bold text-2xl text-red-800'>ABC123@/,</p>
        </div>
      </div>
      
      {/* Button Section */}
      <div className='m-auto mt-0 flex gap-20'>
        <button className='py-1 max-w-min font-semibold px-10 cursor-pointer bg-red-600 rounded-3xl text-xs'>Delete User</button>
        <button className='py-1 max-w-min font-semibold px-10 cursor-pointer bg-green-600 rounded-3xl text-xs'>Update User</button>
        <button className='py-1 max-w-min font-semibold px-10 cursor-pointer bg-blue-500 rounded-3xl text-xs'>Update Password</button>
      </div>
    </section>
  )
}

export default UserProfie