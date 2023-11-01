import React from 'react';
import Navbar from '../NavigationBar/Navbar';

const Dashboard = () => {
  return (
    <>
        <Navbar logo="/assets/image/favicon_io/android-chrome-192x192.png" link1="Home" link2="Contact Us" link3="About" />
        <div className="flex h-screen">
        {/* Left Panel */}
        <div className="w-1/4 p-4 bg-gray-950 text-white">
            {/* User Profile Photo */}
            <div className="flex justify-center">
            <img
                src="../public/assets/image/WhatsApp Image 2023-10-02 at 11.06.03 PM.jpeg" // Replace with the actual image URL
                alt="User Profile"
                className="w-32 h-32 rounded-full"
            />
            </div>

            {/* User Sections */}
            <div className="mt-8">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">User Details</h2>
                {/* User details content */}
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">User Contact Details</h2>
                {/* Contact details content */}
            </div>
            <div>
                <h2 className="text-xl font-semibold">User Emergency Details</h2>
                {/* Emergency details content */}
            </div>
            </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4 bg-[#0E1825]">
            {/* Main content of the user dashboard */}
        </div>
        </div>
    </>
  );
};

export default Dashboard;
