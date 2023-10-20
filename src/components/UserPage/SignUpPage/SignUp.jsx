import React from 'react'

function SignUp() {
  return (
    <>
        <div className='text-white font-display p-8 flex flex-col items-center gap-7 min-w-full'>

            <div className='flex flex-col gap-1 items-center'>
                <h1 className='font-extrabold text-orange-500 text-4xl'>The Guardian Chip</h1>
                <h3 className='font-normal text-xl'>Your Safety, Our Priority</h3>
            </div>
                <h2 className='font-bold text-2xl tracking-[1rem] text-green-500'>Create your Account</h2>

            <div className='flex flex-col max-h-[70%] max-w-[70%] min-w-[40%] px-28 py-12 rounded-2xl gap-7 bg-blue-950'>
                <form className='flex flex-col gap-3 text-white'>
                    <label className='font-bold text-xl' htmlFor="name">Name: </label>
                    <input className='bg-slate-200 rounded-md border-none text-black pl-3 py-2 font-semibold' type="text" />
                
                    <label className='font-bold text-xl' htmlFor="name">Email: </label>
                    <input className='bg-slate-200 rounded-md border-none text-white pl-3 py-2 font-semibold' type="email" />
                    
                    <label className='font-bold text-xl' htmlFor="name">Password: </label>
                    <input className='bg-slate-200 rounded-md border-none text-white pl-3 py-2 font-semibold' type="password" />

                    <label className='font-bold text-xl' htmlFor="name">Confirm Password: </label>
                    <input className='bg-slate-200 rounded-md border-none text-white pl-3 py-2 font-semibold' type="text" />

                    <label className='font-bold text-xl' htmlFor="name">Device Id: </label>
                    <input className='bg-slate-200 rounded-md border-none text-white pl-3 py-2 font-semibold'   type="text" />
                </form>

                <button className='py-2 rounded-md font-bold tracking-widest bg-blue-800 hover:bg-blue-500'>Create Account</button>
            </div>


        </div>
    
    
    </>
  )
}

export default SignUp