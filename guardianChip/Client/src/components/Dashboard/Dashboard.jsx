import React, {useState} from 'react';
import Navbar from '../NavigationBar/Navbar';
import UserProfie from './UserProfie';
import { NavLink} from 'react-router-dom';

const Dashboard = () => {

    const [content, setContent] = useState()

  return (
    <>
            <Navbar logo="/assets/image/banner_img2.jpeg" link1="Home" link2="Contact Us" link3="About" />
            <div className="flex h-screen ">
            {/* Left Panel */}
            <div className="w-1/4 p-4 bg-gray-950 text-white">
                {/* User Profile Photo */}
                <div className="flex justify-center mt-5">
                <img
                    src="/assets/image/banner_img.jpeg" // Replace with the actual image URL
                    alt="User Profile"
                    className="w-80 h-80"
                />
                </div>

                {/* User Sections */}
                <div className="mt-20 flex ml-10 flex-col gap-5 justify-center items-start">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold cursor-pointer">User Details</h2>
                    {/* User details content */}
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold cursor-pointer">User Contact Details</h2>
                    {/* Contact details content */}
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 cursor-pointer">User Emergency Contacts</h2>
                    {/* Emergency details content */}
                </div>
                </div>
                <p className='absolute bottom-10 text-slate-400 font-semibold text-xl cursor-pointer'>Log Out ?</p>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-4 bg-[#0E1825]">
                {/* Main content of the user dashboard */}
                <div className='w-full h-full'>
                    <UserProfie/>
                </div>
            </div>
            </div>
    </>
  );
};

export default Dashboard;
