import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import Home from './pages/Home';
import { errorPath, employeePath } from './utils/routesPath';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={employeePath} element={<EmployeeList />} />
        <Route path={errorPath} element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

