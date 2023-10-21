import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

function Navbar({ logo, link1, link2, link3}) {

  const [showCard, setShowCard] = useState(false);

  function toogleCard() {
    setShowCard(!showCard);
  }

  function isHome() {
    if (window.location.pathname === '/') {
      return true;
    }
    return false;
  }

  return (
    <>
      <nav className={`flex font-display w-full items-center  ${isHome()? 'fixed h-20 backdrop-blur-sm backdrop-brightness-100 top-0': 'h-14 bg-blue-950 mb-7'}`}>
          <div className="flex items-center justify-between w-full">
              <img src={logo} alt="logo" className="w-8 h-8 ml-10 rounded-full relative left-5"/>
              <div className="flex gap-16 items-center">
                  <ul className="flex justify-between gap-14 list-none ">
                    <li><Link to="/" className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 ">{link1}</Link></li>
                    <li><Link to="#" className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 ">{link2}</Link></li>
                    <li><Link to="#" className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 ">{link3}</Link></li>
                      {/* <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link1}</a></li>
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link2}</a></li>
                      <li><a className="text-[#f2f2f2] font-bold text-lg hover:text-blue-300 " href="#">{link3}</a></li> */}
                  </ul>
              </div>
            <FaUser onClick={toogleCard} className={`cursor-pointer relative right-5 ${showCard?'hidden': 'visible'} text-white mr-10 text-2xl`}/>
            <ImCross onClick={toogleCard} className={`cursor-pointer relative right-5 ${showCard?'visible': 'hidden'} text-white mr-10 text-2xl`}/>
            <div className= {` bg-white leading-10 text-black ${showCard?'visible':'hidden'} font-bold px-5 py-2 absolute ${isHome()?"top-16 right-2": "top-14 right-1"} rounded-sm`}>
              <Link to="#" className="cursor-pointer hover:text-zinc-600">My Profile</Link>
              <br />
              <Link to="/login" className="cursor-pointer hover:text-zinc-600">Sign In</Link>
              <br />
              <Link to="/signup" className="cursor-pointer hover:text-zinc-600">Sign Up</Link>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar