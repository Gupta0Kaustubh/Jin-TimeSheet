import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import { Dashboard } from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to store data received from Layout
  const [receivedData, setReceivedData] = useState(null);

  // Callback function to receive data from Layout
  const receiveDataFromLayout = (data) => {
    // Handle the received data, you can set it to state or perform any other actions
    setReceivedData(data);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout setDataCallback={receiveDataFromLayout} />}>
          <Route index element={<Dashboard receivedData={receivedData} />} />
        </Route>
        <Route path='login' element={<div>Login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
