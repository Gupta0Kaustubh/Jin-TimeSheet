import React from 'react'
import { FcBullish } from "react-icons/fc";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import '../Styles/sidebar.css'

export default function Sidebar() {
  return (
    <div className=' main d-flex flex-column p-3 text-white'>
      <div className='d-flex align-items-center justify-conetent-center g-2 px-1 py-3'>
            <FcBullish fontSize={24}/>
      </div>
      <div className=' side_items flex-grow-1 d-flex flex-column'>
        <span className='fs-6'>Dashboard</span>
        <span className='fs-6'>Timesheet</span>
        <span className='fs-6'>Leave</span>
        <span className='fs-6'>Work From Home</span>
        <span className='fs-6'>Survey</span>
        <span className='fs-6'>Service Desk</span>
        <span className='fs-6'>Forms</span>
        <span className='fs-6'>Travel</span>
        <span className='fs-6'>Expenses</span>
        <span className='fs-6'>Resourcing</span>
      </div>
      <div className=' name d-flex gap-4'>
        <span className='side_items fs-6 ms-2'>Kaustubh</span>
        <FaArrowRightFromBracket className='ms-4 mt-1'/>
      </div>
    </div>
  )
}
