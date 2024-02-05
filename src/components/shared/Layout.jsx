import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import ActivitySection from '../ActivitySection';
import SaveSubmitButton from './SaveSubmitButton';

const Layout = ({ setDataCallback }) => {
  const [data, setData] = useState(0);

  function setdata(data) {
    setData(data);
    // Call the callback function to send data to the parent (App.js)
    setDataCallback(data);
  }

  return (
    <div className='d-flex flex-row w-100 h-100 overflow-hidden' style={{ backgroundColor: 'white', minHeight: '41rem' }}>
      <Sidebar />
      <div className='p-4'>
        <Header />
        <div style={{ paddingLeft: '2rem' }}>
          <Outlet />
          <ActivitySection setdata={setdata} />
          
          <SaveSubmitButton />
        </div>
      </div>
    </div>
  );
};

export default Layout;
