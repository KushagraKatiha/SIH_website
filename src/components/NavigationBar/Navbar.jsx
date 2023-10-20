import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";

function Navbar({ logo, link1, link2, link3}) {

  const [showCard, setShowCard] = useState(false);

  function toogleCard() {
    setShowCard(!showCard);
  }

  return (
    <>
      <nav onClick={toogleCard} className="flex w-full items-center h-24 fixed top-0 backdrop-blur-sm backdrop-brightness-100">
          <div className="flex items-center justify-between w-full">
              <img src={logo} alt="logo" className="w-8 h-8 ml-10 rounded-full relative left-5"/>
              <div className="flex gap-16 items-center">
                  <ul className="flex justify-between gap-14 list-none ">
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link1}</a></li>
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link2}</a></li>
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link3}</a></li>
                  </ul>
              </div>
            <FaUser onClick={toogleCard} className={`cursor-pointer relative right-5 ${showCard?'hidden': 'visible'} text-white mr-10 text-2xl`}/>

            <div className= {` bg-white leading-10 text-black ${showCard?'visible':'hidden'} font-bold px-5 py-2 relative top-10 right-3 rounded-sm`}>
              <a className="cursor-pointer hover:text-zinc-600">My Profile</a>
              <br />
              <a className="cursor-pointer hover:text-zinc-600">Sign In</a>
              <br />
              <a className="cursor-pointer hover:text-zinc-600">Sign Up</a>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar