import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import '../components/Styles/dashboard.css'
import { IoIosArrowDropdown } from "react-icons/io";


export const Dashboard = () => {
  return (
    <div className='maind d-flex flex-column'>
        <div className='space d-flex flex-row'>
          <div>Total Hours: 0.0</div>
          <div className=' d-flex align-items-center '>
            <MdKeyboardArrowLeft />
            <div className='px-2'>29 Jan 2024 - 04 Feb 2024</div>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className='allo d-flex justify-content-between'>
          <div>Allocation Extension</div>
          <div className='pe-3'><IoIosArrowDropdown fontSize={22} /></div>
        </div>
        <div className='allo'>Timesheet</div>
        <div className='heading d-flex flex-row align-items-center justify-content-evenly'>
          <span className='day1'>Project Type</span>
          <span className='day1'>Project Name</span>
          <span className='day1'>Task</span>
          <span className='day1'>Comment</span>
          <div className='d-flex flex-column'>
            <span className='day'>Mon</span>
            <p>29</p>
          </div>
          <div className='d-flex flex-column'>
            <span className='day'>Tue</span>
            <p>30</p>
          </div>
          <div className='d-flex flex-column'>
            <span className='day'>Wed</span>
            <p>31</p>
          </div>
          <div className='d-flex flex-column'>
            <span className='day'>Thu</span>
            <p>1</p>
          </div>
          <div className='d-flex flex-column'>
            <span className='day'>Fri</span>
            <p>2</p>
          </div>
          <div className='d-flex flex-column'>
            <span className='day'>Sat</span>
            <p>3</p>
          </div>
          <div className='d-flex flex-column'>
            <span className='day'>Sun</span>
            <p>4</p>
          </div>
          <span className='day1'>Total</span>
        </div>

    </div>
  )
}
