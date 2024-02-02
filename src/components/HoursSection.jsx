import React from 'react'
import './Styles/hours.css'

export default function HoursSection() {
  return (
    <div>
      <div className='hours d-flex flex-row justify-content-between'>
        <div className='hour ps-2'>Total hours</div>
        <div className='zeroes'>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            
        </div>
        <span className='pe-5'>0</span>
      </div>
      <div className='hours'>
        <div className='hour ps-2'>Machine Hours</div>
      </div>
      <div className='hours'>
        <div className='hour ps-2'>Break Hours</div>
      </div>
    </div>
  )
}
