import React from 'react'
import './Styles/dropdown.css'

export default function DropdownAllocation() {
  return (
    <div>
      <div className='heading1 d-flex flex-row align-items-center justify-content-between ps-2 pe-5'>
          <span className='day1'>Project Name</span>
          <span className='day1'>Project Type</span>
          <span className='day1'>Project end date</span>
          <span className='day1'>Allocation end date</span>
          <span className='day1'>Allocation extension</span>
        </div>
        <div className='heading2 d-flex align-items-center justify-content-center py-2'>No available options</div>
    </div>
  )
}
