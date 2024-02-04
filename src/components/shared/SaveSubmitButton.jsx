import React from 'react'
import '../Styles/savesubmit.css'
import { FaArrowRightLong } from "react-icons/fa6";


export default function SaveSubmitButton() {
  return (
    <div className='buttons d-flex flex-row gap-3 justify-content-end'>
      <button className='py-1 px-1'>Save</button>
      <button>Submit<FaArrowRightLong className='arrow'/></button>
    </div>
  )
}
