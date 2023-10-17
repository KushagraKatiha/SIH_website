import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'
import Slider from './components/slider/Slider.jsx'

function App() {

  const images = [
    'https://dummyimage.com/%201366%20x%20768/e8e1e1/3d49ed.jpg',
    'https://dummyimage.com/%201366%20x%20768/5a93c4/3d49ed.jpg'
  ]

  const imgs = [
    'https://dummyimage.com/1920x560/e82121/fff',
    'https://dummyimage.com/1920x560/9d00f2/fff',
    'https://dummyimage.com/1920x560/3308f5/fff'
  ]
   
    
  return (
    <>
      <Navbar logo="/assets/image/favicon_io/android-chrome-192x192.png" link1="Home" link2="Contact Us" link3="About"/>
      <Hero head1='The' head2=' Guardian' head3=' Chip' slogan='-Your Safety, Our Priority' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus nunc nec turpis aliquam rhoncus. Cras sit amet odio bibendum, euismod neque non, venenatis nibh. Donec mi elit, tempus quis velit eget, pulvinar tempus nisi. Suspendisse id malesuada ante. Vestibulum vel luctus augue. Morbi eu ante urna. Suspendisse potenti. Maecenas.' img="/assets/image/WhatsApp Image 2023-10-02 at 11.06.03 PM.jpeg"/>
      <Slider imgs={imgs}/>
      <Footer/>
    </>
  )
}

export default App
