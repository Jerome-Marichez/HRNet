import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import Home from './pages/Home';
import Error from './pages/Error';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="employee-list" element={<EmployeeList/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

