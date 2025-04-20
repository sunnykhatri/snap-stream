import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='grid grid-cols-12 grid-flow-col px-6'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body