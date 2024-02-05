import React from 'react'
import '../Styles/savesubmit.css'
import { FaArrowRightLong } from "react-icons/fa6";


export default function SaveSubmitButton({data}) {
  function save() {
    // console.log({data});
    alert('Form data saved !!!');
  }
  function submit(){
    if(parseInt(data)!==0){
      alert('TimeSheet Submitted !!!');
      window.location.reload();
    }
    else{
      alert('Fill the form first before submitting !!!');
    }
    
  }
  return (
    <div className='buttons d-flex flex-row gap-3 justify-content-end'>
      <button onClick={save} className='py-1 px-1'>Save</button>
      <button onClick={submit}>Submit<FaArrowRightLong className='arrow'/></button>
    </div>
  )
}
