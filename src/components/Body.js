import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-cols-12 grid-flow-col px-6'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body