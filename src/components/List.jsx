import React from 'react'

function List({heading, listItems,color}) {
  return (
    <ul className={color}>
        <h1 className='text-lg font-bold underline underline-offset-4'>{heading}</h1>
        <br />
        {listItems.map((el, idx)=>{
          return <li key={idx}>{el}</li>
        })}
    </ul>
  )
}

export default List