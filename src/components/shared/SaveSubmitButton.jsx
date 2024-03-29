import React from 'react';
import '../Styles/savesubmit.css';
import { FaArrowRightLong } from "react-icons/fa6";

export default function SaveSubmitButton({ data, days }) {

  const handleSaveData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(days),
      });

      if (response.ok) {
        console.log("Data saved successfully");
        submit();
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  const submit = () => {
    if (parseInt(data) !== 0) {
      alert('TimeSheet Submitted !!!');
      window.location.reload();
    } else {
      alert('Fill the form first before submitting !!!');
    }
  };

  const save = () => {
    // Implement your save functionality here if needed
    alert('Form data saved !!!');
  };

  return (
    <div className='buttons d-flex flex-row gap-3 justify-content-end'>
      <button onClick={save} className='py-1 px-1'>Save</button>
      <button onClick={handleSaveData}>Submit<FaArrowRightLong className='arrow' /></button>
    </div>
  );
}
