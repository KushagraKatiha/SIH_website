import React from 'react'
import { FaUser } from "react-icons/fa";

function Navbar({ logo, link1, link2, link3, profile}) {
  return (
    <>
      <nav className="flex w-full items-center h-24 fixed top-0 backdrop-blur-sm backdrop-brightness-100">
          <div className="flex items-center justify-between w-full">
              <img src={logo} alt="logo" className="w-8 h-8 ml-10 rounded-full relative left-5"/>
              <div className="flex gap-16 items-center">
                  <ul className="flex justify-between gap-14 list-none ">
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link1}</a></li>
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link2}</a></li>
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link3}</a></li>
                  </ul>
              </div>
            <FaUser className=' relative right-5 text-white mr-10 text-2xl'/>
          </div>
      </nav>
    </>
  )
}

export default Navbar