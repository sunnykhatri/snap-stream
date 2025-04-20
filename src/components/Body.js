import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='grid grid-flow-col pl-6 pr-6'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body