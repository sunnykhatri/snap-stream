import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-4 py-1 mr-2 bg-neutral-800 text-white text-sm border-gray-800 border-2 cursor-pointer rounded-lg'>{name}</button>
  )
}

export default Button