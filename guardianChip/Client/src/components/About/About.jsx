import React from 'react'
import Navbar from '../NavigationBar/Navbar'

function About() {
  return (
    <>
        <Navbar logo="/assets/image/banner_img2.jpeg" link1="Home" link2="Explore" link3="About" />
        <div className='text-white px-8 pt-3 flex pb-3 flex-col items-center gap-7'>
            <div className=' font-display flex flex-col items-center'>
                <h1 className='font-extrabold text-orange-500 text-4xl'>The Guardian Chip</h1>
                <h3 className='font-normal text-xl'>Your Safety, Our Priority</h3>
            </div>
            <div className='flex flex-col max-h-[50%] max-w-[70%] min-w-[40%] px-28 py-8 rounded-2xl gap-8 bg-blue-950'>
                <h2 className='font-bold  font-display text-2xl tracking-[1rem] text-green-500'>About Us</h2>
                <p className='text-white text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus nunc nec turpis aliquam rhoncus. Cras sit amet odio bibendum, euismod neque non, venenatis nibh. Donec mi elit, tempus quis velit eget, pulvinar tempus nisi. Suspendisse id malesuada ante. Vestibulum vel luctus augue. Morbi eu ante urna. Suspendisse potenti. Maecenas.</p>
            </div>
        </div>
    </>
  )
}

export default About