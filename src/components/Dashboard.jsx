import React, {useState} from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import '../components/Styles/dashboard.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import DropdownAllocation from './DropdownAllocation';



export const Dashboard = ({ receivedData }) => {

  const getFormattedDate = () => {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    
    // Calculate the start date (Monday of the current week)
    currentDate.setDate(currentDate.getDate() - daysUntilMonday);
    const startDate = currentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    
    // Calculate the end date (Sunday of the current week)
    currentDate.setDate(currentDate.getDate() + 6);
    const endDate = currentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    const formattedDate = `${startDate} - ${endDate}`;
    return formattedDate;
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };


  return (
    <div className='maind d-flex flex-column'>
        <div className='space d-flex flex-row'>
          <div className='total_hours'>Total Hours: {receivedData === 0 ? '0.0' : receivedData}</div>
          <div className=' d-flex align-items-center '>
            <MdKeyboardArrowLeft className='arr'/>
            <div className='date_range px-2'>{getFormattedDate()}</div>
            <MdKeyboardArrowRight className='arr' />
          </div>
        </div>
        <div className='allo d-flex justify-content-between'>
          <div>Allocation Extension</div>
          <div className={`pe-3 down_arrow ${isDropdownVisible ? 'true' : 'false'}`} onClick={toggleDropdown}>
            {isDropdownVisible ? <MdKeyboardArrowUp fontSize={26} /> : <MdKeyboardArrowDown fontSize={26} />}  
          </div>
          
        </div>
        {isDropdownVisible && <DropdownAllocation />}
        <div className='allo'>Timesheet</div>
        <div className='heading d-flex flex-row align-items-center justify-content-between ps-2 pe-5'>
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
