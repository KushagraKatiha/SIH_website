import React from 'react'
import FooterLeft from './FooterLeft.jsx'
import FooterRight from './FooterRight.jsx'

function Footer() {
  const heading='The Guardian Chip'
  const slogan='Your Safety, Our Priority'
  const details = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod est rerum optio doloribus ratione ex quo at blanditiis enim sit!'
  const img1 = '/assets/image/banner_img2.jpeg'
  const img2 = '/assets/image/banner_img2.jpeg'
  const img3 = '/assets/image/banner_img2.jpeg'
  const copyright = 'Copyright @2023 All rights reserved'

  return (
    <>
      <div className='bg-black flex flex-wrap gap-12 justify-between p-10 pl-24 pr-24'>
        <FooterLeft heading={heading} slogan={slogan} details={details} img1={img1} img2={img2} img3={img3} copyright={copyright} />
        <FooterRight/>
      </div>
    </>
  )
}

export default Footer