import React from 'react'

export default function Hero({head1,head2,head3, slogan, content, img}) {
  return (
    <>
      <div className="flex gap-2 p-5 justify-around mt-52 mb-48 items-center font-display">
          <div className="w-1/2 text-white">
              <h1 className="text-5xl font-bold"><span className="text-orange-500">{head1}</span>{head2}<span className="text-green-500">{head3}</span></h1>
              <br/>
              <h3 className="text-center text-2xl">{slogan}</h3>
              <br/>
              <br/>
              <p className="text-xl">{content}</p>
          </div>

          <div>
              <img src={img} alt="product Image" className="h-96 w-96 rounded-full bg-slate-400"/>
          </div>

      </div>
    </>
  )
}