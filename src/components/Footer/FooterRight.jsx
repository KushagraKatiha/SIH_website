import React from 'react'
import List from '../List/List'
import { FaPhoneAlt,FaGithubSquare,FaLinkedin,FaGoogle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function FooterRight() {

    const items = [
        "Amitesh Jha",
        "Kushagra Katiha",
        "Sonaly Jain",
        "Astha Pandey",
        "Saiyam Jain",
        "Arpit Jain"    
    ]

    const contacts = [
        <IoMail/> ,
        <a href="#" className='text-blue-500'>abc@gmail.com</a>,
        <br/>,
        <FaPhoneAlt/>,
        <a href="#" className='text-blue-500'>+91XXXXXXXXX0</a>
    ]

    const social = [
      <FaLinkedin className='text-2xl'/>,
      <br/>,
      <FaGoogle className='text-2xl'/>

    ]

  return (
    <div className='text-white flex gap-14 flex-wrap'>
        <List color="text-orange-500" heading="Product Developers" listItems={items}/>
        <List heading="Contact" listItems={contacts}/>
        <List color="text-green-500" heading="Social" listItems={social}/>
    </div>
  )
}

export default FooterRight