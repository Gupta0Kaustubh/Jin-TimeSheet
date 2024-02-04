import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import './Styles/activity.css';
import './Styles/hours.css'

export default function ActivitySection({setdata}) {
  
    const [days, setDays] = useState([{id:0,mon: 0,tue: 0,wed:0,thr:0,fri:0,sat:0,sun:0}]);
  const [daysValue, setDaysValue] = useState({mon: 0,tue: 0,wed:0,thr:0,fri:0,sat:0,sun:0});
  const [weakTotal,setWeakTotal]=useState([{id:0,total:0}]);
    const [Total,setTotal]=useState(0);

// handle days value
  function handlemon(e, itemId, day) {  
    const value = e.target.value;
    setDays((prevItems) => {
      const updatedDays = [...prevItems];
      const existingItem = updatedDays.find((item) => item.id === itemId);
  
      if (existingItem) {
        existingItem[day] = parseInt(value) || 0;
      } else {
        const newItem = { id: itemId, [day]: parseInt(value) || 0 };
        updatedDays.push(newItem);
      }
  
      return updatedDays;
    });
    console.log(days)
  }
useEffect(()=>{
  setdata(Total);
},[Total,setdata])
  
useEffect(() => {
  const newDayValue = {};
  const newWeakTotal = [];

  days.forEach((item) => {
    let total = 0;
    for (const day in item) {
      if (day !== 'id') {
        newDayValue[day] = (newDayValue[day] || 0) + (parseInt(item[day]) || 0);
        total = total + (parseInt(item[day]) || 0);
      }
    }
    newWeakTotal.push({ id: item.id, total: total });
  });
  
  let sum=0;
  weakTotal.forEach((item)=>{
      if(item!=='id'){
        sum=sum+item.total;
      }
  })
  setWeakTotal(newWeakTotal);
  setDaysValue(newDayValue);
  setTotal(sum);
  console.log("total", newWeakTotal);
}, [days,weakTotal]);


  const [contentItems, setContentItems] = useState([{ id: 1}]);
  const [len,setlen]=useState(contentItems.length);
  useEffect(()=>{
    setlen(contentItems.length);
  },[contentItems.length])


  const handleAddContentItem = () => {
    setContentItems(prevItems => [...prevItems, { id: prevItems.length + 1 }]);
  };

  const handleRemoveContentItem = (itemId) => {
    setContentItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const [salesActivity, setsalesActivity] = useState([{ id: 'a'+1 }]);
  const [leng,setleng]=useState(salesActivity.length);
  useEffect(()=>{
    setleng(salesActivity.length);
  },[salesActivity.length])

  const handlesalesActivity = () => {
    setsalesActivity(prevItems => [...prevItems, { id: 'a'+prevItems.length + 1 }]);
  };

  const handleRemovesalesActivity = (itemId) => {
    setsalesActivity(prevItems => prevItems.filter(item => item.id !== itemId));
  };

    return (
        <>
            <div className='activities'>
            <div className='activity_name'>BAU Activity</div>
            {contentItems.map((item) => (
                <div className=' activity d-flex justify-content-between flex-row' key={item.id}>
                <div className='d-flex flex-row gap-3'>
                        <div><select className='drop' name="cars" id="cars">
  <option value="volvo">Project</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></div>
                <div><select className='drop' name="cars" id="cars">
  <option value="volvo">Task</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></div>
                <div><input type="text" className='drop' /></div> 
                </div>
                
                {["mon", "tue", "wed", "thr", "fri", "sat", "sun"].map((day) => (
                <div key={day} className='days'>
                  <input type='text' maxLength="1" onChange={(e) => handlemon(e, item.id, day)} />
                </div>
              ))}
          <div className='days'>{weakTotal.find((totalItem) => totalItem.id === item.id)?.total || 0}</div>
                    <div className='d-flex flex-row gap-2'>
                        <div onClick={handleAddContentItem}><FaPlus className='plus'/></div>
                {item.id > 1 && (
        <div onClick={() => { handleRemoveContentItem(item.id) }}>
          <FaMinus className='plus' />
        </div>
      )}
                    </div>
                
                </div>
            ))}
            </div>
            <div className='activities'>
            <div className='activity_name'>Sales Activity</div>
            {salesActivity.map((item) => (
                <div className=' activity d-flex justify-content-between flex-row' key={item.id}>
                <div className='d-flex flex-row gap-3'>
                        <div><select className='drop' name="cars" id="cars">
  <option value="volvo">Project</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></div>
                <div><select className='drop' name="cars" id="cars">
  <option value="volvo">Task</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></div>
                <div><input type="text" className='drop' /></div> 
                </div>
                
                {["mon", "tue", "wed", "thr", "fri", "sat", "sun"].map((day) => (
                <div key={day} className='days'>
                  <input type='text' maxLength="1" onChange={(e) => handlemon(e, item.id, day)} />
                </div>
              ))}
          <div className='days'>{weakTotal.find((totalItem) => totalItem.id === item.id)?.total || 0}</div>
                    <div className='d-flex flex-row gap-2'>
                        <div onClick={handlesalesActivity}><FaPlus className='plus'/></div>
                {item.id > 1 && (
        <div onClick={() => { handleRemovesalesActivity(item.id) }}>
          <FaMinus className='plus' />
        </div>
      )}
                    </div>
                
                </div>
            ))}
            </div>
            <div className='hourly'>
      <div className='hours d-flex flex-row justify-content-between'>
        <div className='hour ps-2'>Total hours</div>
        <div className='zeroes d-flex gap-4'>
            <div className='days' >{daysValue.mon}</div>
          <div className='days'>{daysValue.tue}</div>
          <div className='days'>{daysValue.wed}</div>
          <div className='days'>{daysValue.thr}</div>
          <div className='days'>{daysValue.fri}</div>
          <div className='days'>{daysValue.sat}</div>
          <div className='days'>{daysValue.sun}</div>
          <div className='days'>{Total}</div>
            
        </div>
      </div>
      <div className='hours'>
        <div className='hour ps-2'>Machine Hours</div>
      </div>
      <div className='hours'>
        <div className='hour ps-2'>Break Hours</div>
      </div>
    </div>
        </>
    
      
      
  )
}
