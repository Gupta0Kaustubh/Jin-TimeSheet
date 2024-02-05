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

  const [salesActivity, setSalesActivity] = useState([{ idk: 'a'+1 }]);

  const [leng,setleng]=useState(salesActivity.length);
  useEffect(()=>{
    setleng(salesActivity.length);
  },[salesActivity.length])

  const handlesalesActivity = () => {
  setSalesActivity(prevItemsk => [...prevItemsk, { idk: 'a'+(prevItemsk.length + 1) }]);
};


  const handleRemovesalesActivity = (itemIdk) => {
    setSalesActivity(prevItemsk => prevItemsk.filter(itemk => itemk.idk !== itemIdk));
  };

    return (
        <>
            <div className='activities'>
            <div className='activity_name'>BAU Activity</div>
            {contentItems.map((item) => (
                <div className=' activity d-flex justify-content-between flex-row' key={item.id}>
                <div className='dropdown d-flex flex-row gap-3'>
                        <div><select className='drop' name="cars" id="cars">
                        <option value="volvo">Project</option>
                        <option value="volvo">BAU_001 Training & Project Knowledge</option>
  <option value="saab">BAU_002 People</option>
  <option value="mercedes">BAU_003 Delivery</option>
  <option value="audi">BAU_004 Sales</option>
  <option value="audi">BAU_005 Events</option>
</select></div>
                <div><select className='drop' name="cars" id="cars">
  <option value="volvo">Task</option>
  <option value="volvo">Away Days</option>
  <option value="saab">Client Engagement Events</option>
  <option value="mercedes">Event Planning</option>
  <option value="audi">Learning Events & Conferences</option>
</select></div>
                <div><input type="text" className='drop' /></div> 
                </div>
                
                {["mon", "tue", "wed", "thr", "fri", "sat", "sun"].map((day) => (
                <div key={day} className='days'>
                  <input type='text' className='input' maxLength="1" onChange={(e) => handlemon(e, item.id, day)} />
                </div>
              ))}
          <div className='ps-4 hour'>{weakTotal.find((totalItem) => totalItem.id === item.id)?.total || 0}</div>
                    <div className='d-flex flex-row gap-2'>
                        <div onClick={handleAddContentItem}><FaPlus className='plus'/>
                        </div>
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
            {salesActivity.map((itemk) => (
                <div className=' activity d-flex justify-content-between flex-row' key={itemk.idk}>
                <div className='dropdown d-flex flex-row gap-3'>
                        <div><select className='drop' name="cars" id="cars">
  <option value="volvo">Project</option>
  <option value="saab">Account Management</option>
  <option value="mercedes">Lead Generation</option>
  <option value="audi">Opportunity</option>
</select></div>
                <div><select className='drop' name="cars" id="cars">
  <option value="volvo">Task</option>
  <option value="saab">OTPP - DD Support Healthcare (JB)</option>
  <option value="mercedes">FSN Capital - portfolio support (JT)</option>
  <option value="audi">EMR - business plan PMO (JT)</option>
  <option value="audi">World Courier - Mike Collins (JT)</option>
  <option value="audi">Hg - DD support for FY24 (JT / NM)</option>
</select></div>
                <div><input type="text" className='drop' /></div> 
                </div>
                
                {["mon", "tue", "wed", "thr", "fri", "sat", "sun"].map((day) => (
                <div key={day} className='days'>
                  <input type='text' className='input' maxLength="1" onChange={(e) => handlemon(e, itemk.idk, day)} />
                </div>
              ))}
          <div className='ps-4 hour'>{weakTotal.find((totalItem) => totalItem.idk === itemk.idk)?.total || 0}</div>
                    <div className='d-flex flex-row gap-2'>
                        <div onClick={handlesalesActivity}><FaPlus className='plus'/>
                        </div>
                {itemk.idk > 1 && (
        <div onClick={() => { handleRemovesalesActivity(itemk.idk) }}>
          <FaMinus className='plus' />
        </div>
      )}
                    </div>
                </div>
            ))}
            </div>
            <div className='hourly'>
      <div className='hours d-flex flex-row justify-content-between'>
        <div className='hourt ps-2'>Total hours</div>
        <div className='zeroes d-flex gap-4'>
          <div className='zero d-flex flex-row'>
          <div style={{ color: parseInt(daysValue.mon) > 8 ? 'red' : '' }} className='hour'>{daysValue.mon}</div>
          <div style={{ color: parseInt(daysValue.tue) > 8 ? 'red' : '' }} className='hour'>{daysValue.tue}</div>
          <div style={{ color: parseInt(daysValue.wed) > 8 ? 'red' : '' }} className='hour'>{daysValue.wed}</div>
          <div style={{ color: parseInt(daysValue.thr) > 8 ? 'red' : '' }} className='hour'>{daysValue.thr}</div>
          <div style={{ color: parseInt(daysValue.fri) > 8 ? 'red' : '' }} className='hour'>{daysValue.fri}</div>
          <div style={{ color: parseInt(daysValue.sat) > 8 ? 'red' : '' }} className='hour'>{daysValue.sat}</div>
          <div style={{ color: parseInt(daysValue.sun) > 8 ? 'red' : '' }} className='hour'>{daysValue.sun}</div>
          </div>
            
          <div className='ps-2 hour total'>{Total}</div>
            
        </div>
      </div>
      <div className='hours'>
        <div className='hourt ps-2'>Machine Hours</div>
      </div>
      <div className='hours'>
        <div className='hourt ps-2'>Break Hours</div>
      </div>
    </div>
        </>
      
  )
}
