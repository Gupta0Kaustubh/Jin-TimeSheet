import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import Header from './Header'
import HoursSection from '../HoursSection';

const Layout = () => {
  return (
    <div className='d-flex flex-row w-100 h-100 overflow-hidden' style={{backgroundColor:'white', minHeight:'41rem'}}>
        <Sidebar />
        <div className='p-4'>
        <Header />
        <div style={{paddingLeft:'2rem'}}>{<Outlet />}
        <HoursSection /></div>
        
        </div>
        
    </div>
  )
}

export default Layout;
