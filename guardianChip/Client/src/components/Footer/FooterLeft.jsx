import React from 'react'

function FooterLeft({heading, slogan, details, img1, img2, img3, copyright}) {
  return (
    <>
        <div className="  text-white">
          <div className="flex flex-col gap-2">
            <img
              className="h-8 w-8 rounded-full"
              src={img1}
              alt="logo"
            />
            <p>
              <span className="font-bold text-lg text-orange-500">{heading}</span><br />
              <span className="text-right text-orange-500">- {slogan}</span>
              <br />                            
            </p>
          </div>
          
          <br />
          <div className="flex gap-6">
            <img
              src={img2}
              alt="certificate"
              className="h-8 w-8 rounded-full"
            />
            <img
              src={img3}
              alt="isoImg"
              className="h-8 w-8 rounded-full"
            />
          </div>
            <br />
            <div className='w-64'>
            <p>{details}</p>
            </div>
            <br />
          <p className='font-semibold text-green-500'>{copyright}</p>
        </div>
    </>
  )
}

export default FooterLeft