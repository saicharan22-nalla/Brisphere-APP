import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage'
//import BookingPage from './Pages/BookingPage/BookingPage';
//import OrderCompletePage from './Pages/OrderCompletePage/OrderCompletePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;



