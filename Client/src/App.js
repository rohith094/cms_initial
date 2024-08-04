import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Mainpage from './Mainpage';
import Academics from './Pages/Academics';
import Examinations from './Pages/Examinations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './ProtectedRoute';



function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/academics' element={<Academics />} />
          <Route path="/*" element={<Mainpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
