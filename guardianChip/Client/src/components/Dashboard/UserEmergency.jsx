import React from 'react'

function UserEmergency() {
  return (
     // Main Cover
     <section className='bg-[#000000] border-4 flex flex-col rounded-tl-[30%] rounded-br-[30%] rounded-tr-3xl rounded-bl-3xl h-full'>

    <div className='m-auto mb-0 mt-20'>
        <h1 className='text-orange-500 font-bold text-3xl'>Add Emergency Contacts</h1>
    </div>
     {/* Image */}
     <div className='m-auto mt-40 flex gap-32'>
       <div className='m-auto mr-0 border-2 shadow-2xl shadow-gray-400 rounded-full '>
           <img
               src="/assets/image/WhatsApp Image 2023-10-02 at 11.06.03 PM.jpeg" // Replace with the actual image URL
               alt="User Profile"
               className="w-40 h-40 rounded-full"
           />
       </div>

     {/* Details Part */}
     <div className='m-auto flex flex-col gap-10'>
       <div  className='flex items-center gap-5'>
         <h3 className='font-bold text-xl text-green-500'>Contact 1: </h3>
         <input type='text' className='font-bold rounded text-xl py-1 px-2 outline-none text-black flex max-w-xs border'/>
       </div>

       <div className='flex items-center gap-5'>
         <h3 className='font-bold text-xl text-green-500 gray-300'>Contact 2:  </h3>
         <input type='text' className='font-bold rounded text-xl py-1 px-2  outline-none text-black flex max-w-xs border'/>
       </div>
     </div>
     </div>

     <div className='m-auto mt-0'>
        <button className='bg-blue-700 py-3 px-10 rounded-3xl text-white'>Save</button>
     </div>
     
   </section>
  )
}

export default UserEmergency