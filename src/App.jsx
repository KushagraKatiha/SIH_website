import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'
import Slider from './components/Slider/Slider.jsx'
import Navbar from './components/NavigationBar/Navbar'
import SignUp from './components/UserPage/SignUpPage/SignUp'


function App() {

  const imgs = [
    'https://dummyimage.com/1920x560/e82121/fff',
    'https://dummyimage.com/1920x560/9d00f2/fff',
    'https://dummyimage.com/1920x560/3308f5/fff'
  ]
  
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus nunc nec turpis aliquam rhoncus. Cras sit amet odio bibendum, euismod neque non, venenatis nibh. Donec mi elit, tempus quis velit eget, pulvinar tempus nisi. Suspendisse id malesuada ante. Vestibulum vel luctus augue. Morbi eu ante urna. Suspendisse potenti. Maecenas.`
    
  return (
    <>
      <Navbar logo="/assets/image/favicon_io/android-chrome-192x192.png" link1="Home" link2="Contact Us" link3="About"/>
      {/* <Navbar2/> */}
      <Hero head1='The' head2=' Guardian' head3=' Chip' slogan='-Your Safety, Our Priority' content={content} img="/assets/image/WhatsApp Image 2023-10-02 at 11.06.03 PM.jpeg"/>
      <Slider imgs={imgs}/>
      <Footer/>

      {/* SignUp Page */}

      <SignUp/>
    </>
  )
}

export default App
